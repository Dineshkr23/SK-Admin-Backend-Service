/**
 * Backfill missed image uploads to backend S3.
 *
 * Problem this script targets:
 * - In FormSubmission, image fields still contain the same legacy value
 *   that is stored in LegacyRegistration.rawDetailRecord.
 * - That indicates the legacy image (base64 or GCS/local path) was never
 *   uploaded to our backend S3.
 *
 * What it does:
 * - Loads LegacyRegistration.rawDetailRecord + linked FormSubmission row.
 * - For each image column, if FormSubmission.*ProofPath/value matches the
 *   legacy source value, upload to S3 and update FormSubmission to the S3 URL.
 * - If the upload source is base64/*ProofData, it clears the corresponding
 *   *ProofData to force the UI to use the new *ProofPath URL.
 *
 * Usage:
 *   DATABASE_URL=... npx ts-node -r tsconfig-paths/register scripts/backfill-form-submission-images-to-s3.ts \
 *     --dry-run --formType dealer --limit 25
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

type JsonRecord = Record<string, unknown>;

const ALL_FORM_TYPES = [
  'dealer',
  'commercial',
  'individual',
  'architectEngineer',
  'masonBarBender',
] as const;
type FormType = (typeof ALL_FORM_TYPES)[number];

function getArgValue(args: string[], flag: string): string | undefined {
  const idx = args.findIndex((a) => a === flag);
  if (idx < 0) return undefined;
  const v = args[idx + 1];
  if (v == null || v.startsWith('--')) return undefined;
  return v;
}

function normalizeNullableString(v: unknown): string | undefined {
  if (v == null) return undefined;
  if (typeof v === 'string') {
    const s = v.trim();
    if (!s) return undefined;
    if (s.toLowerCase() === 'undefined') return undefined;
    return s;
  }
  if (typeof v === 'number') {
    if (!Number.isFinite(v)) return undefined;
    const s = String(v).trim();
    return s ? s : undefined;
  }
  return undefined;
}

function asRecord(json: unknown): JsonRecord | undefined {
  if (json == null) return undefined;
  if (typeof json !== 'object') return undefined;
  if (Array.isArray(json)) return undefined;
  return json as JsonRecord;
}

function stripTrailingSlash(s: string): string {
  return s.replace(/\/$/, '');
}

function s3PublicBaseUrl(): string {
  const publicUrl = process.env.S3_PUBLIC_URL;
  if (publicUrl && publicUrl.trim()) return stripTrailingSlash(publicUrl);
  const endpoint = process.env.S3_ENDPOINT;
  const bucket = process.env.S3_BUCKET ?? 'sksupertmt-uploads';
  if (endpoint && endpoint.trim()) return `${stripTrailingSlash(endpoint)}/${bucket}`;
  const region = process.env.S3_REGION ?? 'us-east-1';
  return `https://${bucket}.s3.${region}.amazonaws.com`;
}

function guessImageContentType(buf: Buffer): string {
  if (buf.length >= 8) {
    // PNG signature: 89 50 4E 47 0D 0A 1A 0A
    if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
      return 'image/png';
    }
    // JPEG signature: FF D8
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      return 'image/jpeg';
    }
    // WebP signature: RIFF....WEBP
    if (buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46) {
      if (buf.length >= 12 && buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50) {
        return 'image/webp';
      }
    }
  }
  return 'application/octet-stream';
}

function safeFileExtFromContentType(contentType: string | undefined): string {
  const ct = (contentType ?? '').toLowerCase();
  if (ct.includes('png')) return 'png';
  if (ct.includes('jpeg') || ct.includes('jpg')) return 'jpg';
  if (ct.includes('webp')) return 'webp';
  if (ct.includes('pdf')) return 'pdf';
  return 'bin';
}

function decodeMaybeDataUrl(base64OrDataUrl: string): { buf: Buffer; contentType?: string } | null {
  const raw = base64OrDataUrl.trim();
  if (!raw) return null;
  const m = raw.match(/^data:([^;]+);base64,(.+)$/i);
  if (m) {
    const contentType = m[1];
    const b64 = m[2];
    try {
      return { buf: Buffer.from(b64, 'base64'), contentType };
    } catch {
      return null;
    }
  }
  try {
    return { buf: Buffer.from(raw, 'base64') };
  } catch {
    return null;
  }
}

function isS3Url(url: string, s3Base: string): boolean {
  return stripTrailingSlash(url).startsWith(`${s3Base}/`);
}

async function readFileMaybe(filePath: string): Promise<Buffer | null> {
  try {
    const data = await fs.promises.readFile(filePath);
    return data;
  } catch {
    return null;
  }
}

function maybeNormalizeLegacyUrl(url: string): string {
  const u = url.trim();
  if (!u) return u;
  if (u.startsWith('storage.googleapis.com/')) return `https://${u}`;
  if (u.startsWith('http://') || u.startsWith('https://')) return u;
  return u;
}

async function fetchUrlToBuffer(url: string): Promise<{ buf: Buffer; contentType?: string } | null> {
  const res = await fetch(url);
  if (!res.ok) return null;
  const arr = new Uint8Array(await res.arrayBuffer());
  const buf = Buffer.from(arr);
  const contentType = res.headers.get('content-type') ?? guessImageContentType(buf);
  return { buf, contentType };
}

async function uploadToS3(
  s3: S3Client,
  submissionId: string,
  logicalField: string,
  body: Buffer,
  contentType: string | undefined,
): Promise<string> {
  const bucket = process.env.S3_BUCKET ?? 'sksupertmt-uploads';
  const ext = safeFileExtFromContentType(contentType);
  const key = `form-submissions/${submissionId}/${logicalField}-backfilled-${Date.now()}.${ext}`;
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType ?? 'application/octet-stream',
    }),
  );
  return `${s3PublicBaseUrl()}/${key}`;
}

type ImageUpdatePlan = {
  submissionId: string;
  formType: FormType;
  // Columns on FormSubmission to update:
  patch: Partial<{
    photoProofPath: string | null;
    photoProofData: string | null;
    idProofPath: string | null;
    idProofData: string | null;
    idProofBackPath: string | null;
    idProofBackData: string | null;
    panProofPath: string | null;
    panProofData: string | null;
  }>;
  debug: string[];
};

function buildDealerLogicalSources(raw: JsonRecord) {
  // Dealer admin:
  // - ID Proof card  => idProofPath/idProofData
  // - GST Certificate => idProofBackPath/idProofBackData
  // - Shop Photo      => photoProofPath/photoProofData
  // - PAN Card        => panProofPath/panProofData
  return {
    photo: {
      legacyPath: normalizeNullableString(raw['shopPhotoProofPath']),
      legacyData: normalizeNullableString(raw['shopPhotoProofData']),
      subPath: undefined as string | undefined,
      subData: undefined as string | undefined,
    },
    idProof: {
      legacyPath: normalizeNullableString(raw['idProofPath']) ?? normalizeNullableString(raw['idProofBackPath']),
      legacyData: normalizeNullableString(raw['idProofData']) ?? normalizeNullableString(raw['idProofBackData']),
    },
    gst: {
      legacyPath: normalizeNullableString(raw['gstProofPath']) ?? normalizeNullableString(raw['idProofBackPath']),
      legacyData: normalizeNullableString(raw['gstProofBackData']) ?? normalizeNullableString(raw['idProofBackData']),
    },
    pan: {
      legacyPath: normalizeNullableString(raw['panProofPath']) ?? normalizeNullableString(raw['panProofBackPath']),
      legacyData: normalizeNullableString(raw['panProofData']),
    },
  };
}

function buildNonDealerLogicalSources(raw: JsonRecord) {
  return {
    photo: {
      legacyPath: normalizeNullableString(raw['photoProofPath']),
      legacyData: normalizeNullableString(raw['photoProofData']),
    },
    idProof: {
      legacyPath: normalizeNullableString(raw['idProofPath']),
      legacyData: normalizeNullableString(raw['idProofData']),
    },
    gst: {
      legacyPath: normalizeNullableString(raw['idProofBackPath']),
      legacyData: normalizeNullableString(raw['idProofBackData']),
    },
    pan: {
      // Non-dealer forms don't use panProof in the UI; keep empty.
      legacyPath: undefined,
      legacyData: undefined,
    },
  };
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run') || args.includes('-d');
  const verbose = args.includes('--verbose');
  const formTypeArg = getArgValue(args, '--formType');
  const limitStr = getArgValue(args, '--limit');
  const limit = limitStr ? Number(limitStr) : undefined;

  const formTypes: FormType[] = formTypeArg
    ? formTypeArg
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .filter((s): s is FormType => (ALL_FORM_TYPES as readonly string[]).includes(s))
    : [...ALL_FORM_TYPES];

  if (formTypes.length === 0) {
    // eslint-disable-next-line no-console
    console.error('No valid --formType provided');
    process.exit(1);
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    // eslint-disable-next-line no-console
    console.error('DATABASE_URL is required');
    process.exit(1);
  }

  const s3Base = s3PublicBaseUrl();
  const S3_ENDPOINT = process.env.S3_ENDPOINT;
  const S3_REGION = process.env.S3_REGION ?? 'us-east-1';
  const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY;
  const S3_SECRET_KEY = process.env.S3_SECRET_KEY;
  const s3 = new S3Client({
    region: S3_REGION,
    ...(S3_ENDPOINT && { endpoint: S3_ENDPOINT, forcePathStyle: true }),
    ...(S3_ACCESS_KEY &&
      S3_SECRET_KEY && {
        credentials: { accessKeyId: S3_ACCESS_KEY, secretAccessKey: S3_SECRET_KEY },
      }),
  });

  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

  const BATCH_SIZE = 100;
  let cursor: string | undefined;
  let processed = 0;
  let planned = 0;
  let uploaded = 0;
  let skipped = 0;

  // eslint-disable-next-line no-console
  console.log(
    `Backfilling FormSubmission image paths to S3 for formTypes=[${formTypes.join(',')}], dryRun=${dryRun}, limit=${limit ?? 'none'}`,
  );

  while (true) {
    const batch = await prisma.legacyRegistration.findMany({
      take: BATCH_SIZE,
      orderBy: { id: 'asc' },
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
      where: {
        submissionId: { not: null },
        submission: {
          formType: { in: formTypes as unknown as string[] },
        },
      },
      select: {
        id: true,
        rawDetailRecord: true,
        submissionId: true,
        submission: {
          select: {
            id: true,
            formType: true,
            photoProofPath: true,
            photoProofData: true,
            idProofPath: true,
            idProofData: true,
            idProofBackPath: true,
            idProofBackData: true,
            panProofPath: true,
            panProofData: true,
          },
        },
      },
    });

    if (batch.length === 0) break;

    let limitReached = false;
    for (const lr of batch) {
      const sub = lr.submission;
      if (!sub) continue;
      const raw = asRecord(lr.rawDetailRecord);
      if (!raw) continue;

      if (limit != null && processed >= limit) {
        limitReached = true;
        break;
      }
      processed += 1;

      const formType = sub.formType as FormType;
      const sources = formType === 'dealer' ? buildDealerLogicalSources(raw) : buildNonDealerLogicalSources(raw);

      const planDebug: string[] = [];
      const patch: ImageUpdatePlan['patch'] = {};

      const maybeQueue = async (opts: {
        logicalField: 'photo' | 'idProof' | 'gst' | 'pan';
        subPath: string | null | undefined;
        subData: string | null | undefined;
        legacyPath: string | undefined;
        legacyData: string | undefined;
        setPathKey: keyof ImageUpdatePlan['patch'];
        setDataKey: keyof ImageUpdatePlan['patch'];
      }): Promise<void> => {
        const legacyPathNorm = opts.legacyPath
          ? normalizeNullableString(opts.legacyPath)
          : undefined;
        const legacyDataNorm = opts.legacyData
          ? normalizeNullableString(opts.legacyData)
          : undefined;

        // Decide whether we need to upload:
        // - If legacyPath exists and subPath equals legacyPath => missed upload.
        // - If legacyData exists and subData equals legacyData (or subPath missing) => missed upload.
        const subPathNorm = opts.subPath ? String(opts.subPath).trim() : undefined;
        const subDataNorm = opts.subData ? String(opts.subData).trim() : undefined;

        const needFromPath =
          legacyPathNorm && subPathNorm && subPathNorm === legacyPathNorm;
        const needFromData =
          legacyDataNorm && subDataNorm && subDataNorm === legacyDataNorm;
        const needFromDataEvenIfSubDataNull =
          legacyDataNorm &&
          (subDataNorm === undefined || subDataNorm === null) &&
          (!subPathNorm || subPathNorm === '');

        if (!needFromPath && !needFromData && !needFromDataEvenIfSubDataNull) {
          skipped += 1;
          return;
        }

        if (dryRun) {
          // In dry-run mode, don't fetch/read/upload; only record what would change.
          if (legacyDataNorm && (needFromPath || needFromData || needFromDataEvenIfSubDataNull)) {
            patch[opts.setPathKey] = '__DRY_RUN__' as any;
            patch[opts.setDataKey] = null;
            planDebug.push(`${opts.logicalField}: WOULD upload from base64 data (preferred)`);
            return;
          }
          if (needFromPath) {
            if (legacyPathNorm && isS3Url(legacyPathNorm, s3Base)) {
              planDebug.push(`${opts.logicalField}: legacy path already looks like S3, skipping`);
              skipped += 1;
              return;
            }
            patch[opts.setPathKey] = '__DRY_RUN__' as any;
            planDebug.push(`${opts.logicalField}: WOULD upload from path`);
            return;
          }
          return;
        }

        // Prefer base64 if available (covers cases where legacyPath is local/unfetchable).
        if (legacyDataNorm && (needFromPath || needFromData || needFromDataEvenIfSubDataNull)) {
          const decoded = decodeMaybeDataUrl(legacyDataNorm);
          if (!decoded) {
            planDebug.push(`${opts.logicalField}: failed to decode base64 (will try path fallback if available)`);
          } else {
            const contentType = decoded.contentType ?? guessImageContentType(decoded.buf);
            const s3Url = await uploadToS3(s3, sub.id, opts.logicalField, decoded.buf, contentType);
            patch[opts.setPathKey] = s3Url;
            patch[opts.setDataKey] = null;
            planDebug.push(`${opts.logicalField}: uploaded from data (preferred) => ${s3Url}`);
            uploaded += 1;
            return;
          }
        }

        if (needFromPath) {
          if (!legacyPathNorm) return;
          if (isS3Url(legacyPathNorm, s3Base)) {
            planDebug.push(`${opts.logicalField}: legacy path already looks like S3, skipping`);
            skipped += 1;
            return;
          }
          const normalizedUrl = maybeNormalizeLegacyUrl(legacyPathNorm);

          // Try URL fetch first.
          let fetched: { buf: Buffer; contentType?: string } | null = null;
          if (normalizedUrl.startsWith('http://') || normalizedUrl.startsWith('https://')) {
            fetched = await fetchUrlToBuffer(normalizedUrl);
          }
          // If not fetchable, try reading local file.
          if (!fetched) {
            const buf = await readFileMaybe(normalizedUrl);
            if (!buf) {
              planDebug.push(`${opts.logicalField}: could not fetch/read legacy path=${legacyPathNorm}`);
              return;
            }
            fetched = { buf, contentType: guessImageContentType(buf) };
          }

          const s3Url = await uploadToS3(s3, sub.id, opts.logicalField, fetched.buf, fetched.contentType);
          patch[opts.setPathKey] = s3Url;
          planDebug.push(`${opts.logicalField}: uploaded from path => ${s3Url}`);
          uploaded += 1;
          return;
        }
      };

      const subPhotoPath = sub.photoProofPath;
      const subPhotoData = sub.photoProofData;
      const subIdProofPath = sub.idProofPath;
      const subIdProofData = sub.idProofData;
      const subIdProofBackPath = sub.idProofBackPath;
      const subIdProofBackData = sub.idProofBackData;
      const subPanPath = sub.panProofPath;
      const subPanData = sub.panProofData;

      const isDealer = formType === 'dealer';

      // photo => photoProof*
      await maybeQueue({
        logicalField: 'photo',
        subPath: subPhotoPath,
        subData: subPhotoData,
        legacyPath: sources.photo.legacyPath,
        legacyData: sources.photo.legacyData,
        setPathKey: 'photoProofPath',
        setDataKey: 'photoProofData',
      });

      // id proof => idProof*
      await maybeQueue({
        logicalField: 'idProof',
        subPath: subIdProofPath,
        subData: subIdProofData,
        legacyPath: sources.idProof.legacyPath,
        legacyData: sources.idProof.legacyData,
        setPathKey: 'idProofPath',
        setDataKey: 'idProofData',
      });

      // gst certificate => idProofBack*
      await maybeQueue({
        logicalField: 'gst',
        subPath: subIdProofBackPath,
        subData: subIdProofBackData,
        legacyPath: sources.gst.legacyPath,
        legacyData: sources.gst.legacyData,
        setPathKey: 'idProofBackPath',
        setDataKey: 'idProofBackData',
      });

      // pan only for dealer
      if (isDealer) {
        await maybeQueue({
          logicalField: 'pan',
          subPath: subPanPath,
          subData: subPanData,
          legacyPath: sources.pan.legacyPath,
          legacyData: sources.pan.legacyData,
          setPathKey: 'panProofPath',
          setDataKey: 'panProofData',
        });
      }

      if (Object.keys(patch).length > 0) {
        planned += 1;
        if (dryRun) {
          // eslint-disable-next-line no-console
          console.log(`DRY_RUN image update submissionId=${sub.id} formType=${sub.formType}`, {
            patchKeys: Object.keys(patch),
            debug: planDebug,
          });
        } else {
          await prisma.formSubmission.update({
            where: { id: sub.id },
            data: patch as any,
          });
        }
      } else if (!dryRun && verbose && planDebug.length > 0) {
        // eslint-disable-next-line no-console
        console.log(`UPLOAD_FAILED_OR_SKIPPED submissionId=${sub.id} formType=${sub.formType}`, {
          debug: planDebug,
        });
      }
    }

    if (limitReached) break;

    const last = batch[batch.length - 1];
    cursor = last.id;
  }

  // eslint-disable-next-line no-console
  console.log({
    processed,
    planned,
    uploaded,
    skipped,
    dryRun,
    formTypes: formTypes.join(','),
  });

  await prisma.$disconnect();
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});

