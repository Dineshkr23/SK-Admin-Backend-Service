import { Module } from '@nestjs/common';
import { FormSubmissionsController } from './form-submissions.controller';
import { FormSubmissionsService } from './form-submissions.service';

@Module({
  controllers: [FormSubmissionsController],
  providers: [FormSubmissionsService],
  exports: [FormSubmissionsService],
})
export class FormSubmissionsModule {}
