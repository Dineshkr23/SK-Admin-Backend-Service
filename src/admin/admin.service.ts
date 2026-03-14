import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { S3Service } from '../s3/s3.service';
import { resolveProfessionTypes } from '../common/profession-type.config';
import type { Prisma } from '../generated/prisma';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { ListSubmissionsQueryDto } from './dto/list-submissions.dto';

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3: S3Service,
  ) { }

  async list(query: ListSubmissionsQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;

    const where: Prisma.FormSubmissionWhereInput = {};

    if (query.search?.trim()) {
      const s = `%${query.search.trim()}%`;
      where.OR = [
        { pi_firstName: { contains: query.search.trim(), mode: 'insensitive' } },
        { pi_lastName: { contains: query.search.trim(), mode: 'insensitive' } },
        { pi_phone: { contains: query.search.trim() } },
        { pi_whatsAppNumber: { contains: query.search.trim() } },
        { skPassportNo: { contains: query.search.trim() } },
        { pi_city: { contains: query.search.trim(), mode: 'insensitive' } },
      ];
    }

    const professionTypes = query.professionTypes
      ? query.professionTypes.split(',').map((s) => s.trim()).filter(Boolean)
      : [];
    if (professionTypes.length > 0) {
      const values = resolveProfessionTypes(professionTypes);
      if (values.length > 0) {
        where.pi_profession = { in: values };
      }
    }

    if (typeof query.isContacted === 'boolean') where.isContacted = query.isContacted;
    if (typeof query.isApproved === 'boolean') where.isApproved = query.isApproved;
    if (typeof query.isDeleted === 'boolean') where.isDeleted = query.isDeleted;
    if (typeof query.isActive === 'boolean') where.isActive = query.isActive;
    if (typeof query.isPending === 'boolean') where.isPending = query.isPending;
    if (typeof query.isRejected === 'boolean') where.isRejected = query.isRejected;

    const [records, recordCount] = await Promise.all([
      this.prisma.formSubmission.findMany({
        where,
        skip,
        take: limit,
        orderBy: { registeringDate: 'desc' },
      }),
      this.prisma.formSubmission.count({ where }),
    ]);

    const list = records.map((r) => ({
      id: r.id,
      legacyId: r.legacyId,
      passportNo: r.skPassportNo,
      firstName: r.pi_firstName,
      city: r.pi_city,
      phoneNumber: r.pi_phone ?? r.pi_whatsAppNumber,
      profession: r.pi_profession,
      place: r.pi_city ?? r.pi_taluk,
      registeringDate: r.registeringDate,
      enteredBy: r.enteredBy,
      enteredDate: r.enteredDate,
      refNameOfThePerson: r.ref_nameOfTheperson,
      recordCount: recordCount,
      isApproved: r.isApproved,
      isContacted: r.isContacted,
      isRejected: r.isRejected,
      isPending: r.isPending,
      isDeleted: r.isDeleted,
    }));

    return { records: list, recordCount };
  }

  async getById(id: string) {
    const r = await this.prisma.formSubmission.findUnique({ where: { id } });
    if (!r) throw new NotFoundException('Submission not found');
    return {
      id: r.id,
      legacyId: r.legacyId,
      skPassportNo: r.skPassportNo,
      validationOtpGenerated: r.validationOtpGenerated,
      formType: r.formType,
      registeringDate: r.registeringDate,
      pi_firstName: r.pi_firstName,
      pi_lastName: r.pi_lastName,
      pi_profession: r.pi_profession,
      pi_dob: r.pi_dob,
      pi_phone: r.pi_phone,
      pi_whatsAppNumber: r.pi_whatsAppNumber,
      pi_emailId: r.pi_emailId,
      pi_addressLane1: r.pi_addressLane1,
      pi_addressLane2: r.pi_addressLane2,
      pi_taluk: r.pi_taluk,
      pi_district: r.pi_district,
      pi_city: r.pi_city,
      pi_state: r.pi_state,
      pi_pincode: r.pi_pincode,
      pi_landmark: r.pi_landmark,
      pi_anniversaryDate: r.pi_anniversaryDate,
      ref_nameOfTheperson: r.ref_nameOfTheperson,
      ref_place: r.ref_place,
      sod_nameOfTheDealer: r.sod_nameOfTheDealer,
      sod_place: r.sod_place,
      photoProofPath: r.photoProofPath,
      idProofPath: r.idProofPath,
      idProofBackPath: r.idProofBackPath,
      isContacted: r.isContacted,
      isApproved: r.isApproved,
      isDeleted: r.isDeleted,
      isActive: r.isActive,
      isPending: r.isPending,
      isRejected: r.isRejected,
      shop_location: r.shop_location,
      shop_Address1: r.shop_Address1,
      shop_Address2: r.shop_Address2,
      shop_District: r.shop_District,
      shop_Taluk: r.shop_Taluk,
      shop_City: r.shop_City,
      shop_Pincode: r.shop_Pincode,
      shop_Landmark: r.shop_Landmark,
      enteredBy: r.enteredBy,
      enteredDate: r.enteredDate,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
      photoProofData: r.photoProofData,
      idProofData: r.idProofData,
      idProofBackData: r.idProofBackData,
    };
  }

  async update(
    id: string,
    dto: UpdateSubmissionDto,
    files?: {
      photoProof?: Express.Multer.File[];
      idProof?: Express.Multer.File[];
      idProofBack?: Express.Multer.File[];
    },
  ) {
    await this.prisma.formSubmission.findUniqueOrThrow({ where: { id } });

    let photoProofPath: string | undefined;
    let idProofPath: string | undefined;
    let idProofBackPath: string | undefined;

    if (files?.photoProof?.[0]) {
      const f = files.photoProof[0];
      const key = `form-submissions/${id}/photoProof-${Date.now()}-${f.originalname}`;
      photoProofPath = await this.s3.upload(key, f.buffer, f.mimetype);
    }
    if (files?.idProof?.[0]) {
      const f = files.idProof[0];
      const key = `form-submissions/${id}/idProof-${Date.now()}-${f.originalname}`;
      idProofPath = await this.s3.upload(key, f.buffer, f.mimetype);
    }
    if (files?.idProofBack?.[0]) {
      const f = files.idProofBack[0];
      const key = `form-submissions/${id}/idProofBack-${Date.now()}-${f.originalname}`;
      idProofBackPath = await this.s3.upload(key, f.buffer, f.mimetype);
    }

    const data: Prisma.FormSubmissionUpdateInput = {
      ...(dto.pi_firstName !== undefined && { pi_firstName: dto.pi_firstName }),
      ...(dto.pi_lastName !== undefined && { pi_lastName: dto.pi_lastName }),
      ...(dto.pi_profession !== undefined && { pi_profession: dto.pi_profession }),
      ...(dto.pi_dob !== undefined && { pi_dob: dto.pi_dob }),
      ...(dto.pi_phone !== undefined && { pi_phone: dto.pi_phone }),
      ...(dto.pi_whatsAppNumber !== undefined && { pi_whatsAppNumber: dto.pi_whatsAppNumber }),
      ...(dto.pi_emailId !== undefined && { pi_emailId: dto.pi_emailId }),
      ...(dto.pi_addressLane1 !== undefined && { pi_addressLane1: dto.pi_addressLane1 }),
      ...(dto.pi_addressLane2 !== undefined && { pi_addressLane2: dto.pi_addressLane2 }),
      ...(dto.pi_taluk !== undefined && { pi_taluk: dto.pi_taluk }),
      ...(dto.pi_district !== undefined && { pi_district: dto.pi_district }),
      ...(dto.pi_city !== undefined && { pi_city: dto.pi_city }),
      ...(dto.pi_state !== undefined && { pi_state: dto.pi_state }),
      ...(dto.pi_pincode !== undefined && { pi_pincode: dto.pi_pincode }),
      ...(dto.pi_landmark !== undefined && { pi_landmark: dto.pi_landmark }),
      ...(dto.pi_anniversaryDate !== undefined && { pi_anniversaryDate: dto.pi_anniversaryDate }),
      ...(dto.ref_nameOfTheperson !== undefined && { ref_nameOfTheperson: dto.ref_nameOfTheperson }),
      ...(dto.ref_place !== undefined && { ref_place: dto.ref_place }),
      ...(dto.sod_nameOfTheDealer !== undefined && { sod_nameOfTheDealer: dto.sod_nameOfTheDealer }),
      ...(dto.sod_place !== undefined && { sod_place: dto.sod_place }),
      ...(dto.shop_location !== undefined && { shop_location: dto.shop_location }),
      ...(dto.shop_Address1 !== undefined && { shop_Address1: dto.shop_Address1 }),
      ...(dto.shop_Address2 !== undefined && { shop_Address2: dto.shop_Address2 }),
      ...(dto.shop_District !== undefined && { shop_District: dto.shop_District }),
      ...(dto.shop_Taluk !== undefined && { shop_Taluk: dto.shop_Taluk }),
      ...(dto.shop_City !== undefined && { shop_City: dto.shop_City }),
      ...(dto.shop_Pincode !== undefined && { shop_Pincode: dto.shop_Pincode }),
      ...(dto.shop_Landmark !== undefined && { shop_Landmark: dto.shop_Landmark }),
      ...(dto.enteredBy !== undefined && { enteredBy: dto.enteredBy }),
      ...(dto.enteredDate !== undefined && { enteredDate: new Date(dto.enteredDate) }),
      ...(dto.enteredBy !== undefined && dto.enteredDate === undefined && { enteredDate: new Date() }),
      ...(dto.isContacted !== undefined && { isContacted: dto.isContacted }),
      ...(dto.isApproved !== undefined && { isApproved: dto.isApproved }),
      ...(dto.isDeleted !== undefined && { isDeleted: dto.isDeleted }),
      ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      ...(dto.isPending !== undefined && { isPending: dto.isPending }),
      ...(dto.isRejected !== undefined && { isRejected: dto.isRejected }),
      ...(photoProofPath !== undefined && { photoProofPath }),
      ...(idProofPath !== undefined && { idProofPath }),
      ...(idProofBackPath !== undefined && { idProofBackPath }),
      ...(dto.photoProofPath === null && { photoProofPath: null }),
      ...(dto.idProofPath === null && { idProofPath: null }),
      ...(dto.idProofBackPath === null && { idProofBackPath: null }),
    };

    const updated = await this.prisma.formSubmission.update({
      where: { id },
      data,
    });
    return this.getById(updated.id);
  }
}
