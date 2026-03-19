import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Query,
  UseInterceptors,
  UploadedFiles,
  Res,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import { AdminService } from './admin.service';
import { ListSubmissionsQueryDto } from './dto/list-submissions.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { BulkUpdateSubmissionsDto } from './dto/bulk-update-submissions.dto';

@Controller('admin/submissions')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async list(@Query() query: ListSubmissionsQueryDto) {
    return this.adminService.list(query);
  }

  @Post('export')
  async exportToExcel(
    @Body() dto: ListSubmissionsQueryDto,
    @Res() res: Response,
  ) {
    return this.adminService.exportSubmissionsToExcel(dto, res);
  }

  @Get('filter-options')
  async filterOptions(
    @Query('field') field: 'salesOfficer' | 'reportingManager',
  ) {
    return this.adminService.getFilterOptions(field);
  }

  @Get(':id')
  async getById(
    @Param('id') id: string,
    @Query('includeBlobs') includeBlobs?: string,
  ) {
    const include =
      typeof includeBlobs === 'string' &&
      includeBlobs.trim().toLowerCase() === 'true';
    return this.adminService.getById(id, { includeBlobs: include });
  }

  @Patch('bulk')
  async bulkUpdate(@Body() dto: BulkUpdateSubmissionsDto) {
    return this.adminService.bulkUpdate(dto);
  }

  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'photoProof', maxCount: 1 },
        { name: 'idProof', maxCount: 1 },
        { name: 'idProofBack', maxCount: 1 },
        { name: 'panProof', maxCount: 1 },
      ],
      { limits: { fileSize: 10 * 1024 * 1024 } },
    ),
  )
  async update(
    @Param('id') id: string,
    @Body()
    body: UpdateSubmissionDto | { data?: string },
    @UploadedFiles()
    files?: {
      photoProof?: Express.Multer.File[];
      idProof?: Express.Multer.File[];
      idProofBack?: Express.Multer.File[];
      panProof?: Express.Multer.File[];
    },
  ) {
    const dto: UpdateSubmissionDto =
      typeof (body as { data?: string }).data === 'string'
        ? JSON.parse((body as { data: string }).data) as UpdateSubmissionDto
        : (body as UpdateSubmissionDto);
    return this.adminService.update(id, dto, files);
  }
}
