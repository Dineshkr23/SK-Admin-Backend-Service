import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { OtpService } from './otp.service';
import { SendOtpDto, ValidateOtpDto } from './dto/otp.dto';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Public()
  @Post('send')
  async send(@Body() dto: SendOtpDto) {
    return this.otpService.sendOtp(dto.receiver);
  }

  @Public()
  @Post('validate')
  async validate(@Body() dto: ValidateOtpDto) {
    return this.otpService.validateOtp(dto.txId, dto.token);
  }
}
