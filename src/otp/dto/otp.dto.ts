import { IsNotEmpty, IsString } from 'class-validator';

export class SendOtpDto {
  @IsString()
  @IsNotEmpty()
  receiver: string;
}

export class ValidateOtpDto {
  @IsString()
  @IsNotEmpty()
  txId: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}
