-- CreateTable
CREATE TABLE "SalesOfficer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameNormalized" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesOfficer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportingManager" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameNormalized" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReportingManager_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SalesOfficer_name_key" ON "SalesOfficer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SalesOfficer_nameNormalized_key" ON "SalesOfficer"("nameNormalized");

-- CreateIndex
CREATE UNIQUE INDEX "ReportingManager_name_key" ON "ReportingManager"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ReportingManager_nameNormalized_key" ON "ReportingManager"("nameNormalized");

