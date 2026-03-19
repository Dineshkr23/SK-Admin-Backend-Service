/**
 * One-off migration: table.json + tableMetaData/record-{N}.json -> PostgreSQL FormSubmission.
 * Run from backend root with DATABASE_URL set.
 * Optional env: TABLE_JSON_PATH, TABLE_META_DATA_DIR (default: ../table.json, ../tableMetaData).
 *
 * For very large detail files (base64): run with node --max-old-space-size=8192 if needed.
 */
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL is required');
  process.exit(1);
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const BATCH_SIZE = 100;
const projectRoot = path.resolve(__dirname, '../..');
const TABLE_JSON_PATH = process.env.TABLE_JSON_PATH ?? path.join(projectRoot, 'table.json');
const TABLE_META_DATA_DIR = process.env.TABLE_META_DATA_DIR ?? path.join(projectRoot, 'tableMetaData');
const SKIPPED_OUTPUT_PATH =
  process.env.MIGRATION_SKIPPED_FILE ?? path.join(projectRoot, 'migration-skipped-records.csv');

const S3_ENDPOINT = process.env.S3_ENDPOINT;
const S3_REGION = process.env.S3_REGION ?? 'us-east-1';
const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY;
const S3_SECRET_KEY = process.env.S3_SECRET_KEY;
const S3_BUCKET = process.env.S3_BUCKET ?? 'sksupertmt-uploads';
const S3_PUBLIC_URL = process.env.S3_PUBLIC_URL;

const s3Client = new S3Client({
  region: S3_REGION,
  ...(S3_ENDPOINT && { endpoint: S3_ENDPOINT, forcePathStyle: true }),
  ...(S3_ACCESS_KEY &&
    S3_SECRET_KEY && {
      credentials: { accessKeyId: S3_ACCESS_KEY, secretAccessKey: S3_SECRET_KEY },
    }),
});

function s3PublicBaseUrl(): string {
  if (S3_PUBLIC_URL) return S3_PUBLIC_URL.replace(/\/$/, '');
  if (S3_ENDPOINT) return `${S3_ENDPOINT.replace(/\/$/, '')}/${S3_BUCKET}`;
  return `https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com`;
}

function guessImageContentType(buf: Buffer): string {
  if (buf.length >= 8) {
    // PNG signature: 89 50 4E 47 0D 0A 1A 0A
    if (
      buf[0] === 0x89 &&
      buf[1] === 0x50 &&
      buf[2] === 0x4e &&
      buf[3] === 0x47
    ) {
      return 'image/png';
    }
    // JPEG signature: FF D8
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      return 'image/jpeg';
    }
    // WebP signature: RIFF....WEBP
    if (
      buf[0] === 0x52 &&
      buf[1] === 0x49 &&
      buf[2] === 0x46 &&
      buf[3] === 0x46 &&
      buf.length >= 12 &&
      buf[8] === 0x57 &&
      buf[9] === 0x45 &&
      buf[10] === 0x42 &&
      buf[11] === 0x50
    ) {
      return 'image/webp';
    }
  }
  return 'application/octet-stream';
}

async function s3Upload(
  key: string,
  body: Buffer,
  contentType?: string,
): Promise<string> {
  const input: PutObjectCommandInput = {
    Bucket: S3_BUCKET,
    Key: key,
    Body: body,
    ContentType: contentType ?? 'application/octet-stream',
  };
  await s3Client.send(new PutObjectCommand(input));
  return `${s3PublicBaseUrl()}/${key}`;
}

