/**
 * Backfill newly-added FormSubmission columns from existing legacy JSON.
 *
 * This does NOT rerun the full migration; it only updates existing rows
 * where target columns are currently NULL.
 *
 * Usage:
 *   DATABASE_URL=... npx ts-node -r tsconfig-paths/register scripts/backfill-form-submission-fields.ts \
 *     --dry-run --formType dealer --limit 5
 */
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';

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
  // Some legacy JSON may contain booleans/dates; we only store strings.
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  return undefined;
}

function normalizeNullableBoolean(v: unknown): boolean | undefined {
  if (v == null) return undefined;
  if (typeof v === 'boolean') return v;
  if (typeof v === 'number') {
    if (v === 1) return true;
    if (v === 0) return false;
    return undefined;
  }
  if (typeof v === 'string') {
    const s = v.trim().toLowerCase();
    if (!s || s === 'undefined') return undefined;
    if (['true', 'yes', 'y', '1', 'on'].includes(s)) return true;
    if (['false', 'no', 'n', '0', 'off'].includes(s)) return false;
    return undefined;
  }
  return undefined;
}

function normalizeAddressPart(v: unknown): string | undefined {
  const s = normalizeNullableString(v);
  if (!s) return undefined;
  return s.replace(/\s+/g, ' ').trim().toLowerCase();
}

function buildAddress(line1: unknown, line2: unknown): string | undefined {
  const l1 = normalizeAddressPart(line1);
  const l2 = normalizeAddressPart(line2);
  if (!l1 && !l2) return undefined;
  return `${l1 ?? ''}|${l2 ?? ''}`.replace(/^\|+|\|+$/g, '').trim();
}

function addressesEqual(
  aLine1: unknown,
  aLine2: unknown,
  bLine1: unknown,
  bLine2: unknown,
): boolean | undefined {
  const a = buildAddress(aLine1, aLine2);
  const b = buildAddress(bLine1, bLine2);
  if (!a || !b) return undefined;
  return a === b;
}

function asRecord(json: unknown): JsonRecord | undefined {
  if (json == null) return undefined;
  if (typeof json !== 'object') return undefined;
  if (Array.isArray(json)) return undefined;
  return json as JsonRecord;
}

