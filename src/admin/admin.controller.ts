import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AdminService } from './admin.service';
import { ListSubmissionsQueryDto } from './dto/list-submissions.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';

@Controller('admin/submissions')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async list(@Query() query: ListSubmissionsQueryDto) {
    return this.adminService.list(query);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.adminService.getById(id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'photoProof', maxCount: 1 },
        { name: 'idProof', maxCount: 1 },
        { name: 'idProofBack', maxCount: 1 },
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
    },
  ) {
    const dto: UpdateSubmissionDto =
      typeof (body as { data?: string }).data === 'string'
        ? JSON.parse((body as { data: string }).data) as UpdateSubmissionDto
        : (body as UpdateSubmissionDto);
    return this.adminService.update(id, dto, files);
  }
}
