import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { S3Service } from '../s3/s3.service';
import { CreateFormSubmissionDto } from './dto/create-form-submission.dto';
import {
  findOrCreateReportingManagerName,
  findOrCreateSalesOfficerName,
} from '../common/name-lookup';
import type { Prisma } from '../generated/prisma';

/** Professions that receive an SK Passport No (Mason / BarBender only). */
const SK_PASSPORT_PROFESSIONS = ['Mason', 'BarBender'] as const;

function shouldGenerateSkPassportNo(pi_profession?: string): boolean {
  const p = pi_profession?.trim();
  if (!p) return false;
  const lower = p.toLowerCase();
  return SK_PASSPORT_PROFESSIONS.some((prof) => prof.toLowerCase() === lower);
}

function normalizePhone(value?: string): string | null {
  if (!value) return null;
  const digits = value.replace(/\D/g, '').slice(-10);
  return digits.length === 10 ? digits : null;
}

function isUniqueConstraintError(error: unknown, fieldName: string): boolean {
  if (!error || typeof error !== 'object') {
    return false;
  }
  const code =
    'code' in error && typeof (error as { code?: unknown }).code === 'string'
      ? (error as { code: string }).code
      : '';
  if (code !== 'P2002') {
    return false;
  }
  const meta =
    'meta' in error && typeof (error as { meta?: unknown }).meta === 'object'
      ? ((error as { meta?: { target?: unknown } }).meta ?? {})
      : {};
  const target = Array.isArray(meta.target)
    ? meta.target
    : typeof meta.target === 'string'
      ? [meta.target]
      : [];
  return target.some((entry) => String(entry).includes(fieldName));
}

