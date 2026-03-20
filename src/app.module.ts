import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import configuration from './config/configuration';
import { PrismaModule } from './prisma/prisma.module';
import { S3Module } from './s3/s3.module';
import { AuthModule } from './auth/auth.module';
import { FormSubmissionsModule } from './form-submissions/form-submissions.module';
import { OtpModule } from './otp/otp.module';
import { AdminModule } from './admin/admin.module';
import { PriceModule } from './price/price.module';
import { HealthModule } from './health/health.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
    PrismaModule,
    S3Module,
    AuthModule,
    FormSubmissionsModule,
    OtpModule,
    AdminModule,
    PriceModule,
    HealthModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
