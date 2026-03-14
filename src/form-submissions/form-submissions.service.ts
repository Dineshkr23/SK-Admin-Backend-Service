import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { S3Service } from '../s3/s3.service';
import { CreateFormSubmissionDto } from './dto/create-form-submission.dto';

/** Professions that receive an SK Passport No (Mason / BarBender only). */
const SK_PASSPORT_PROFESSIONS = ['Mason', 'BarBender'] as const;

function generateSkPassportNo(): string {
  const num = Math.floor(100000 + Math.random() * 900000);
  return `SK${num}`;
}

function shouldGenerateSkPassportNo(pi_profession?: string): boolean {
  const p = pi_profession?.trim();
  if (!p) return false;
  const lower = p.toLowerCase();
  return SK_PASSPORT_PROFESSIONS.some((prof) => prof.toLowerCase() === lower);
}

@Injectable()
export class FormSubmissionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3: S3Service,
  ) {}

  async generateUniqueSkPassportNo(): Promise<string> {
    for (let i = 0; i < 20; i++) {
      const candidate = generateSkPassportNo();
      const existing = await this.prisma.formSubmission.findUnique({
        where: { skPassportNo: candidate },
      });
      if (!existing) return candidate;
    }
    throw new Error('Could not generate unique skPassportNo');
  }

  async create(
    dto: CreateFormSubmissionDto,
    files?: { photoProof?: Express.Multer.File[]; idProof?: Express.Multer.File[]; idProofBack?: Express.Multer.File[] },
  ) {
    const generatePassport = shouldGenerateSkPassportNo(dto.pi_profession);
    const skPassportNo = generatePassport ? await this.generateUniqueSkPassportNo() : null;
    const submissionId = crypto.randomUUID();

    let photoProofPath: string | null = null;
    let idProofPath: string | null = null;
    let idProofBackPath: string | null = null;

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

    const data = {
      id: submissionId,
      formType: dto.formType,
      skPassportNo,
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
      ref_nameOfTheperson: dto.ref_nameOfTheperson,
      ref_place: dto.ref_place,
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
      registeringDate: new Date(),
      photoProofPath,
      idProofPath,
      idProofBackPath,
    };

    return this.prisma.formSubmission.create({ data });
  }
}
