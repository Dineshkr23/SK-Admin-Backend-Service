import type { Prisma } from '../generated/prisma';
import type { PrismaService } from '../prisma/prisma.service';

type NameLookupPrisma = PrismaService | Prisma.TransactionClient;

export function normalizeHumanName(input: string): {
  name: string;
  nameNormalized: string;
} | null {
  const collapsed = input.replace(/\s+/g, ' ').trim();
  if (!collapsed) return null;
  return { name: collapsed, nameNormalized: collapsed.toLowerCase() };
}

export async function findOrCreateSalesOfficerName(
  prisma: NameLookupPrisma,
  input: string | null | undefined,
): Promise<string | undefined> {
  if (input == null) return undefined;
  const norm = normalizeHumanName(String(input));
  if (!norm) return undefined;

  const existing = await prisma.salesOfficer.findUnique({
    where: { nameNormalized: norm.nameNormalized },
    select: { name: true },
  });
  if (existing) return existing.name;

  try {
    const created = await prisma.salesOfficer.create({
      data: norm,
      select: { name: true },
    });
    return created.name;
  } catch {
    // In case of a race, re-read.
    const retry = await prisma.salesOfficer.findUnique({
      where: { nameNormalized: norm.nameNormalized },
      select: { name: true },
    });
    return retry?.name ?? norm.name;
  }
}

export async function findOrCreateReportingManagerName(
  prisma: NameLookupPrisma,
  input: string | null | undefined,
): Promise<string | undefined> {
  if (input == null) return undefined;
  const norm = normalizeHumanName(String(input));
  if (!norm) return undefined;

  const existing = await prisma.reportingManager.findUnique({
    where: { nameNormalized: norm.nameNormalized },
    select: { name: true },
  });
  if (existing) return existing.name;

  try {
    const created = await prisma.reportingManager.create({
      data: norm,
      select: { name: true },
    });
    return created.name;
  } catch {
    const retry = await prisma.reportingManager.findUnique({
      where: { nameNormalized: norm.nameNormalized },
      select: { name: true },
    });
    return retry?.name ?? norm.name;
  }
}

