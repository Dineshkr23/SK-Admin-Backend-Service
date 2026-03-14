-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormSubmission" (
    "id" TEXT NOT NULL,
    "legacyId" INTEGER,
    "formType" TEXT NOT NULL,
    "skPassportNo" TEXT,
    "validationOtpGenerated" TEXT,
    "registeringDate" TIMESTAMP(3),
    "pi_firstName" TEXT,
    "pi_lastName" TEXT,
    "pi_profession" TEXT,
    "pi_dob" TEXT,
    "pi_phone" TEXT,
    "pi_whatsAppNumber" TEXT,
    "pi_emailId" TEXT,
    "pi_addressLane1" TEXT,
    "pi_addressLane2" TEXT,
    "pi_taluk" TEXT,
    "pi_district" TEXT,
    "pi_city" TEXT,
    "pi_state" TEXT,
    "pi_pincode" TEXT,
    "pi_landmark" TEXT,
    "pi_anniversaryDate" TEXT,
    "ref_nameOfTheperson" TEXT,
    "ref_place" TEXT,
    "sod_nameOfTheDealer" TEXT,
    "sod_place" TEXT,
    "photoProofPath" TEXT,
    "idProofPath" TEXT,
    "idProofBackPath" TEXT,
    "isContacted" BOOLEAN DEFAULT false,
    "isApproved" BOOLEAN DEFAULT false,
    "isDeleted" BOOLEAN DEFAULT false,
    "isActive" BOOLEAN DEFAULT true,
    "isPending" BOOLEAN DEFAULT true,
    "isRejected" BOOLEAN DEFAULT false,
    "shop_location" TEXT,
    "shop_Address1" TEXT,
    "shop_Address2" TEXT,
    "shop_District" TEXT,
    "shop_Taluk" TEXT,
    "shop_City" TEXT,
    "shop_Pincode" TEXT,
    "shop_Landmark" TEXT,
    "enteredBy" TEXT,
    "enteredDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "photoProofData" TEXT,
    "idProofData" TEXT,
    "idProofBackData" TEXT,

    CONSTRAINT "FormSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FormSubmission_legacyId_key" ON "FormSubmission"("legacyId");

-- CreateIndex
CREATE UNIQUE INDEX "FormSubmission_skPassportNo_key" ON "FormSubmission"("skPassportNo");

-- CreateIndex
CREATE INDEX "FormSubmission_pi_profession_idx" ON "FormSubmission"("pi_profession");

-- CreateIndex
CREATE INDEX "FormSubmission_formType_idx" ON "FormSubmission"("formType");

-- CreateIndex
CREATE INDEX "FormSubmission_isContacted_isApproved_isDeleted_isActive_isPending_isRejected_idx" ON "FormSubmission"("isContacted", "isApproved", "isDeleted", "isActive", "isPending", "isRejected");

-- CreateIndex
CREATE INDEX "FormSubmission_registeringDate_idx" ON "FormSubmission"("registeringDate");

-- CreateIndex
CREATE INDEX "FormSubmission_skPassportNo_idx" ON "FormSubmission"("skPassportNo");