@Injectable()
export class FormSubmissionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3: S3Service,
  ) {}

  private formatSkPassportNo(seq: bigint): string {
    return `SK${seq.toString().padStart(6, '0')}`;
  }

  private async allocateNextSkPassport(
    tx: Prisma.TransactionClient,
  ): Promise<{ seq: bigint; passportNo: string }> {
    const counter = await tx.passportCounter.upsert({
      where: { key: 'SK' },
      create: { key: 'SK', lastIssued: 1n },
      update: { lastIssued: { increment: 1 } },
      select: { lastIssued: true },
    });
    const seq = counter.lastIssued;
    return { seq, passportNo: this.formatSkPassportNo(seq) };
  }

  async create(
    dto: CreateFormSubmissionDto,
    idempotencyKey?: string,
    files?: { photoProof?: Express.Multer.File[]; idProof?: Express.Multer.File[]; idProofBack?: Express.Multer.File[]; panProof?: Express.Multer.File[] },
  ) {
    const normalizedPhone = normalizePhone(dto.pi_phone);
    if (normalizedPhone) {
      dto.pi_phone = normalizedPhone;
    }
    if (idempotencyKey) {
      const existingByKey = await this.prisma.formSubmission.findUnique({
        where: { idempotencyKey },
      });
      if (existingByKey) {
        return existingByKey;
      }
    }
    if (normalizedPhone) {
      const existingPhone = await this.prisma.formSubmission.findFirst({
        where: { pi_phone: normalizedPhone },
        select: { id: true },
      });
      if (existingPhone) {
        throw new ConflictException('Phone number already registered.');
      }
    }

    const generatePassport = shouldGenerateSkPassportNo(dto.pi_profession);
    const submissionId = crypto.randomUUID();

    let photoProofPath: string | null = null;
    let idProofPath: string | null = null;
    let idProofBackPath: string | null = null;
    let panProofPath: string | null = null;

    if (files?.photoProof?.[0]) {
      const f = files.photoProof[0];
      const key = `form-submissions/${submissionId}/photoProof-${Date.now()}-${f.originalname}`;
      photoProofPath = await this.s3.upload(key, f.buffer, f.mimetype);
    }
    if (files?.idProof?.[0]) {
      const f = files.idProof[0];
      const key = `form-submissions/${submissionId}/idProof-${Date.now()}-${f.originalname}`;
      idProofPath = await this.s3.upload(key, f.buffer, f.mimetype);
    }
    if (files?.idProofBack?.[0]) {
      const f = files.idProofBack[0];
      const key = `form-submissions/${submissionId}/idProofBack-${Date.now()}-${f.originalname}`;
      idProofBackPath = await this.s3.upload(key, f.buffer, f.mimetype);
    }
    if (files?.panProof?.[0]) {
      const f = files.panProof[0];
      const key = `form-submissions/${submissionId}/panProof-${Date.now()}-${f.originalname}`;
      panProofPath = await this.s3.upload(key, f.buffer, f.mimetype);
    }

    const salesOfficerName = await findOrCreateSalesOfficerName(
      this.prisma,
      dto.ref_nameOfTheperson,
    );
    const reportingManagerName = await findOrCreateReportingManagerName(
      this.prisma,
      dto.reporting_manager_name,
    );

    try {
      return await this.prisma.$transaction(async (tx) => {
        const passport = generatePassport
          ? await this.allocateNextSkPassport(tx)
          : null;

        const data = {
          id: submissionId,
          idempotencyKey: idempotencyKey ?? null,
          formType: dto.formType,
          skPassportNo: passport?.passportNo ?? null,
          skPassportSeq: passport?.seq ?? null,
          pi_firstName: dto.pi_firstName,
          pi_lastName: dto.pi_lastName,
          pi_profession: dto.pi_profession,
          pi_dob: dto.pi_dob,
          pi_phone: dto.pi_phone,
          pi_whatsAppNumber: dto.pi_whatsAppNumber,
          pi_emailId: dto.pi_emailId,
          pi_addressLane1: dto.pi_addressLane1,
          pi_addressLane2: dto.pi_addressLane2,
          pi_taluk: dto.pi_taluk,
          pi_district: dto.pi_district,
          pi_city: dto.pi_city,
          pi_state: dto.pi_state,
          pi_pincode: dto.pi_pincode,
          pi_landmark: dto.pi_landmark,
          pi_anniversaryDate: dto.pi_anniversaryDate,
          ref_nameOfTheperson: salesOfficerName,
          ref_place: dto.ref_place,
          reporting_manager_name: reportingManagerName,
          sod_nameOfTheDealer: dto.sod_nameOfTheDealer,
          sod_place: dto.sod_place,
          shop_location: dto.shop_location,
          shop_Address1: dto.shop_Address1,
          shop_Address2: dto.shop_Address2,
          shop_District: dto.shop_District,
          shop_Taluk: dto.shop_Taluk,
          shop_City: dto.shop_City,
          shop_Pincode: dto.shop_Pincode,
          shop_Landmark: dto.shop_Landmark,
          isContacted: dto.isContacted ?? false,
          isApproved: dto.isApproved ?? false,
          isDeleted: dto.isDeleted ?? false,
          isActive: dto.isActive ?? true,
          isPending: dto.isPending ?? true,
          isRejected: dto.isRejected ?? false,
          title: dto.title,
          age: dto.age,
          sameAsAbove: dto.sameAsAbove,
          remarks: dto.remarks,
          validationCode: dto.validationCode,
          registeringDate: new Date(),
          photoProofPath,
          idProofPath,
          idProofBackPath,
          panProofPath,
          dealershipName: dto.dealershipName,
          contactPerson: dto.contactPerson,
          gstNumber: dto.gstNumber,
          panNumber: dto.panNumber,
          ownerSameAsAbove: dto.ownerSameAsAbove,
          ownerTitle: dto.ownerTitle,
          ownerFirstName: dto.ownerFirstName,
          ownerLastName: dto.ownerLastName,
          ownerOfficeAddressLine1: dto.ownerOfficeAddressLine1,
          ownerOfficeAddressLine2: dto.ownerOfficeAddressLine2,
          ownerCity: dto.ownerCity,
          ownerState: dto.ownerState,
          ownerPostalCode: dto.ownerPostalCode,
          ownerPlace: dto.ownerPlace,
          ownerPhoneNumber: dto.ownerPhoneNumber,
          ownerEmailId: dto.ownerEmailId,
          secondContactTitle: dto.secondContactTitle,
          secondContactFirstName: dto.secondContactFirstName,
          secondContactLastName: dto.secondContactLastName,
          secondContactPhone: dto.secondContactPhone,
          secondContactEmail: dto.secondContactEmail,
          spouseName: dto.spouseName,
          spouseDob: dto.spouseDob,
          weddingDay: dto.weddingDay,
          childName1: dto.childName1,
          childDob1: dto.childDob1,
          childName2: dto.childName2,
          childDob2: dto.childDob2,
          childName3: dto.childName3,
          childDob3: dto.childDob3,
          godownSameAsCompany: dto.godownSameAsCompany,
          godownAddressLine1: dto.godownAddressLine1,
          godownAddressLine2: dto.godownAddressLine2,
          godownCity: dto.godownCity,
          godownState: dto.godownState,
          godownPostalCode: dto.godownPostalCode,
          godownContactPerson: dto.godownContactPerson,
          godownContactMobile: dto.godownContactMobile,
          referenceName1: dto.referenceName1,
          referencePhone1: dto.referencePhone1,
          referenceDetails1: dto.referenceDetails1,
          referenceName2: dto.referenceName2,
          referencePhone2: dto.referencePhone2,
          referenceDetails2: dto.referenceDetails2,
        };

        return tx.formSubmission.create({ data });
      });
    } catch (error) {
      if (idempotencyKey && isUniqueConstraintError(error, 'idempotencyKey')) {
        const existingByKey = await this.prisma.formSubmission.findUnique({
          where: { idempotencyKey },
        });
        if (existingByKey) {
          return existingByKey;
        }
      }
      if (isUniqueConstraintError(error, 'pi_phone')) {
        throw new ConflictException('Phone number already registered.');
      }
      throw error;
    }
  }

  async getPhoneStatus(phone: string): Promise<{ exists: boolean }> {
    const normalizedPhone = normalizePhone(phone);
    if (!normalizedPhone) {
      return { exists: false };
    }
    const existing = await this.prisma.formSubmission.findFirst({
      where: {
        pi_phone: normalizedPhone,
      },
      select: { id: true },
    });
    return { exists: !!existing };
  }
}