function isGcsUrl(url: string | undefined): boolean {
  if (!url) return false;
  return url.trim().startsWith('https://storage.googleapis.com/');
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

async function uploadFromBase64(
  submissionId: string,
  field: 'photoProof' | 'idProof' | 'idProofBack',
  base64: string,
): Promise<string | null> {
  const decoded = decodeMaybeDataUrl(base64);
  if (!decoded || decoded.buf.length === 0) return null;
  const contentType = decoded.contentType ?? guessImageContentType(decoded.buf);
  const ext = safeFileExtFromContentType(contentType);
  const key = `form-submissions/${submissionId}/${field}-legacy.${ext}`;
  return s3Upload(key, decoded.buf, contentType);
}

async function uploadFromUrl(
  submissionId: string,
  field: 'photoProof' | 'idProof' | 'idProofBack',
  url: string,
): Promise<string | null> {
  const res = await fetch(url);
  if (!res.ok) return null;
  const arr = new Uint8Array(await res.arrayBuffer());
  const buf = Buffer.from(arr);
  const contentType = res.headers.get('content-type') ?? guessImageContentType(buf);
  const ext = safeFileExtFromContentType(contentType);
  const key = `form-submissions/${submissionId}/${field}-gcs.${ext}`;
  return s3Upload(key, buf, contentType);
}

type TableRecord = {
  id: number;
  passportNo?: string | null;
  firstName?: string | null;
  city?: string | null;
  phoneNumber?: string | null;
  profession?: string | null;
  place?: string | null;
  registeringDate?: string | null;
  enteredBy?: string | null;
  enteredDate?: string | null;
  refNameOfThePerson?: string | null;
  isContacted?: boolean | null;
  isApproved?: boolean | null;
  isRejected?: boolean | null;
  isPending?: boolean | null;
  isDeleted?: boolean | null;
};

function toDate(val: unknown): Date | undefined {
  if (val == null || val === '') return undefined;
  if (typeof val === 'string') {
    const d = new Date(val);
    return isNaN(d.getTime()) ? undefined : d;
  }
  return undefined;
}

function str(val: unknown): string | undefined {
  if (val == null) return undefined;
  const s = String(val).trim();
  return s === '' ? undefined : s;
}

function bool(val: unknown): boolean | undefined {
  if (val === null || val === undefined) return undefined;
  return Boolean(val);
}

function parseSkPassportNumeric(skPassportNo: string | undefined): number | null {
  if (!skPassportNo) return null;
  const s = skPassportNo.trim();
  if (!/^SK\d+$/.test(s)) return null;
  const n = Number(s.slice(2));
  return Number.isFinite(n) ? n : null;
}

/** Mason-style detail has pi_firstName; company-style has pi_companyName etc. */
function isMasonStyle(d: Record<string, unknown>): boolean {
  return d.pi_firstName != null && String(d.pi_firstName).trim() !== '';
}

function stripBlobFields(detail: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(detail)) {
    if (k === 'photoProofData' || k === 'idProofData' || k === 'idProofBackData') continue;
    out[k] = v;
  }
  return out;
}

