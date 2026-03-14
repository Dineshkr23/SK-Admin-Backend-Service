import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

const OTP_PREFIX = 'otp:';
const DIGITS = 6;

@Injectable()
export class OtpService {
  private readonly redis: Redis;
  private readonly ttlSeconds: number;
  private readonly whatsappApiUrl: string;

  constructor(private readonly config: ConfigService) {
    const url = this.config.get<string>('redis.url') ?? 'redis://localhost:6379';
    this.redis = new Redis(url);
    this.ttlSeconds = this.config.get<number>('otp.ttlSeconds') ?? 600;
    this.whatsappApiUrl =
      this.config.get<string>('otp.whatsappApiUrl') ??
      'https://adminapis.backendprod.com/lms_campaign/api/whatsapp/template/g1b95xhmc7/process';
  }

  generateCode(): string {
    let code = '';
    for (let i = 0; i < DIGITS; i++) {
      code += Math.floor(Math.random() * 10).toString();
    }
    return code;
  }

  private key(receiver: string): string {
    return `${OTP_PREFIX}${receiver}`;
  }

  async sendOtp(receiver: string): Promise<{ success: boolean; message?: string }> {
    const code = this.generateCode();
    const k = this.key(receiver);
    await this.redis.setex(k, this.ttlSeconds, code);

    try {
      const res = await fetch(this.whatsappApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          receiver: receiver,
          values: { '1': code },
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        return { success: false, message: `OTP send failed: ${res.status} ${text}` };
      }
      return { success: true };
    } catch (e) {
      return {
        success: false,
        message: e instanceof Error ? e.message : 'OTP send failed',
      };
    }
  }

  async validateOtp(receiver: string, code: string): Promise<boolean> {
    const k = this.key(receiver);
    const stored = await this.redis.get(k);
    if (!stored || stored !== code) return false;
    await this.redis.del(k);
    return true;
  }

  async onModuleDestroy() {
    await this.redis.quit();
  }
}
