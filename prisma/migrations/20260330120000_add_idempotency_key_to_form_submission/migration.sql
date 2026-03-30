-- AlterTable
ALTER TABLE "FormSubmission" ADD COLUMN "idempotencyKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "FormSubmission_idempotencyKey_key" ON "FormSubmission"("idempotencyKey");
