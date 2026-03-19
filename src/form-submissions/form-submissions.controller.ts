import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Public } from '../auth/decorators/public.decorator';
import { FormSubmissionsService } from './form-submissions.service';
import { CreateFormSubmissionDto } from './dto/create-form-submission.dto';

@Controller('form-submissions')
export class FormSubmissionsController {
  constructor(private readonly service: FormSubmissionsService) {}

  @Public()
  @Post()
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
  async create(
    @Body() body: CreateFormSubmissionDto & { data?: string },
    @UploadedFiles()
    files?: {
      photoProof?: Express.Multer.File[];
      idProof?: Express.Multer.File[];
      idProofBack?: Express.Multer.File[];
      panProof?: Express.Multer.File[];
    },
  ) {
    const dto: CreateFormSubmissionDto =
      typeof body?.data === 'string' ? JSON.parse(body.data) : body;
    const result = await this.service.create(dto, {
      photoProof: files?.photoProof,
      idProof: files?.idProof,
      idProofBack: files?.idProofBack,
      panProof: files?.panProof,
    });
    return { id: result.id, skPassportNo: result.skPassportNo };
  }
}
