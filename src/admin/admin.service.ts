import { Injectable, NotFoundException } from '@nestjs/common';
import type { Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { S3Service } from '../s3/s3.service';
import { resolveProfessionTypes } from '../common/profession-type.config';
import type { Prisma } from '../generated/prisma';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { ListSubmissionsQueryDto } from './dto/list-submissions.dto';
import { BulkUpdateSubmissionsDto } from './dto/bulk-update-submissions.dto';
import {
  findOrCreateReportingManagerName,
  findOrCreateSalesOfficerName,
} from '../common/name-lookup';

import ExcelJS from 'exceljs';

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
      where.OR = [
        { pi_firstName: { contains: query.search.trim(), mode: 'insensitive' } },
        { pi_lastName: { contains: query.search.trim(), mode: 'insensitive' } },
        { pi_phone: { contains: query.search.trim() } },
        { pi_whatsAppNumber: { contains: query.search.trim() } },
        { skPassportNo: { contains: query.search.trim() } },
        { pi_city: { contains: query.search.trim(), mode: 'insensitive' } },
      ];
    }

    const formTypes = query.formTypes
      ? query.formTypes.split(',').map((s) => s.trim()).filter(Boolean)
      : [];

    // Backward compatibility: older clients might still send `professionTypes`.
    const professionTypes = formTypes.length === 0 && query.professionTypes
      ? query.professionTypes.split(',').map((s) => s.trim()).filter(Boolean)
      : [];

    const resolvedFormTypes =
      formTypes.length > 0 ? formTypes : resolveProfessionTypes(professionTypes);

    if (resolvedFormTypes.length > 0) {
      where.formType = { in: resolvedFormTypes };
    }

    if (typeof query.isContacted === 'boolean') where.isContacted = query.isContacted;
    if (typeof query.isApproved === 'boolean') where.isApproved = query.isApproved;
    if (typeof query.isDeleted === 'boolean') where.isDeleted = query.isDeleted;
    if (typeof query.isActive === 'boolean') where.isActive = query.isActive;
    if (typeof query.isPending === 'boolean') where.isPending = query.isPending;
    if (typeof query.isRejected === 'boolean') where.isRejected = query.isRejected;

    if (query.salesOfficer?.trim()) {
      const values = query.salesOfficer
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      if (values.length > 0) {
        where.ref_nameOfTheperson = { in: values };
      }
    }

    if (query.reportingManager?.trim()) {
      const values = query.reportingManager
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      if (values.length > 0) {
        where.reporting_manager_name = { in: values };
      }
    }

    const dateRange: { gte?: Date; lte?: Date } = {};
    if (query.dateFrom) {
      const d = new Date(query.dateFrom);
      if (!Number.isNaN(d.getTime())) {
        d.setUTCHours(0, 0, 0, 0);
        dateRange.gte = d;
      }
    }
    if (query.dateTo) {
      const d = new Date(query.dateTo);
      if (!Number.isNaN(d.getTime())) {
        d.setUTCHours(23, 59, 59, 999);
        dateRange.lte = d;
      }
    }
    if (Object.keys(dateRange).length > 0) {
      where.registeringDate = dateRange;
    }

    const [records, recordCount] = await Promise.all([
      this.prisma.formSubmission.findMany({
        where,
        skip,
        take: limit,
        orderBy: { registeringDate: 'desc' },
        select: {
          id: true,
          legacyId: true,
          skPassportNo: true,
          pi_firstName: true,
          pi_city: true,
          pi_phone: true,
          pi_whatsAppNumber: true,
          pi_profession: true,
          pi_taluk: true,
          registeringDate: true,
          enteredBy: true,
          enteredDate: true,
          ref_nameOfTheperson: true,
          isApproved: true,
          isContacted: true,
          isRejected: true,
          isPending: true,
          isDeleted: true,
          reporting_manager_name: true,
        },
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
      reportingManagerName: r.reporting_manager_name,
      isApproved: r.isApproved,
      isContacted: r.isContacted,
      isRejected: r.isRejected,
      isPending: r.isPending,
      isDeleted: r.isDeleted,
    }));

    return { records: list, recordCount };
  }

  async exportSubmissionsToExcel(
    dto: ListSubmissionsQueryDto,
    res: Response,
  ) {
    const where: Prisma.FormSubmissionWhereInput = {};

    const dateRange: { gte?: Date; lte?: Date } = {};
    if (dto.dateFrom) {
      const d = new Date(dto.dateFrom);
      if (!Number.isNaN(d.getTime())) {
        d.setUTCHours(0, 0, 0, 0);
        dateRange.gte = d;
      }
    }
    if (dto.dateTo) {
      const d = new Date(dto.dateTo);
      if (!Number.isNaN(d.getTime())) {
        d.setUTCHours(23, 59, 59, 999);
        dateRange.lte = d;
      }
    }
    if (Object.keys(dateRange).length > 0) {
      where.registeringDate = dateRange;
    }

    const formTypes =
      dto.formTypes?.trim().length
        ? dto.formTypes
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
        : [];

    if (formTypes.length > 0) {
      where.formType = { in: formTypes };
    }

    const MAX_EXPORT_ROWS = 50000;
    const totalCount = await this.prisma.formSubmission.count({ where });
    const take = Math.min(totalCount, MAX_EXPORT_ROWS);

    const records = await this.prisma.formSubmission.findMany({
      where,
      take,
      orderBy: { registeringDate: 'desc' },
      select: {
        skPassportNo: true,
        registeringDate: true,

        // Common fields shown in admin dialogs
        title: true,
        age: true,
        sameAsAbove: true,
        remarks: true,
        validationCode: true,

        pi_firstName: true,
        pi_lastName: true,
        pi_profession: true,
        pi_dob: true,
        pi_phone: true,
        pi_whatsAppNumber: true,
        pi_emailId: true,
        pi_addressLane1: true,
        pi_addressLane2: true,
        pi_taluk: true,
        pi_district: true,
        pi_city: true,
        pi_state: true,
        pi_pincode: true,
        pi_landmark: true,
        pi_anniversaryDate: true,

        ref_nameOfTheperson: true,
        ref_place: true,
        reporting_manager_name: true,

        sod_nameOfTheDealer: true,
        sod_place: true,

        shop_location: true,
        shop_Address1: true,
        shop_Address2: true,
        shop_District: true,
        shop_Taluk: true,
        shop_City: true,
        shop_Pincode: true,
        shop_Landmark: true,

        // Dealer-only fields (will be blank for non-dealers)
        dealershipName: true,
        contactPerson: true,
        gstNumber: true,
        panNumber: true,

        ownerSameAsAbove: true,
        ownerTitle: true,
        ownerFirstName: true,
        ownerLastName: true,
        ownerOfficeAddressLine1: true,
        ownerOfficeAddressLine2: true,
        ownerCity: true,
        ownerState: true,
        ownerPostalCode: true,
        ownerPlace: true,
        ownerPhoneNumber: true,
        ownerEmailId: true,

        secondContactTitle: true,
        secondContactFirstName: true,
        secondContactLastName: true,
        secondContactPhone: true,
        secondContactEmail: true,

        spouseName: true,
        spouseDob: true,
        weddingDay: true,

        childName1: true,
        childDob1: true,
        childName2: true,
        childDob2: true,
        childName3: true,
        childDob3: true,

        godownSameAsCompany: true,
        godownAddressLine1: true,
        godownAddressLine2: true,
        godownCity: true,
        godownState: true,
        godownPostalCode: true,
        godownContactPerson: true,
        godownContactMobile: true,

        referenceName1: true,
        referencePhone1: true,
        referenceDetails1: true,
        referenceName2: true,
        referencePhone2: true,
        referenceDetails2: true,

        // Image links shown in admin dialogs
        photoProofPath: true,
        idProofPath: true,
        idProofBackPath: true,
        panProofPath: true,

        // Status flags shown in admin dialogs
        enteredBy: true,
        enteredDate: true,
        isContacted: true,
        isApproved: true,
        isDeleted: true,
        isActive: true,
        isPending: true,
        isRejected: true,
      },
    });

    const formatYMD = (d: Date | null | undefined) => {
      if (!d) return '';
      try {
        return d.toISOString().slice(0, 10);
      } catch {
        return String(d);
      }
    };

    const keysInOrder = [
      'skPassportNo',
      'registeringDate',
      'title',
      'age',
      'sameAsAbove',
      'remarks',
      'validationCode',
      'pi_firstName',
      'pi_lastName',
      'pi_profession',
      'pi_dob',
      'pi_phone',
      'pi_whatsAppNumber',
      'pi_emailId',
      'pi_addressLane1',
      'pi_addressLane2',
      'pi_taluk',
      'pi_district',
      'pi_city',
      'pi_state',
      'pi_pincode',
      'pi_landmark',
      'pi_anniversaryDate',
      'ref_nameOfTheperson',
      'ref_place',
      'reporting_manager_name',
      'sod_nameOfTheDealer',
      'sod_place',
      'shop_location',
      'shop_Address1',
      'shop_Address2',
      'shop_District',
      'shop_Taluk',
      'shop_City',
      'shop_Pincode',
      'shop_Landmark',
      'dealershipName',
      'contactPerson',
      'gstNumber',
      'panNumber',
      'ownerSameAsAbove',
      'ownerTitle',
      'ownerFirstName',
      'ownerLastName',
      'ownerOfficeAddressLine1',
      'ownerOfficeAddressLine2',
      'ownerCity',
      'ownerState',
      'ownerPostalCode',
      'ownerPlace',
      'ownerPhoneNumber',
      'ownerEmailId',
      'secondContactTitle',
      'secondContactFirstName',
      'secondContactLastName',
      'secondContactPhone',
      'secondContactEmail',
      'spouseName',
      'spouseDob',
      'weddingDay',
      'childName1',
      'childDob1',
      'childName2',
      'childDob2',
      'childName3',
      'childDob3',
      'godownSameAsCompany',
      'godownAddressLine1',
      'godownAddressLine2',
      'godownCity',
      'godownState',
      'godownPostalCode',
      'godownContactPerson',
      'godownContactMobile',
      'referenceName1',
      'referencePhone1',
      'referenceDetails1',
      'referenceName2',
      'referencePhone2',
      'referenceDetails2',
      'photoProofPath',
      'idProofPath',
      'idProofBackPath',
      'panProofPath',
      'enteredBy',
      'enteredDate',
      'isContacted',
      'isApproved',
      'isDeleted',
      'isActive',
      'isPending',
      'isRejected',
    ] as const;

    const rows = records.map((r) => {
      const out: Record<string, unknown> = {};
      for (const k of keysInOrder) {
        const v = (r as Record<string, unknown>)[k];
        if (k.endsWith('Date') || v instanceof Date) {
          out[k] = formatYMD(v as Date);
        } else {
          out[k] = v ?? '';
        }
      }
      return out;
    });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Submissions');
    sheet.columns = keysInOrder.map((k) => ({
      header: k,
      key: k,
      width: k.endsWith('Path') ? 40 : Math.max(12, String(k).length + 8),
    }));

    sheet.getRow(1).font = { bold: true };

    for (const r of rows) {
      sheet.addRow(r);
    }

    if (totalCount > take) {
      sheet.addRow({});
      sheet.addRow({
        skPassportNo: `Export truncated: showing first ${take} of ${totalCount} rows`,
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const filename = `submissions-export-${new Date().toISOString().slice(0, 10)}.xlsx`;

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    return res.send(Buffer.from(buffer));
  }

  async getFilterOptions(field: 'salesOfficer' | 'reportingManager') {
    if (field === 'salesOfficer') {
      const records = await this.prisma.salesOfficer.findMany({
        select: { name: true },
        orderBy: { name: 'asc' },
      });
      return { options: records.map((r) => r.name) };
    }
    if (field === 'reportingManager') {
      const records = await this.prisma.reportingManager.findMany({
        select: { name: true },
        orderBy: { name: 'asc' },
      });
      return { options: records.map((r) => r.name) };
    }
    return { options: [] };
  }

  async getById(id: string, opts?: { includeBlobs?: boolean }) {
    const includeBlobs = Boolean(opts?.includeBlobs);
    const r = await this.prisma.formSubmission.findUnique({
      where: { id },
      select: {
        id: true,
        legacyId: true,
        skPassportNo: true,
        validationOtpGenerated: true,
        title: true,
        age: true,
        sameAsAbove: true,
        remarks: true,
        validationCode: true,
        formType: true,
        registeringDate: true,
        pi_firstName: true,
        pi_lastName: true,
        pi_profession: true,
        pi_dob: true,
        pi_phone: true,
        pi_whatsAppNumber: true,
        pi_emailId: true,
        pi_addressLane1: true,
        pi_addressLane2: true,
        pi_taluk: true,
        pi_district: true,
        pi_city: true,
        pi_state: true,
        pi_pincode: true,
        pi_landmark: true,
        pi_anniversaryDate: true,
        ref_nameOfTheperson: true,
        ref_place: true,
        reporting_manager_name: true,
        sod_nameOfTheDealer: true,
        sod_place: true,
        photoProofPath: true,
        idProofPath: true,
        idProofBackPath: true,
        panProofPath: true,
        isContacted: true,
        isApproved: true,
        isDeleted: true,
        isActive: true,
        isPending: true,
        isRejected: true,
        shop_location: true,
        shop_Address1: true,
        shop_Address2: true,
        shop_District: true,
        shop_Taluk: true,
        shop_City: true,
        shop_Pincode: true,
        shop_Landmark: true,
        enteredBy: true,
        enteredDate: true,
        createdAt: true,
        updatedAt: true,
        dealershipName: true,
        contactPerson: true,
        gstNumber: true,
        panNumber: true,
        ownerSameAsAbove: true,
        ownerTitle: true,
        ownerFirstName: true,
        ownerLastName: true,
        ownerOfficeAddressLine1: true,
        ownerOfficeAddressLine2: true,
        ownerCity: true,
        ownerState: true,
        ownerPostalCode: true,
        ownerPlace: true,
        ownerPhoneNumber: true,
        ownerEmailId: true,
        secondContactTitle: true,
        secondContactFirstName: true,
        secondContactLastName: true,
        secondContactPhone: true,
        secondContactEmail: true,
        spouseName: true,
        spouseDob: true,
        weddingDay: true,
        childName1: true,
        childDob1: true,
        childName2: true,
        childDob2: true,
        childName3: true,
        childDob3: true,
        godownSameAsCompany: true,
        godownAddressLine1: true,
        godownAddressLine2: true,
        godownCity: true,
        godownState: true,
        godownPostalCode: true,
        godownContactPerson: true,
        godownContactMobile: true,
        referenceName1: true,
        referencePhone1: true,
        referenceDetails1: true,
        referenceName2: true,
        referencePhone2: true,
        referenceDetails2: true,
        ...(includeBlobs
          ? {
              // Fallback: legacy blobs still present on FormSubmission for older imports.
              photoProofData: true,
              idProofData: true,
              idProofBackData: true,
              panProofData: true,
            }
          : {}),
      },
    });
    if (!r) throw new NotFoundException('Submission not found');

    let blob:
      | { photoProofData: string | null; idProofData: string | null; idProofBackData: string | null; panProofData?: string | null }
      | null = null;
    if (includeBlobs) {
      const b = await this.prisma.legacyBlob.findUnique({
        where: { submissionId: id },
        select: { photoProofData: true, idProofData: true, idProofBackData: true },
      });
      blob = b ?? null;
    }

    return {
      id: r.id,
      legacyId: r.legacyId,
      skPassportNo: r.skPassportNo,
      validationOtpGenerated: r.validationOtpGenerated,
      title: (r as { title?: string | null }).title,
      age: (r as { age?: string | null }).age,
      sameAsAbove: (r as { sameAsAbove?: boolean | null }).sameAsAbove,
      remarks: (r as { remarks?: string | null }).remarks,
      validationCode: (r as { validationCode?: string | null }).validationCode,
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
      reporting_manager_name: r.reporting_manager_name,
      sod_nameOfTheDealer: r.sod_nameOfTheDealer,
      sod_place: r.sod_place,
      photoProofPath: r.photoProofPath,
      idProofPath: r.idProofPath,
      idProofBackPath: r.idProofBackPath,
      panProofPath: r.panProofPath,
      dealershipName: (r as { dealershipName?: string | null }).dealershipName,
      contactPerson: (r as { contactPerson?: string | null }).contactPerson,
      gstNumber: (r as { gstNumber?: string | null }).gstNumber,
      panNumber: (r as { panNumber?: string | null }).panNumber,
      ownerSameAsAbove: (r as { ownerSameAsAbove?: boolean | null }).ownerSameAsAbove,
      ownerTitle: (r as { ownerTitle?: string | null }).ownerTitle,
      ownerFirstName: (r as { ownerFirstName?: string | null }).ownerFirstName,
      ownerLastName: (r as { ownerLastName?: string | null }).ownerLastName,
      ownerOfficeAddressLine1: (r as { ownerOfficeAddressLine1?: string | null }).ownerOfficeAddressLine1,
      ownerOfficeAddressLine2: (r as { ownerOfficeAddressLine2?: string | null }).ownerOfficeAddressLine2,
      ownerCity: (r as { ownerCity?: string | null }).ownerCity,
      ownerState: (r as { ownerState?: string | null }).ownerState,
      ownerPostalCode: (r as { ownerPostalCode?: string | null }).ownerPostalCode,
      ownerPlace: (r as { ownerPlace?: string | null }).ownerPlace,
      ownerPhoneNumber: (r as { ownerPhoneNumber?: string | null }).ownerPhoneNumber,
      ownerEmailId: (r as { ownerEmailId?: string | null }).ownerEmailId,
      secondContactTitle: (r as { secondContactTitle?: string | null }).secondContactTitle,
      secondContactFirstName: (r as { secondContactFirstName?: string | null }).secondContactFirstName,
      secondContactLastName: (r as { secondContactLastName?: string | null }).secondContactLastName,
      secondContactPhone: (r as { secondContactPhone?: string | null }).secondContactPhone,
      secondContactEmail: (r as { secondContactEmail?: string | null }).secondContactEmail,
      spouseName: (r as { spouseName?: string | null }).spouseName,
      spouseDob: (r as { spouseDob?: string | null }).spouseDob,
      weddingDay: (r as { weddingDay?: string | null }).weddingDay,
      childName1: (r as { childName1?: string | null }).childName1,
      childDob1: (r as { childDob1?: string | null }).childDob1,
      childName2: (r as { childName2?: string | null }).childName2,
      childDob2: (r as { childDob2?: string | null }).childDob2,
      childName3: (r as { childName3?: string | null }).childName3,
      childDob3: (r as { childDob3?: string | null }).childDob3,
      godownSameAsCompany: (r as { godownSameAsCompany?: boolean | null }).godownSameAsCompany,
      godownAddressLine1: (r as { godownAddressLine1?: string | null }).godownAddressLine1,
      godownAddressLine2: (r as { godownAddressLine2?: string | null }).godownAddressLine2,
      godownCity: (r as { godownCity?: string | null }).godownCity,
      godownState: (r as { godownState?: string | null }).godownState,
      godownPostalCode: (r as { godownPostalCode?: string | null }).godownPostalCode,
      godownContactPerson: (r as { godownContactPerson?: string | null }).godownContactPerson,
      godownContactMobile: (r as { godownContactMobile?: string | null }).godownContactMobile,
      referenceName1: (r as { referenceName1?: string | null }).referenceName1,
      referencePhone1: (r as { referencePhone1?: string | null }).referencePhone1,
      referenceDetails1: (r as { referenceDetails1?: string | null }).referenceDetails1,
      referenceName2: (r as { referenceName2?: string | null }).referenceName2,
      referencePhone2: (r as { referencePhone2?: string | null }).referencePhone2,
      referenceDetails2: (r as { referenceDetails2?: string | null }).referenceDetails2,
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
      ...(includeBlobs
        ? {
            photoProofData:
              blob?.photoProofData ?? (r as unknown as { photoProofData?: string | null }).photoProofData ?? null,
            idProofData:
              blob?.idProofData ?? (r as unknown as { idProofData?: string | null }).idProofData ?? null,
            idProofBackData:
              blob?.idProofBackData ??
              (r as unknown as { idProofBackData?: string | null }).idProofBackData ??
              null,
            panProofData:
              (r as unknown as { panProofData?: string | null }).panProofData ?? null,
          }
        : {}),
    };
  }

  async bulkUpdate(dto: BulkUpdateSubmissionsDto) {
    const ids = Array.isArray(dto.ids) ? dto.ids.filter(Boolean) : [];
    const limit = dto.limit != null ? Math.max(0, Math.min(dto.limit, ids.length)) : ids.length;
    const targetIds = ids.slice(0, limit);

    if (targetIds.length === 0) {
      return { updatedCount: 0 };
    }

    const payload = dto.data ?? {};

    const salesOfficerName =
      payload.ref_nameOfTheperson !== undefined
        ? await findOrCreateSalesOfficerName(this.prisma, payload.ref_nameOfTheperson)
        : undefined;
    const reportingManagerName =
      payload.reporting_manager_name !== undefined
        ? await findOrCreateReportingManagerName(this.prisma, payload.reporting_manager_name)
        : undefined;

    const data: Prisma.FormSubmissionUpdateManyMutationInput = {
      ...(payload.pi_firstName !== undefined && { pi_firstName: payload.pi_firstName }),
      ...(payload.title !== undefined && { title: payload.title }),
      ...(payload.age !== undefined && { age: payload.age }),
      ...(payload.sameAsAbove !== undefined && { sameAsAbove: payload.sameAsAbove }),
      ...(payload.remarks !== undefined && { remarks: payload.remarks }),
      ...(payload.validationCode !== undefined && { validationCode: payload.validationCode }),
      ...(payload.pi_lastName !== undefined && { pi_lastName: payload.pi_lastName }),
      ...(payload.pi_profession !== undefined && { pi_profession: payload.pi_profession }),
      ...(payload.pi_dob !== undefined && { pi_dob: payload.pi_dob }),
      ...(payload.pi_phone !== undefined && { pi_phone: payload.pi_phone }),
      ...(payload.pi_whatsAppNumber !== undefined && { pi_whatsAppNumber: payload.pi_whatsAppNumber }),
      ...(payload.pi_emailId !== undefined && { pi_emailId: payload.pi_emailId }),
      ...(payload.pi_addressLane1 !== undefined && { pi_addressLane1: payload.pi_addressLane1 }),
      ...(payload.pi_addressLane2 !== undefined && { pi_addressLane2: payload.pi_addressLane2 }),
      ...(payload.pi_taluk !== undefined && { pi_taluk: payload.pi_taluk }),
      ...(payload.pi_district !== undefined && { pi_district: payload.pi_district }),
      ...(payload.pi_city !== undefined && { pi_city: payload.pi_city }),
      ...(payload.pi_state !== undefined && { pi_state: payload.pi_state }),
      ...(payload.pi_pincode !== undefined && { pi_pincode: payload.pi_pincode }),
      ...(payload.pi_landmark !== undefined && { pi_landmark: payload.pi_landmark }),
      ...(payload.pi_anniversaryDate !== undefined && { pi_anniversaryDate: payload.pi_anniversaryDate }),
      ...(payload.ref_nameOfTheperson !== undefined && {
        ref_nameOfTheperson: salesOfficerName,
      }),
      ...(payload.ref_place !== undefined && { ref_place: payload.ref_place }),
      ...(payload.reporting_manager_name !== undefined && {
        reporting_manager_name: reportingManagerName,
      }),
      ...(payload.sod_nameOfTheDealer !== undefined && { sod_nameOfTheDealer: payload.sod_nameOfTheDealer }),
      ...(payload.sod_place !== undefined && { sod_place: payload.sod_place }),
      ...(payload.shop_location !== undefined && { shop_location: payload.shop_location }),
      ...(payload.shop_Address1 !== undefined && { shop_Address1: payload.shop_Address1 }),
      ...(payload.shop_Address2 !== undefined && { shop_Address2: payload.shop_Address2 }),
      ...(payload.shop_District !== undefined && { shop_District: payload.shop_District }),
      ...(payload.shop_Taluk !== undefined && { shop_Taluk: payload.shop_Taluk }),
      ...(payload.shop_City !== undefined && { shop_City: payload.shop_City }),
      ...(payload.shop_Pincode !== undefined && { shop_Pincode: payload.shop_Pincode }),
      ...(payload.shop_Landmark !== undefined && { shop_Landmark: payload.shop_Landmark }),
      ...(payload.enteredBy !== undefined && { enteredBy: payload.enteredBy }),
      ...(payload.enteredDate !== undefined && { enteredDate: new Date(payload.enteredDate) }),
      ...(payload.enteredBy !== undefined && payload.enteredDate === undefined && { enteredDate: new Date() }),
      ...(payload.isContacted !== undefined && { isContacted: payload.isContacted }),
      ...(payload.isApproved !== undefined && { isApproved: payload.isApproved }),
      ...(payload.isDeleted !== undefined && { isDeleted: payload.isDeleted }),
      ...(payload.isActive !== undefined && { isActive: payload.isActive }),
      ...(payload.isPending !== undefined && { isPending: payload.isPending }),
      ...(payload.isRejected !== undefined && { isRejected: payload.isRejected }),
      ...(payload.photoProofPath === null && { photoProofPath: null }),
      ...(payload.idProofPath === null && { idProofPath: null }),
      ...(payload.idProofBackPath === null && { idProofBackPath: null }),
      ...(payload.panProofPath === null && { panProofPath: null }),
      ...(payload.dealershipName !== undefined && { dealershipName: payload.dealershipName }),
      ...(payload.contactPerson !== undefined && { contactPerson: payload.contactPerson }),
      ...(payload.gstNumber !== undefined && { gstNumber: payload.gstNumber }),
      ...(payload.panNumber !== undefined && { panNumber: payload.panNumber }),
      ...(payload.ownerSameAsAbove !== undefined && { ownerSameAsAbove: payload.ownerSameAsAbove }),
      ...(payload.ownerTitle !== undefined && { ownerTitle: payload.ownerTitle }),
      ...(payload.ownerFirstName !== undefined && { ownerFirstName: payload.ownerFirstName }),
      ...(payload.ownerLastName !== undefined && { ownerLastName: payload.ownerLastName }),
      ...(payload.ownerOfficeAddressLine1 !== undefined && { ownerOfficeAddressLine1: payload.ownerOfficeAddressLine1 }),
      ...(payload.ownerOfficeAddressLine2 !== undefined && { ownerOfficeAddressLine2: payload.ownerOfficeAddressLine2 }),
      ...(payload.ownerCity !== undefined && { ownerCity: payload.ownerCity }),
      ...(payload.ownerState !== undefined && { ownerState: payload.ownerState }),
      ...(payload.ownerPostalCode !== undefined && { ownerPostalCode: payload.ownerPostalCode }),
      ...(payload.ownerPlace !== undefined && { ownerPlace: payload.ownerPlace }),
      ...(payload.ownerPhoneNumber !== undefined && { ownerPhoneNumber: payload.ownerPhoneNumber }),
      ...(payload.ownerEmailId !== undefined && { ownerEmailId: payload.ownerEmailId }),
      ...(payload.secondContactTitle !== undefined && { secondContactTitle: payload.secondContactTitle }),
      ...(payload.secondContactFirstName !== undefined && { secondContactFirstName: payload.secondContactFirstName }),
      ...(payload.secondContactLastName !== undefined && { secondContactLastName: payload.secondContactLastName }),
      ...(payload.secondContactPhone !== undefined && { secondContactPhone: payload.secondContactPhone }),
      ...(payload.secondContactEmail !== undefined && { secondContactEmail: payload.secondContactEmail }),
      ...(payload.spouseName !== undefined && { spouseName: payload.spouseName }),
      ...(payload.spouseDob !== undefined && { spouseDob: payload.spouseDob }),
      ...(payload.weddingDay !== undefined && { weddingDay: payload.weddingDay }),
      ...(payload.childName1 !== undefined && { childName1: payload.childName1 }),
      ...(payload.childDob1 !== undefined && { childDob1: payload.childDob1 }),
      ...(payload.childName2 !== undefined && { childName2: payload.childName2 }),
      ...(payload.childDob2 !== undefined && { childDob2: payload.childDob2 }),
      ...(payload.childName3 !== undefined && { childName3: payload.childName3 }),
      ...(payload.childDob3 !== undefined && { childDob3: payload.childDob3 }),
      ...(payload.godownSameAsCompany !== undefined && { godownSameAsCompany: payload.godownSameAsCompany }),
      ...(payload.godownAddressLine1 !== undefined && { godownAddressLine1: payload.godownAddressLine1 }),
      ...(payload.godownAddressLine2 !== undefined && { godownAddressLine2: payload.godownAddressLine2 }),
      ...(payload.godownCity !== undefined && { godownCity: payload.godownCity }),
      ...(payload.godownState !== undefined && { godownState: payload.godownState }),
      ...(payload.godownPostalCode !== undefined && { godownPostalCode: payload.godownPostalCode }),
      ...(payload.godownContactPerson !== undefined && { godownContactPerson: payload.godownContactPerson }),
      ...(payload.godownContactMobile !== undefined && { godownContactMobile: payload.godownContactMobile }),
      ...(payload.referenceName1 !== undefined && { referenceName1: payload.referenceName1 }),
      ...(payload.referencePhone1 !== undefined && { referencePhone1: payload.referencePhone1 }),
      ...(payload.referenceDetails1 !== undefined && { referenceDetails1: payload.referenceDetails1 }),
      ...(payload.referenceName2 !== undefined && { referenceName2: payload.referenceName2 }),
      ...(payload.referencePhone2 !== undefined && { referencePhone2: payload.referencePhone2 }),
      ...(payload.referenceDetails2 !== undefined && { referenceDetails2: payload.referenceDetails2 }),
    };

    const res = await this.prisma.formSubmission.updateMany({
      where: { id: { in: targetIds } },
      data,
    });
    return { updatedCount: res.count };
  }

  async update(
    id: string,
    dto: UpdateSubmissionDto,
    files?: {
      photoProof?: Express.Multer.File[];
      idProof?: Express.Multer.File[];
      idProofBack?: Express.Multer.File[];
      panProof?: Express.Multer.File[];
    },
  ) {
    await this.prisma.formSubmission.findUniqueOrThrow({ where: { id } });

    let photoProofPath: string | undefined;
    let idProofPath: string | undefined;
    let idProofBackPath: string | undefined;
    let panProofPath: string | undefined;

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
    if (files?.panProof?.[0]) {
      const f = files.panProof[0];
      const key = `form-submissions/${id}/panProof-${Date.now()}-${f.originalname}`;
      panProofPath = await this.s3.upload(key, f.buffer, f.mimetype);
    }

    const salesOfficerName =
      dto.ref_nameOfTheperson !== undefined
        ? await findOrCreateSalesOfficerName(this.prisma, dto.ref_nameOfTheperson)
        : undefined;
    const reportingManagerName =
      dto.reporting_manager_name !== undefined
        ? await findOrCreateReportingManagerName(
            this.prisma,
            dto.reporting_manager_name,
          )
        : undefined;

    const data: Prisma.FormSubmissionUpdateInput = {
      ...(dto.pi_firstName !== undefined && { pi_firstName: dto.pi_firstName }),
      ...(dto.title !== undefined && { title: dto.title }),
      ...(dto.age !== undefined && { age: dto.age }),
      ...(dto.sameAsAbove !== undefined && { sameAsAbove: dto.sameAsAbove }),
      ...(dto.remarks !== undefined && { remarks: dto.remarks }),
      ...(dto.validationCode !== undefined && { validationCode: dto.validationCode }),
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
      ...(dto.ref_nameOfTheperson !== undefined && {
        ref_nameOfTheperson: salesOfficerName,
      }),
      ...(dto.ref_place !== undefined && { ref_place: dto.ref_place }),
      ...(dto.reporting_manager_name !== undefined && {
        reporting_manager_name: reportingManagerName,
      }),
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
      ...(panProofPath !== undefined && { panProofPath }),
      ...(dto.photoProofPath === null && { photoProofPath: null }),
      ...(dto.idProofPath === null && { idProofPath: null }),
      ...(dto.idProofBackPath === null && { idProofBackPath: null }),
      ...(dto.panProofPath === null && { panProofPath: null }),
      ...(dto.dealershipName !== undefined && { dealershipName: dto.dealershipName }),
      ...(dto.contactPerson !== undefined && { contactPerson: dto.contactPerson }),
      ...(dto.gstNumber !== undefined && { gstNumber: dto.gstNumber }),
      ...(dto.panNumber !== undefined && { panNumber: dto.panNumber }),
      ...(dto.ownerSameAsAbove !== undefined && { ownerSameAsAbove: dto.ownerSameAsAbove }),
      ...(dto.ownerTitle !== undefined && { ownerTitle: dto.ownerTitle }),
      ...(dto.ownerFirstName !== undefined && { ownerFirstName: dto.ownerFirstName }),
      ...(dto.ownerLastName !== undefined && { ownerLastName: dto.ownerLastName }),
      ...(dto.ownerOfficeAddressLine1 !== undefined && { ownerOfficeAddressLine1: dto.ownerOfficeAddressLine1 }),
      ...(dto.ownerOfficeAddressLine2 !== undefined && { ownerOfficeAddressLine2: dto.ownerOfficeAddressLine2 }),
      ...(dto.ownerCity !== undefined && { ownerCity: dto.ownerCity }),
      ...(dto.ownerState !== undefined && { ownerState: dto.ownerState }),
      ...(dto.ownerPostalCode !== undefined && { ownerPostalCode: dto.ownerPostalCode }),
      ...(dto.ownerPlace !== undefined && { ownerPlace: dto.ownerPlace }),
      ...(dto.ownerPhoneNumber !== undefined && { ownerPhoneNumber: dto.ownerPhoneNumber }),
      ...(dto.ownerEmailId !== undefined && { ownerEmailId: dto.ownerEmailId }),
      ...(dto.secondContactTitle !== undefined && { secondContactTitle: dto.secondContactTitle }),
      ...(dto.secondContactFirstName !== undefined && { secondContactFirstName: dto.secondContactFirstName }),
      ...(dto.secondContactLastName !== undefined && { secondContactLastName: dto.secondContactLastName }),
      ...(dto.secondContactPhone !== undefined && { secondContactPhone: dto.secondContactPhone }),
      ...(dto.secondContactEmail !== undefined && { secondContactEmail: dto.secondContactEmail }),
      ...(dto.spouseName !== undefined && { spouseName: dto.spouseName }),
      ...(dto.spouseDob !== undefined && { spouseDob: dto.spouseDob }),
      ...(dto.weddingDay !== undefined && { weddingDay: dto.weddingDay }),
      ...(dto.childName1 !== undefined && { childName1: dto.childName1 }),
      ...(dto.childDob1 !== undefined && { childDob1: dto.childDob1 }),
      ...(dto.childName2 !== undefined && { childName2: dto.childName2 }),
      ...(dto.childDob2 !== undefined && { childDob2: dto.childDob2 }),
      ...(dto.childName3 !== undefined && { childName3: dto.childName3 }),
      ...(dto.childDob3 !== undefined && { childDob3: dto.childDob3 }),
      ...(dto.godownSameAsCompany !== undefined && { godownSameAsCompany: dto.godownSameAsCompany }),
      ...(dto.godownAddressLine1 !== undefined && { godownAddressLine1: dto.godownAddressLine1 }),
      ...(dto.godownAddressLine2 !== undefined && { godownAddressLine2: dto.godownAddressLine2 }),
      ...(dto.godownCity !== undefined && { godownCity: dto.godownCity }),
      ...(dto.godownState !== undefined && { godownState: dto.godownState }),
      ...(dto.godownPostalCode !== undefined && { godownPostalCode: dto.godownPostalCode }),
      ...(dto.godownContactPerson !== undefined && { godownContactPerson: dto.godownContactPerson }),
      ...(dto.godownContactMobile !== undefined && { godownContactMobile: dto.godownContactMobile }),
      ...(dto.referenceName1 !== undefined && { referenceName1: dto.referenceName1 }),
      ...(dto.referencePhone1 !== undefined && { referencePhone1: dto.referencePhone1 }),
      ...(dto.referenceDetails1 !== undefined && { referenceDetails1: dto.referenceDetails1 }),
      ...(dto.referenceName2 !== undefined && { referenceName2: dto.referenceName2 }),
      ...(dto.referencePhone2 !== undefined && { referencePhone2: dto.referencePhone2 }),
      ...(dto.referenceDetails2 !== undefined && { referenceDetails2: dto.referenceDetails2 }),
    };

    const updated = await this.prisma.formSubmission.update({
      where: { id },
      data,
    });
    return this.getById(updated.id, { includeBlobs: false });
  }
}