function buildSubmissionData(
  submissionId: string,
  tableRecord: TableRecord,
  detail: Record<string, unknown> | null,
): {
  submission: Record<string, unknown>;
  legacyPassportNo: string | undefined;
  blobs: { photoProofData?: string; idProofData?: string; idProofBackData?: string } | null;
} {
  const legacyId = tableRecord.id;

  const isMason = detail != null && isMasonStyle(detail);
  const piProfession = str(detail?.pi_profession ?? tableRecord.profession);
  const normalize = (p?: string | undefined) =>
    p == null ? undefined : p.trim().replace(/\s+/g, ' ').toLowerCase();

  const p = normalize(piProfession);
  const formType: string =
    p === 'mason' || p === 'barbender'
      ? 'masonBarBender'
      : p === 'architect' || p === 'engineer'
        ? 'architectEngineer'
        : p === 'commercial'
          ? 'commercial'
          : p === 'individual'
            ? 'individual'
            : p === 'proprietor' ||
                  p === 'partner' ||
                  p === 'llp' ||
                  p === 'pvt ltd'
              ? 'dealer'
              : isMason
                ? 'masonBarBender'
                : 'commercial';

  let skPassportNo: string | null = null;
  if (isMason) {
    skPassportNo = str(detail!.skPassportNo) ?? tableRecord.passportNo ?? null;
  } else {
    skPassportNo = tableRecord.passportNo ?? null;
  }

  const regDate = toDate(detail?.registeringDate ?? tableRecord.registeringDate);
  const entDate = toDate(detail?.enteredDate ?? tableRecord.enteredDate);

  const submission: Record<string, unknown> = {
    id: submissionId,
    legacyId,
    formType,
    skPassportNo: skPassportNo ?? undefined,
    // Important: legacy import must NOT set skPassportSeq; issuance is only for new records.
    skPassportSeq: undefined,
    validationOtpGenerated: str(detail?.validationOtpGenerated),
    registeringDate: regDate,
    enteredBy: str(detail?.enteredBy ?? tableRecord.enteredBy),
    enteredDate: entDate,
    isContacted: bool(detail?.isContacted ?? tableRecord.isContacted),
    isApproved: bool(detail?.isApproved ?? tableRecord.isApproved),
    isDeleted: bool(detail?.isDeleted ?? tableRecord.isDeleted),
    isActive: bool(detail?.isActive ?? true),
    isPending: bool(detail?.isPending ?? tableRecord.isPending),
    isRejected: bool(detail?.isRejected ?? tableRecord.isRejected),
    pi_firstName: str(detail?.pi_firstName ?? tableRecord.firstName),
    pi_lastName: str(detail?.pi_lastName),
    pi_profession: piProfession,
    pi_dob: str(detail?.pi_dob),
    pi_phone: str(detail?.pi_phone ?? tableRecord.phoneNumber),
    pi_whatsAppNumber: str(detail?.pi_whatsAppNumber),
    pi_emailId: str(detail?.pi_emailId),
    pi_addressLane1: str(detail?.pi_addressLane1),
    pi_addressLane2: str(detail?.pi_addressLane2),
    pi_taluk: str(detail?.pi_taluk ?? tableRecord.place),
    pi_district: str(detail?.pi_district),
    pi_city: str(detail?.pi_city ?? tableRecord.city),
    pi_state: str(detail?.pi_state),
    pi_pincode: str(detail?.pi_pincode),
    pi_landmark: str(detail?.pi_landmark),
    pi_anniversaryDate: str(detail?.pi_anniversaryDate),
    ref_nameOfTheperson: str(detail?.ref_nameOfTheperson ?? tableRecord.refNameOfThePerson),
    ref_place: str(detail?.ref_place),
    sod_nameOfTheDealer: str(detail?.sod_nameOfTheDealer),
    sod_place: str(detail?.sod_place),
    shop_location: str(detail?.shop_location),
    shop_Address1: str(detail?.shop_Address1),
    shop_Address2: str(detail?.shop_Address2),
    shop_District: str(detail?.shop_District),
    shop_Taluk: str(detail?.shop_Taluk),
    shop_City: str(detail?.shop_City),
    shop_Pincode: str(detail?.shop_Pincode),
    shop_Landmark: str(detail?.shop_Landmark),
    photoProofPath: str(detail?.photoProofPath),
    idProofPath: str(detail?.idProofPath),
    idProofBackPath: str(detail?.idProofBackPath),
  };

  if (detail && !isMason) {
    submission.pi_firstName = str(detail.pi_companyName) ?? submission.pi_firstName;
    submission.pi_addressLane1 = str(detail.pi_addressLine1) ?? str(detail.pi_addressLine2);
    submission.pi_addressLane2 = str(detail.pi_addressLine2) || str(detail.pi_addressLine1);
    submission.pi_city = str(detail.pi_city) ?? submission.pi_city;
    submission.pi_state = str(detail.pi_state) ?? submission.pi_state;
    submission.pi_pincode = str(detail.pi_postalCode) ?? submission.pi_pincode;
    submission.pi_phone = str(detail.pi_mobileNumber) ?? submission.pi_phone;
    submission.pi_emailId = str(detail.pi_email) ?? submission.pi_emailId;
  }

  const blobs =
    detail && (typeof detail.photoProofData === 'string' || typeof detail.idProofData === 'string' || typeof detail.idProofBackData === 'string')
      ? {
          ...(typeof detail.photoProofData === 'string' ? { photoProofData: detail.photoProofData } : {}),
          ...(typeof detail.idProofData === 'string' ? { idProofData: detail.idProofData } : {}),
          ...(typeof detail.idProofBackData === 'string' ? { idProofBackData: detail.idProofBackData } : {}),
        }
      : null;

  return { submission, legacyPassportNo: skPassportNo ?? undefined, blobs };
}

function pruneUndefined(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) out[k] = v;
  }
  return out;
}

