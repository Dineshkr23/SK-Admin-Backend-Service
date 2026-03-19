-- 1) Allow duplicates for legacy imports (passport + legacyId)
DROP INDEX IF EXISTS "FormSubmission_skPassportNo_key";
DROP INDEX IF EXISTS "FormSubmission_legacyId_key";

-- 2) Add internal sequential issuer column for new passports
ALTER TABLE "FormSubmission" ADD COLUMN IF NOT EXISTS "skPassportSeq" BIGINT;
CREATE UNIQUE INDEX IF NOT EXISTS "FormSubmission_skPassportSeq_key" ON "FormSubmission"("skPassportSeq");

-- 3) Create DB sequence used to allocate sequential passport numbers
-- Application code should call: SELECT nextval('sk_passport_seq')
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_class WHERE relkind = 'S' AND relname = 'sk_passport_seq') THEN
    CREATE SEQUENCE "sk_passport_seq" START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 100;
  END IF;
END$$;

-- 4) Legacy import tables (idempotent + blobs off hot path)
CREATE TABLE IF NOT EXISTS "LegacyRegistration" (
  "id" TEXT NOT NULL,
  "legacySource" TEXT NOT NULL,
  "legacyRowIndex" INTEGER NOT NULL,
  "legacyId" INTEGER,
  "legacyPassportNo" TEXT,
  "rawTableRecord" JSONB,
  "rawDetailRecord" JSONB,
  "submissionId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "LegacyRegistration_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "LegacyRegistration_legacySource_legacyRowIndex_key"
  ON "LegacyRegistration"("legacySource", "legacyRowIndex");
CREATE INDEX IF NOT EXISTS "LegacyRegistration_legacyId_idx" ON "LegacyRegistration"("legacyId");
CREATE INDEX IF NOT EXISTS "LegacyRegistration_legacyPassportNo_idx" ON "LegacyRegistration"("legacyPassportNo");
CREATE INDEX IF NOT EXISTS "LegacyRegistration_submissionId_idx" ON "LegacyRegistration"("submissionId");

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'LegacyRegistration_submissionId_fkey'
  ) THEN
    ALTER TABLE "LegacyRegistration"
      ADD CONSTRAINT "LegacyRegistration_submissionId_fkey"
      FOREIGN KEY ("submissionId") REFERENCES "FormSubmission"("id")
      ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END$$;

CREATE TABLE IF NOT EXISTS "LegacyBlob" (
  "id" TEXT NOT NULL,
  "submissionId" TEXT NOT NULL,
  "photoProofData" TEXT,
  "idProofData" TEXT,
  "idProofBackData" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "LegacyBlob_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "LegacyBlob_submissionId_key" ON "LegacyBlob"("submissionId");
CREATE INDEX IF NOT EXISTS "LegacyBlob_submissionId_idx" ON "LegacyBlob"("submissionId");

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'LegacyBlob_submissionId_fkey'
  ) THEN
    ALTER TABLE "LegacyBlob"
      ADD CONSTRAINT "LegacyBlob_submissionId_fkey"
      FOREIGN KEY ("submissionId") REFERENCES "FormSubmission"("id")
      ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END$$;

-- 5) Missing indexes for common filters
CREATE INDEX IF NOT EXISTS "FormSubmission_legacyId_idx" ON "FormSubmission"("legacyId");
CREATE INDEX IF NOT EXISTS "FormSubmission_ref_nameOfTheperson_idx" ON "FormSubmission"("ref_nameOfTheperson");
CREATE INDEX IF NOT EXISTS "FormSubmission_reporting_manager_name_idx" ON "FormSubmission"("reporting_manager_name");

-- 6) Faster substring search via pg_trgm + GIN trigram indexes
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX IF NOT EXISTS "FormSubmission_skPassportNo_trgm_idx"
  ON "FormSubmission" USING GIN ("skPassportNo" gin_trgm_ops);
CREATE INDEX IF NOT EXISTS "FormSubmission_pi_firstName_trgm_idx"
  ON "FormSubmission" USING GIN ("pi_firstName" gin_trgm_ops);
CREATE INDEX IF NOT EXISTS "FormSubmission_pi_lastName_trgm_idx"
  ON "FormSubmission" USING GIN ("pi_lastName" gin_trgm_ops);
CREATE INDEX IF NOT EXISTS "FormSubmission_pi_city_trgm_idx"
  ON "FormSubmission" USING GIN ("pi_city" gin_trgm_ops);
CREATE INDEX IF NOT EXISTS "FormSubmission_pi_phone_trgm_idx"
  ON "FormSubmission" USING GIN ("pi_phone" gin_trgm_ops);
CREATE INDEX IF NOT EXISTS "FormSubmission_pi_whatsAppNumber_trgm_idx"
  ON "FormSubmission" USING GIN ("pi_whatsAppNumber" gin_trgm_ops);

