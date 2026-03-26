import { config as loadEnv } from 'dotenv';
import { Client } from 'pg';

loadEnv();

type DuplicateRow = {
  phone: string;
  count: bigint;
  ids: string[];
  createdAtList: Date[];
};

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set.');
  }

  const client = new Client({ connectionString: databaseUrl });
  await client.connect();
  const result = await client.query<DuplicateRow>(`
    SELECT
      pi_phone AS phone,
      COUNT(*)::bigint AS count,
      ARRAY_AGG(id ORDER BY "createdAt" DESC) AS ids,
      ARRAY_AGG("createdAt" ORDER BY "createdAt" DESC) AS "createdAtList"
    FROM "FormSubmission"
    WHERE pi_phone IS NOT NULL AND TRIM(pi_phone) <> ''
    GROUP BY pi_phone
    HAVING COUNT(*) > 1
    ORDER BY COUNT(*) DESC, pi_phone ASC
  `);
  const duplicates = result.rows;

  if (!duplicates.length) {
    console.log('No duplicate pi_phone values found.');
    return;
  }

  console.log(`Found ${duplicates.length} duplicate phone groups:\n`);
  duplicates.forEach((row, index) => {
    console.log(`${index + 1}. phone=${row.phone} count=${row.count.toString()}`);
    row.ids.forEach((id, subIndex) => {
      const createdAt = row.createdAtList[subIndex] as unknown as string | Date;
      console.log(`   - ${id} (${new Date(createdAt).toISOString()})`);
    });
  });
  await client.end();
}

main()
  .catch((error) => {
    console.error('Failed to generate duplicate report:', error);
    process.exitCode = 1;
  });