function escapeCsv(val: unknown): string {
  const s = val == null ? '' : String(val);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function appendSkippedBatch(
  filePath: string,
  batchOffset: number,
  skippedCount: number,
  rows: Record<string, unknown>[]
): void {
  const header =
    'migrationIndex,legacyId,skPassportNo,pi_firstName,batchOffset,batchSkippedCount\n';
  const exists = fs.existsSync(filePath);
  let content = exists ? '' : header;
  for (let j = 0; j < rows.length; j++) {
    const r = rows[j];
    const migrationIndex = batchOffset + j + 1;
    const line = [
      migrationIndex,
      r.legacyId ?? '',
      r.skPassportNo ?? '',
      r.pi_firstName ?? '',
      batchOffset,
      skippedCount,
    ]
      .map(escapeCsv)
      .join(',');
    content += line + '\n';
  }
  fs.appendFileSync(filePath, content);
}

async function main() {
  console.log('Table JSON path:', TABLE_JSON_PATH);
  console.log('Table meta data dir:', TABLE_META_DATA_DIR);

  const tableRaw = fs.readFileSync(TABLE_JSON_PATH, 'utf-8');
  const tableData = JSON.parse(tableRaw) as { records: TableRecord[]; recordCount?: number };
  const records = tableData.records;
  if (!Array.isArray(records)) {
    throw new Error('table.json must have a "records" array');
  }
  const total = records.length;
  const expectedCount = tableData.recordCount;
  if (expectedCount != null && total !== expectedCount) {
    console.warn(`Warning: records.length (${total}) !== recordCount (${expectedCount})`);
  }
  console.log('Records to migrate:', total);

  let inserted = 0;
  let updated = 0;
  let skippedFileWritten = false;
  let maxLegacySkNumeric = 0;
  const failed: { index: number; legacyId: number; error: string }[] = [];

  for (let offset = 0; offset < total; offset += BATCH_SIZE) {
    const batch = records.slice(offset, offset + BATCH_SIZE);
    const batchFailedRows: Record<string, unknown>[] = [];

    for (let i = 0; i < batch.length; i++) {
      const idx = offset + i;
      const tableRecord = batch[i];

      let detail: Record<string, unknown> | null = null;
      const detailPath = path.join(TABLE_META_DATA_DIR, `record-${idx + 1}.json`);
      try {
        if (fs.existsSync(detailPath)) {
          const raw = fs.readFileSync(detailPath, 'utf-8');
          detail = JSON.parse(raw) as Record<string, unknown>;
        }
      } catch (e) {
        console.warn(`[${idx + 1}] Could not read/parse ${detailPath}, using table record only:`, (e as Error).message);
      }

      const legacySource = 'table.json';
      const legacyRowIndex = idx + 1;
      const submissionId = crypto.randomUUID();
      const built = buildSubmissionData(submissionId, tableRecord, detail);

      // If legacy image data exists (base64) OR legacy paths point to GCS, upload to S3 and store S3 URLs.
      try {
        const sub = built.submission as Record<string, unknown>;

        const photoBase64 = built.blobs?.photoProofData;
        const idBase64 = built.blobs?.idProofData;
        const idBackBase64 = built.blobs?.idProofBackData;

        const photoPath = typeof sub.photoProofPath === 'string' ? (sub.photoProofPath as string) : undefined;
        const idPath = typeof sub.idProofPath === 'string' ? (sub.idProofPath as string) : undefined;
        const idBackPath = typeof sub.idProofBackPath === 'string' ? (sub.idProofBackPath as string) : undefined;

        const [photoS3, idS3, idBackS3] = await Promise.all([
          photoBase64
            ? uploadFromBase64(submissionId, 'photoProof', photoBase64)
            : isGcsUrl(photoPath)
              ? uploadFromUrl(submissionId, 'photoProof', photoPath!)
              : Promise.resolve(null),
          idBase64
            ? uploadFromBase64(submissionId, 'idProof', idBase64)
            : isGcsUrl(idPath)
              ? uploadFromUrl(submissionId, 'idProof', idPath!)
              : Promise.resolve(null),
          idBackBase64
            ? uploadFromBase64(submissionId, 'idProofBack', idBackBase64)
            : isGcsUrl(idBackPath)
              ? uploadFromUrl(submissionId, 'idProofBack', idBackPath!)
              : Promise.resolve(null),
        ]);

        if (photoS3) sub.photoProofPath = photoS3;
        if (idS3) sub.idProofPath = idS3;
        if (idBackS3) sub.idProofBackPath = idBackS3;

        // If all uploads succeeded, don't keep base64 blobs in DB.
        if (photoS3 && built.blobs) delete built.blobs.photoProofData;
        if (idS3 && built.blobs) delete built.blobs.idProofData;
        if (idBackS3 && built.blobs) delete built.blobs.idProofBackData;
        if (built.blobs && Object.keys(built.blobs).length === 0) built.blobs = null;
      } catch (e) {
        console.warn(`[${legacyRowIndex}] Image upload step failed (will keep legacy blobs/paths):`, (e as Error).message);
      }

      const skNumeric = parseSkPassportNumeric(built.legacyPassportNo);
      if (skNumeric != null && skNumeric > maxLegacySkNumeric) maxLegacySkNumeric = skNumeric;
      const csvRow = pruneUndefined({
        legacyId: tableRecord.id,
        skPassportNo: built.legacyPassportNo,
        pi_firstName: (built.submission as any).pi_firstName,
      });

      try {
        await prisma.$transaction(async (tx) => {
          const existing = await tx.legacyRegistration.findUnique({
            where: { legacySource_legacyRowIndex: { legacySource, legacyRowIndex } },
            select: { id: true, submissionId: true },
          });

          if (existing?.submissionId) {
            // Already imported (idempotent). Still update raw JSON if missing.
            await tx.legacyRegistration.update({
              where: { legacySource_legacyRowIndex: { legacySource, legacyRowIndex } },
              data: {
                legacyId: tableRecord.id,
                legacyPassportNo: built.legacyPassportNo ?? null,
                rawTableRecord: tableRecord as any,
                rawDetailRecord: detail ? (stripBlobFields(detail) as any) : null,
              },
            });

            // Backfill images to S3 for already-imported rows if needed.
            const existingSub = await tx.formSubmission.findUnique({
              where: { id: existing.submissionId },
              select: { photoProofPath: true, idProofPath: true, idProofBackPath: true },
            });
            if (existingSub) {
              const patch: Record<string, unknown> = {};
              if (typeof built.submission.photoProofPath === 'string' && built.submission.photoProofPath !== existingSub.photoProofPath) {
                patch.photoProofPath = built.submission.photoProofPath;
              }
              if (typeof built.submission.idProofPath === 'string' && built.submission.idProofPath !== existingSub.idProofPath) {
                patch.idProofPath = built.submission.idProofPath;
              }
              if (typeof built.submission.idProofBackPath === 'string' && built.submission.idProofBackPath !== existingSub.idProofBackPath) {
                patch.idProofBackPath = built.submission.idProofBackPath;
              }
              if (Object.keys(patch).length > 0) {
                await tx.formSubmission.update({
                  where: { id: existing.submissionId },
                  data: patch as any,
                });
              }
            }
            updated++;
            return;
          }

          const created = await tx.formSubmission.create({
            data: built.submission as any,
            select: { id: true },
          });

          await tx.legacyRegistration.upsert({
            where: { legacySource_legacyRowIndex: { legacySource, legacyRowIndex } },
            create: {
              legacySource,
              legacyRowIndex,
              legacyId: tableRecord.id,
              legacyPassportNo: built.legacyPassportNo ?? null,
              rawTableRecord: tableRecord as any,
              rawDetailRecord: detail ? (stripBlobFields(detail) as any) : null,
              submissionId: created.id,
            },
            update: {
              legacyId: tableRecord.id,
              legacyPassportNo: built.legacyPassportNo ?? null,
              rawTableRecord: tableRecord as any,
              rawDetailRecord: detail ? (stripBlobFields(detail) as any) : null,
              submissionId: created.id,
            },
          });

          if (built.blobs) {
            await tx.legacyBlob.upsert({
              where: { submissionId: created.id },
              create: {
                submissionId: created.id,
                photoProofData: built.blobs.photoProofData ?? null,
                idProofData: built.blobs.idProofData ?? null,
                idProofBackData: built.blobs.idProofBackData ?? null,
              },
              update: {
                photoProofData: built.blobs.photoProofData ?? null,
                idProofData: built.blobs.idProofData ?? null,
                idProofBackData: built.blobs.idProofBackData ?? null,
              },
            });
          }

          inserted++;
        });
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        failed.push({ index: idx, legacyId: tableRecord.id, error: msg });
        batchFailedRows.push(csvRow);
      }
    }
    if (batchFailedRows.length > 0) {
      appendSkippedBatch(
        SKIPPED_OUTPUT_PATH,
        offset,
        batchFailedRows.length,
        batchFailedRows,
      );
      skippedFileWritten = true;
    }

    if ((offset + batch.length) % 500 === 0 || offset + batch.length >= total) {
      console.log(`Progress: ${Math.min(offset + batch.length, total)} / ${total}`);
    }
  }

  // Ensure new passports start at max legacy SK number (so next is +1).
  await prisma.passportCounter.upsert({
    where: { key: 'SK' },
    create: { key: 'SK', lastIssued: BigInt(maxLegacySkNumeric) },
    update: { lastIssued: BigInt(maxLegacySkNumeric) },
  });

  console.log('Migration done. Inserted:', inserted, 'Updated(existing legacy rows):', updated);
  console.log('Max legacy SK numeric observed:', maxLegacySkNumeric);
  if (skippedFileWritten) {
    console.log('Skipped-record candidates (batches where DB skipped rows) written to:', SKIPPED_OUTPUT_PATH);
  }
  if (failed.length > 0) {
    console.error('Failed rows:', failed.length);
    failed.slice(0, 20).forEach((f) => console.error('  legacyId', f.legacyId, f.error));
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
