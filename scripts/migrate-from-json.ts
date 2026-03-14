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
import { PrismaClient, Prisma } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL is required');
  process.exit(1);
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const BATCH_SIZE = 150;
const projectRoot = path.resolve(__dirname, '../..');
const TABLE_JSON_PATH = process.env.TABLE_JSON_PATH ?? path.join(projectRoot, 'table.json');
const TABLE_META_DATA_DIR = process.env.TABLE_META_DATA_DIR ?? path.join(projectRoot, 'tableMetaData');
const SKIPPED_OUTPUT_PATH =
  process.env.MIGRATION_SKIPPED_FILE ?? path.join(projectRoot, 'migration-skipped-records.csv');

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

/** Mason-style detail has pi_firstName; company-style has pi_companyName etc. */
function isMasonStyle(d: Record<string, unknown>): boolean {
  return d.pi_firstName != null && String(d.pi_firstName).trim() !== '';
}

function buildPayload(
  tableRecord: TableRecord,
  detail: Record<string, unknown> | null,
  seenPassportNos: Set<string>
): Record<string, unknown> {
  const id = crypto.randomUUID();
  const legacyId = tableRecord.id;

  const isMason = detail != null && isMasonStyle(detail);
  const formType = detail != null && !isMason ? 'form_b' : 'registration';

  let skPassportNo: string | null = null;
  if (isMason) {
    skPassportNo = str(detail!.skPassportNo) ?? tableRecord.passportNo ?? null;
  } else {
    skPassportNo = tableRecord.passportNo ?? null;
  }
  if (skPassportNo && seenPassportNos.has(skPassportNo)) skPassportNo = null;
  else if (skPassportNo) seenPassportNos.add(skPassportNo);

  const regDate = toDate(detail?.registeringDate ?? tableRecord.registeringDate);
  const entDate = toDate(detail?.enteredDate ?? tableRecord.enteredDate);

  const payload: Record<string, unknown> = {
    id,
    legacyId,
    formType,
    skPassportNo: skPassportNo ?? undefined,
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
    pi_profession: str(detail?.pi_profession ?? tableRecord.profession),
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
    photoProofData: typeof detail?.photoProofData === 'string' ? detail.photoProofData : undefined,
    idProofData: typeof detail?.idProofData === 'string' ? detail.idProofData : undefined,
    idProofBackData: typeof detail?.idProofBackData === 'string' ? detail.idProofBackData : undefined,
  };

  if (detail && !isMason) {
    payload.pi_firstName = str(detail.pi_companyName) ?? payload.pi_firstName;
    payload.pi_addressLane1 = str(detail.pi_addressLine1) ?? str(detail.pi_addressLine2);
    payload.pi_addressLane2 = str(detail.pi_addressLine2) || str(detail.pi_addressLine1);
    payload.pi_city = str(detail.pi_city) ?? payload.pi_city;
    payload.pi_state = str(detail.pi_state) ?? payload.pi_state;
    payload.pi_pincode = str(detail.pi_postalCode) ?? payload.pi_pincode;
    payload.pi_phone = str(detail.pi_mobileNumber) ?? payload.pi_phone;
    payload.pi_emailId = str(detail.pi_email) ?? payload.pi_emailId;
  }

  return payload;
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

  const seenPassportNos = new Set<string>();
  /** Within this run, only first occurrence of each legacy id gets legacyId; duplicates get null (unique constraint). */
  const seenLegacyIdsThisRun = new Set<number>();
  let inserted = 0;
  let skippedFileWritten = false;
  const failed: { index: number; legacyId: number; error: string }[] = [];

  for (let offset = 0; offset < total; offset += BATCH_SIZE) {
    const batch = records.slice(offset, offset + BATCH_SIZE);
    const rows: Record<string, unknown>[] = [];

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

      const payload = buildPayload(tableRecord, detail, seenPassportNos);
      if (seenLegacyIdsThisRun.has(tableRecord.id)) {
        payload.legacyId = undefined;
      } else {
        seenLegacyIdsThisRun.add(tableRecord.id);
      }
      rows.push(pruneUndefined(payload));
    }

    if (rows.length > 0) {
      try {
        const result = await prisma.formSubmission.createMany({
          data: rows as Prisma.FormSubmissionCreateManyInput[],
          skipDuplicates: true,
        });
        inserted += result.count;
        if (result.count < rows.length) {
          const skippedCount = rows.length - result.count;
          console.warn(
            `Batch at offset ${offset}: attempted ${rows.length}, inserted ${result.count} (${skippedCount} skipped by DB due to unique constraint)`
          );
          appendSkippedBatch(SKIPPED_OUTPUT_PATH, offset, skippedCount, rows);
          skippedFileWritten = true;
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('Batch insert failed at offset', offset, msg);
        for (let j = 0; j < rows.length; j++) {
          failed.push({ index: offset + j, legacyId: rows[j].legacyId as number, error: msg });
        }
      }
    }

    if ((offset + batch.length) % 500 === 0 || offset + batch.length >= total) {
      console.log(`Progress: ${Math.min(offset + batch.length, total)} / ${total}`);
    }
  }

  console.log('Migration done. Inserted:', inserted);
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
