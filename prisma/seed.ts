import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL required');
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  async function upsertUser(email: string, password: string, role: string) {
    const hashed = await bcrypt.hash(password, 10);
    await prisma.adminUser.upsert({
      where: { email },
      create: { email, password: hashed, role },
      update: { password: hashed, role },
    });
    console.log(`User seeded: ${email} (${role})`);
  }

  const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@sksupertmt.com';
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'Admin@123';
  await upsertUser(adminEmail, adminPassword, 'ADMIN');

  const docManagerEmail = process.env.DOC_MANAGER_EMAIL;
  const docManagerPassword = process.env.DOC_MANAGER_PASSWORD;
  if (docManagerEmail && docManagerPassword) {
    await upsertUser(docManagerEmail, docManagerPassword, 'DOC_MANAGER');
  } else if (docManagerEmail || docManagerPassword) {
    console.warn(
      'DOC_MANAGER_EMAIL and DOC_MANAGER_PASSWORD must both be set to seed DOC_MANAGER user.',
    );
  }

  const priceEditorEmail = process.env.PRICE_EDITOR_EMAIL;
  const priceEditorPassword = process.env.PRICE_EDITOR_PASSWORD;
  if (priceEditorEmail && priceEditorPassword) {
    await upsertUser(priceEditorEmail, priceEditorPassword, 'PRICE_EDITOR');
  } else if (priceEditorEmail || priceEditorPassword) {
    console.warn(
      'PRICE_EDITOR_EMAIL and PRICE_EDITOR_PASSWORD must both be set to seed PRICE_EDITOR user.',
    );
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
