/**
 * One-time backfill for dropdown options:
 * - Populate "SalesOfficer" from FormSubmission.ref_nameOfTheperson
 * - Populate "ReportingManager" from FormSubmission.reporting_manager_name
 *
 * Uses the same normalization as backend/src/common/name-lookup.ts:
 * - collapse whitespace to single spaces
 * - trim
 * - lowercase
 */
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  // eslint-disable-next-line no-console
  console.error('DATABASE_URL is required');
  process.exit(1);
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Ensure gen_random_uuid() is available.
  await prisma.$executeRawUnsafe(`CREATE EXTENSION IF NOT EXISTS pgcrypto;`);

  // SalesOfficer backfill
  const salesSql = `
    INSERT INTO "SalesOfficer" ("id", "name", "nameNormalized", "updatedAt", "createdAt")
    SELECT
      gen_random_uuid() AS "id",
      MIN(fs."ref_nameOfTheperson") AS name,
      LOWER(
        TRIM(
          REGEXP_REPLACE(fs."ref_nameOfTheperson", '\\s+', ' ', 'g')
        )
      ) AS "nameNormalized"
      , CURRENT_TIMESTAMP AS "updatedAt"
      , CURRENT_TIMESTAMP AS "createdAt"
    FROM "FormSubmission" fs
    WHERE fs."ref_nameOfTheperson" IS NOT NULL
      AND TRIM(REGEXP_REPLACE(fs."ref_nameOfTheperson", '\\s+', ' ', 'g')) <> ''
    GROUP BY
      LOWER(
        TRIM(
          REGEXP_REPLACE(fs."ref_nameOfTheperson", '\\s+', ' ', 'g')
        )
      )
    ON CONFLICT DO NOTHING;
  `;

  // ReportingManager backfill
  const reportingSql = `
    INSERT INTO "ReportingManager" ("id", "name", "nameNormalized", "updatedAt", "createdAt")
    SELECT
      gen_random_uuid() AS "id",
      MIN(fs."reporting_manager_name") AS name,
      LOWER(
        TRIM(
          REGEXP_REPLACE(fs."reporting_manager_name", '\\s+', ' ', 'g')
        )
      ) AS "nameNormalized"
      , CURRENT_TIMESTAMP AS "updatedAt"
      , CURRENT_TIMESTAMP AS "createdAt"
    FROM "FormSubmission" fs
    WHERE fs."reporting_manager_name" IS NOT NULL
      AND TRIM(REGEXP_REPLACE(fs."reporting_manager_name", '\\s+', ' ', 'g')) <> ''
    GROUP BY
      LOWER(
        TRIM(
          REGEXP_REPLACE(fs."reporting_manager_name", '\\s+', ' ', 'g')
        )
      )
    ON CONFLICT DO NOTHING;
  `;

  // eslint-disable-next-line no-console
  console.log('Backfilling SalesOfficer...');
  await prisma.$executeRawUnsafe(salesSql);
  // eslint-disable-next-line no-console
  console.log('Backfilling ReportingManager...');
  await prisma.$executeRawUnsafe(reportingSql);
  // eslint-disable-next-line no-console
  console.log('Backfill complete.');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