function pickFirstString(record: JsonRecord, keys: string[]): string | undefined {
  for (const k of keys) {
    const v = normalizeNullableString(record[k]);
    if (v !== undefined) return v;
  }
  return undefined;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run') || args.includes('-d');
  const limitStr = getArgValue(args, '--limit');
  const limit = limitStr ? Number(limitStr) : undefined;
  const formTypeArg = getArgValue(args, '--formType');
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

  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

  const BATCH_SIZE = 200;
  let cursorId: string | undefined;
  let processed = 0;
  let updatesApplied = 0;
  let updatesSkipped = 0;

  // eslint-disable-next-line no-console
  console.log(
    `Backfilling FormSubmission fields for formTypes=[${formTypes.join(
      ',',
    )}] dryRun=${dryRun} limit=${limit ?? 'none'}`,
  );

  while (true) {
    const batch = await prisma.legacyRegistration.findMany({
      take: BATCH_SIZE,
      orderBy: { id: 'asc' },
      ...(cursorId ? { cursor: { id: cursorId }, skip: 1 } : {}),
      where: {
        submissionId: { not: null },
        submission: {
          formType: {
            in: formTypes as unknown as string[],
          },
        },
      },
      select: {
        id: true,
        rawDetailRecord: true,
        submission: {
          select: {
            id: true,
            formType: true,
            // common
            title: true,
            age: true,
            sameAsAbove: true,
            remarks: true,
            validationCode: true,

            // dealer-only text fields
            dealershipName: true,
            contactPerson: true,
            gstNumber: true,
            panNumber: true,
            ownerSameAsAbove: true,
            ownerTitle: true,
            ownerFirstName: true,
            ownerLastName: true,
            ownerOfficeAddressLine1: true,
            ownerOfficeAddressLine2: true,
            ownerCity: true,
            ownerState: true,
            ownerPostalCode: true,
            ownerPlace: true,
            ownerPhoneNumber: true,
            ownerEmailId: true,
            secondContactTitle: true,
            secondContactFirstName: true,
            secondContactLastName: true,
            secondContactPhone: true,
            secondContactEmail: true,
            spouseName: true,
            spouseDob: true,
            weddingDay: true,
            childName1: true,
            childDob1: true,
            childName2: true,
            childDob2: true,
            childName3: true,
            childDob3: true,
            godownSameAsCompany: true,
            godownAddressLine1: true,
            godownAddressLine2: true,
            godownCity: true,
            godownState: true,
            godownPostalCode: true,
            godownContactPerson: true,
            godownContactMobile: true,
            referenceName1: true,
            referencePhone1: true,
            referenceDetails1: true,
            referenceName2: true,
            referencePhone2: true,
            referenceDetails2: true,

            // proof columns
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

    for (const lr of batch) {
      const sub = lr.submission;
      if (!sub) continue;

      const record = asRecord(lr.rawDetailRecord);
      if (!record) continue;

      if (limit != null && processed >= limit) break;
      processed += 1;

      const updates: Record<string, unknown> = {};
      const needsUpdate = (field: string, value: unknown) => {
        if (value === undefined) return false;
        // We only write when the DB column is currently NULL/undefined.
        if ((sub as Record<string, unknown>)[field] != null) return false;
        return true;
      };

      // --- Common fields ---
      // commercial/individual title comes from legacy `honorifics`
      const title = normalizeNullableString(record['honorifics']);
      if (needsUpdate('title', title)) updates.title = title;

      const age = normalizeNullableString(record['age']);
      if (needsUpdate('age', age)) updates.age = age;

      // architect validation code is stored in either pi_enterValidationCode or pi_entervalidationCode2
      const validationCode = pickFirstString(record, [
        'pi_enterValidationCode',
        'pi_entervalidationCode2',
        'validationCode',
      ]);
      if (needsUpdate('validationCode', validationCode)) {
        updates.validationCode = validationCode;
      }

      const remarks = normalizeNullableString(record['remarks'] ?? record['remark']);
      if (needsUpdate('remarks', remarks)) updates.remarks = remarks;

      const sameAsAbove = normalizeNullableBoolean(
        record['sameAsAbove'] ??
          record['same_as_above'] ??
          record['sameAs'] ??
          record['same'],
      );
      if (needsUpdate('sameAsAbove', sameAsAbove)) {
        updates.sameAsAbove = sameAsAbove;
      }

      // --- Dealer-specific fields ---
      if (sub.formType === 'dealer') {
        const dealershipName = normalizeNullableString(record['pi_companyName']);
        if (needsUpdate('dealershipName', dealershipName))
          updates.dealershipName = dealershipName;

        const contactPerson = normalizeNullableString(record['pi_contactPerson']);
        if (needsUpdate('contactPerson', contactPerson))
          updates.contactPerson = contactPerson;

        const gstNumber = normalizeNullableString(record['pi_gstNo']);
        if (needsUpdate('gstNumber', gstNumber)) updates.gstNumber = gstNumber;

        const panNumber = normalizeNullableString(record['pi_panNo']);
        if (needsUpdate('panNumber', panNumber)) updates.panNumber = panNumber;

        // Owner
        const ownerTitle = normalizeNullableString(record['oi_honorific']);
        if (needsUpdate('ownerTitle', ownerTitle)) updates.ownerTitle = ownerTitle;
        const ownerFirstName = normalizeNullableString(record['oi_firstName']);
        if (needsUpdate('ownerFirstName', ownerFirstName))
          updates.ownerFirstName = ownerFirstName;
        const ownerLastName = normalizeNullableString(record['oi_lastName']);
        if (needsUpdate('ownerLastName', ownerLastName))
          updates.ownerLastName = ownerLastName;

        const ownerOfficeAddressLine1 = normalizeNullableString(
          record['oi_officeAddressLine1'],
        );
        if (needsUpdate('ownerOfficeAddressLine1', ownerOfficeAddressLine1)) {
          updates.ownerOfficeAddressLine1 = ownerOfficeAddressLine1;
        }
        const ownerOfficeAddressLine2 = normalizeNullableString(
          record['oi_officeAddressLine2'],
        );
        if (needsUpdate('ownerOfficeAddressLine2', ownerOfficeAddressLine2)) {
          updates.ownerOfficeAddressLine2 = ownerOfficeAddressLine2;
        }

        const ownerCity = normalizeNullableString(record['oi_city']);
        if (needsUpdate('ownerCity', ownerCity)) updates.ownerCity = ownerCity;
        const ownerState = normalizeNullableString(record['oi_state']);
        if (needsUpdate('ownerState', ownerState)) updates.ownerState = ownerState;
        const ownerPostalCode = normalizeNullableString(record['oi_zipPostalCode']);
        if (needsUpdate('ownerPostalCode', ownerPostalCode))
          updates.ownerPostalCode = ownerPostalCode;
        const ownerPlace = normalizeNullableString(record['oi_place']);
        if (needsUpdate('ownerPlace', ownerPlace)) updates.ownerPlace = ownerPlace;

        const ownerPhoneNumber = normalizeNullableString(record['oi_phoneNo']);
        if (needsUpdate('ownerPhoneNumber', ownerPhoneNumber))
          updates.ownerPhoneNumber = ownerPhoneNumber;
        const ownerEmailId = normalizeNullableString(record['oi_emailId']);
        if (needsUpdate('ownerEmailId', ownerEmailId)) updates.ownerEmailId = ownerEmailId;

        // Owner same-as derived
        const ownerSameComputed = addressesEqual(
          record['oi_officeAddressLine1'],
          record['oi_officeAddressLine2'],
          record['pi_addressLane1'],
          record['pi_addressLane2'],
        );
        if (needsUpdate('ownerSameAsAbove', ownerSameComputed)) {
          updates.ownerSameAsAbove = ownerSameComputed;
        }

        // Second contact
        const secondContactTitle = normalizeNullableString(record['oi_scp_honorifics']);
        if (needsUpdate('secondContactTitle', secondContactTitle))
          updates.secondContactTitle = secondContactTitle;
        const secondContactFirstName = normalizeNullableString(record['oi_scp_firstName']);
        if (needsUpdate('secondContactFirstName', secondContactFirstName))
          updates.secondContactFirstName = secondContactFirstName;
        const secondContactLastName = normalizeNullableString(record['oi_scp_lastName']);
        if (needsUpdate('secondContactLastName', secondContactLastName))
          updates.secondContactLastName = secondContactLastName;
        const secondContactPhone = normalizeNullableString(record['oi_scp_phoneNo']);
        if (needsUpdate('secondContactPhone', secondContactPhone))
          updates.secondContactPhone = secondContactPhone;
        const secondContactEmail = normalizeNullableString(record['oi_scp_emailId']);
        if (needsUpdate('secondContactEmail', secondContactEmail))
          updates.secondContactEmail = secondContactEmail;

        // Spouse + children
        const spouseName = normalizeNullableString(record['oi_gi_spouseName']);
        if (needsUpdate('spouseName', spouseName)) updates.spouseName = spouseName;
        const spouseDob = normalizeNullableString(record['oi_gi_dob']);
        if (needsUpdate('spouseDob', spouseDob)) updates.spouseDob = spouseDob;
        const weddingDay = normalizeNullableString(record['oi_gi_weddingDay']);
        if (needsUpdate('weddingDay', weddingDay)) updates.weddingDay = weddingDay;

        const childName1 = normalizeNullableString(record['oi_gi_childName1']);
        if (needsUpdate('childName1', childName1)) updates.childName1 = childName1;
        const childDob1 = normalizeNullableString(record['oi_gi_child1Dob']);
        if (needsUpdate('childDob1', childDob1)) updates.childDob1 = childDob1;

        const childName2 = normalizeNullableString(record['oi_gi_childName2']);
        if (needsUpdate('childName2', childName2)) updates.childName2 = childName2;
        const childDob2 = normalizeNullableString(record['oi_gi_child2Dob']);
        if (needsUpdate('childDob2', childDob2)) updates.childDob2 = childDob2;

        const childName3 = normalizeNullableString(record['oi_gi_childName3']);
        if (needsUpdate('childName3', childName3)) updates.childName3 = childName3;
        const childDob3 = normalizeNullableString(record['oi_gi_child3Dob']);
        if (needsUpdate('childDob3', childDob3)) updates.childDob3 = childDob3;

        // Godown
        const godownAddressLine1 = normalizeNullableString(record['dgi_addressLine1']);
        if (needsUpdate('godownAddressLine1', godownAddressLine1))
          updates.godownAddressLine1 = godownAddressLine1;
        const godownAddressLine2 = normalizeNullableString(record['dgi_addressLine2']);
        if (needsUpdate('godownAddressLine2', godownAddressLine2))
          updates.godownAddressLine2 = godownAddressLine2;
        const godownCity = normalizeNullableString(record['dgi_city']);
        if (needsUpdate('godownCity', godownCity)) updates.godownCity = godownCity;
        const godownState = normalizeNullableString(record['dgi_state']);
        if (needsUpdate('godownState', godownState)) updates.godownState = godownState;
        const godownPostalCode = normalizeNullableString(record['dgi_zipPostalCode']);
        if (needsUpdate('godownPostalCode', godownPostalCode))
          updates.godownPostalCode = godownPostalCode;
        const godownContactPerson = normalizeNullableString(record['dgi_contactPersonName']);
        if (needsUpdate('godownContactPerson', godownContactPerson))
          updates.godownContactPerson = godownContactPerson;
        const godownContactMobile = normalizeNullableString(record['dgi_contactPersonMobileNumber']);
        if (needsUpdate('godownContactMobile', godownContactMobile))
          updates.godownContactMobile = godownContactMobile;

        const godownSameComputed = addressesEqual(
          record['dgi_addressLine1'],
          record['dgi_addressLine2'],
          record['pi_addressLane1'],
          record['pi_addressLane2'],
        );
        if (needsUpdate('godownSameAsCompany', godownSameComputed)) {
          updates.godownSameAsCompany = godownSameComputed;
        }

        // References
        const referenceName1 = normalizeNullableString(record['ref_name1']);
        if (needsUpdate('referenceName1', referenceName1))
          updates.referenceName1 = referenceName1;
        const referencePhone1 = normalizeNullableString(record['ref_phone1']);
        if (needsUpdate('referencePhone1', referencePhone1))
          updates.referencePhone1 = referencePhone1;
        const referenceDetails1 = normalizeNullableString(record['ref_details1']);
        if (needsUpdate('referenceDetails1', referenceDetails1))
          updates.referenceDetails1 = referenceDetails1;
        const referenceName2 = normalizeNullableString(record['ref_name2']);
        if (needsUpdate('referenceName2', referenceName2))
          updates.referenceName2 = referenceName2;
        const referencePhone2 = normalizeNullableString(record['ref_phone2']);
        if (needsUpdate('referencePhone2', referencePhone2))
          updates.referencePhone2 = referencePhone2;
        const referenceDetails2 = normalizeNullableString(record['ref_details2']);
        if (needsUpdate('referenceDetails2', referenceDetails2))
          updates.referenceDetails2 = referenceDetails2;

        // --- Dealer proof uploads ---
        // Shop photo => admin's "Photograph" and backfill into photoProof*
        const photoProofPath = normalizeNullableString(record['shopPhotoProofPath']);
        if (needsUpdate('photoProofPath', photoProofPath)) {
          updates.photoProofPath = photoProofPath;
        }
        const photoProofData = normalizeNullableString(record['shopPhotoProofData']);
        if (needsUpdate('photoProofData', photoProofData)) {
          updates.photoProofData = photoProofData;
        }

        // ID proof card => admin uses idProof*
        const idProofPath = pickFirstString(record, ['idProofPath', 'idProofBackPath']);
        if (needsUpdate('idProofPath', idProofPath)) {
          updates.idProofPath = idProofPath;
        }
        const idProofData = pickFirstString(record, ['idProofData', 'idProofBackData']);
        if (needsUpdate('idProofData', idProofData)) {
          updates.idProofData = idProofData;
        }

        // GST certificate card => admin uses idProofBack*
        const gstBackPath = pickFirstString(record, ['gstProofPath', 'idProofBackPath']);
        if (needsUpdate('idProofBackPath', gstBackPath)) {
          updates.idProofBackPath = gstBackPath;
        }
        const gstBackData = pickFirstString(record, ['gstProofBackData', 'idProofBackData']);
        if (needsUpdate('idProofBackData', gstBackData)) {
          updates.idProofBackData = gstBackData;
        }

        // PAN card => admin uses panProof*
        const panProofPath = pickFirstString(record, [
          'panProofPath',
          'panProofBackPath',
        ]);
        if (needsUpdate('panProofPath', panProofPath)) {
          updates.panProofPath = panProofPath;
        }

        const panProofData = normalizeNullableString(record['panProofData']);
        if (needsUpdate('panProofData', panProofData)) {
          updates.panProofData = panProofData;
        }
      }

      const keys = Object.keys(updates);
      if (keys.length === 0) {
        updatesSkipped += 1;
        continue;
      }

      if (dryRun) {
        // eslint-disable-next-line no-console
        console.log(`DRY_RUN update for submissionId=${sub.id} formType=${sub.formType}:`, keys);
        updatesApplied += 1;
      } else {
        await prisma.formSubmission.update({
          where: { id: sub.id },
          data: updates as any,
        });
        updatesApplied += 1;
      }
    }

    const last = batch[batch.length - 1];
    cursorId = last.id;

    if (limit != null && processed >= limit) break;
  }

  // eslint-disable-next-line no-console
  console.log({
    processed,
    updatesApplied,
    updatesSkipped,
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

