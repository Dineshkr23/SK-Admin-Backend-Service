-- AlterTable
ALTER TABLE "AdminUser" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'ADMIN';

-- CreateTable
CREATE TABLE "GlobalPrice" (
    "key" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GlobalPrice_pkey" PRIMARY KEY ("key")
);
