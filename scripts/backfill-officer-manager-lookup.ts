/**
 * One-off backfill to populate SalesOfficer / ReportingManager lookup tables
 * from existing FormSubmission rows and canonicalize stored names.
 *
 * Run from backend root with DATABASE_URL set:
 *   npm run prisma:generate
 *   DATABASE_URL=... node --loader ts-node/esm scripts/backfill-officer-manager-lookup.ts
 *
 * Or with ts-node (project already uses ts-node in scripts):
 *   DATABASE_URL=... npx ts-node -r tsconfig-paths/register scripts/backfill-officer-manager-lookup.ts
 */
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';

function normalizeHumanName(input: string): { name: string; nameNormalized: string } | null {
  const collapsed = input.replace(/\s+/g, ' ').trim();
  if (!collapsed) return null;
  return { name: collapsed, nameNormalized: collapsed.toLowerCase() };
}

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error('DATABASE_URL is required');
    process.exit(1);
  }

  const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
  });

  const BATCH_SIZE = 500;
  let cursor: string | undefined;
  let processed = 0;

  while (true) {
    const batch = await prisma.formSubmission.findMany({
      take: BATCH_SIZE,
      ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
      orderBy: { id: 'asc' },
      select: {
        id: true,
        ref_nameOfTheperson: true,
        reporting_manager_name: true,
      },
    });
    if (batch.length === 0) break;

    for (const row of batch) {
      const so = row.ref_nameOfTheperson ? normalizeHumanName(row.ref_nameOfTheperson) : null;
      const rm = row.reporting_manager_name ? normalizeHumanName(row.reporting_manager_name) : null;

      let soName: string | undefined;
      let rmName: string | undefined;

      if (so) {
        const existing = await prisma.salesOfficer.findUnique({
          where: { nameNormalized: so.nameNormalized },
          select: { name: true },
        });
        if (existing) soName = existing.name;
        else {
          try {
            const created = await prisma.salesOfficer.create({
              data: so,
              select: { name: true },
            });
            soName = created.name;
          } catch {
            const retry = await prisma.salesOfficer.findUnique({
              where: { nameNormalized: so.nameNormalized },
              select: { name: true },
            });
            soName = retry?.name ?? so.name;
          }
        }
      }

      if (rm) {
        const existing = await prisma.reportingManager.findUnique({
          where: { nameNormalized: rm.nameNormalized },
          select: { name: true },
        });
        if (existing) rmName = existing.name;
        else {
          try {
            const created = await prisma.reportingManager.create({
              data: rm,
              select: { name: true },
            });
            rmName = created.name;
          } catch {
            const retry = await prisma.reportingManager.findUnique({
              where: { nameNormalized: rm.nameNormalized },
              select: { name: true },
            });
            rmName = retry?.name ?? rm.name;
          }
        }
      }

      if (
        (soName !== undefined && soName !== row.ref_nameOfTheperson) ||
        (rmName !== undefined && rmName !== row.reporting_manager_name)
      ) {
        await prisma.formSubmission.update({
          where: { id: row.id },
          data: {
            ...(soName !== undefined ? { ref_nameOfTheperson: soName } : {}),
            ...(rmName !== undefined ? { reporting_manager_name: rmName } : {}),
          },
        });
      }

      processed += 1;
      if (processed % 1000 === 0) {
        console.log(`Processed ${processed} submissions...`);
      }
    }

    cursor = batch[batch.length - 1].id;
  }

  console.log(`Done. Processed ${processed} submissions.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

