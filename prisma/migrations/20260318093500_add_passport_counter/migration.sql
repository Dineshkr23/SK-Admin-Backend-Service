CREATE TABLE IF NOT EXISTS "PassportCounter" (
  "key" TEXT NOT NULL,
  "lastIssued" BIGINT NOT NULL DEFAULT 0,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "PassportCounter_pkey" PRIMARY KEY ("key")
);

INSERT INTO "PassportCounter" ("key", "lastIssued", "updatedAt")
VALUES ('SK', 0, CURRENT_TIMESTAMP)
ON CONFLICT ("key") DO NOTHING;

