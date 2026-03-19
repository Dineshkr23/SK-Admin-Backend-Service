-- AlterTable
ALTER TABLE "FormSubmission" ADD COLUMN     "reporting_manager_name" TEXT;

-- RenameIndex
ALTER INDEX "FormSubmission_isContacted_isApproved_isDeleted_isActive_isPend" RENAME TO "FormSubmission_isContacted_isApproved_isDeleted_isActive_is_idx";
