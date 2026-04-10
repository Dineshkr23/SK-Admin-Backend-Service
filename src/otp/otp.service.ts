import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHash } from 'crypto';

const XECURIFY_CHALLENGE_URL =
  'https://login.xecurify.com/moas/api/auth/challenge';
const XECURIFY_VALIDATE_URL =
  'https://login.xecurify.com/moas/api/auth/validate';

@Injectable()
export class OtpService {
  private readonly logger = new Logger(OtpService.name);
  private readonly customerKey: string;
  private readonly apiKey: string;

  constructor(private readonly config: ConfigService) {
    this.customerKey = this.config.get<string>('otp.xecurifyCustomerKey') ?? '';
    this.apiKey = this.config.get<string>('otp.xecurifyApiKey') ?? '';
  }

  private buildAuthHeaders(): Record<string, string> {
    const timestamp = Date.now().toString();
    const authorization = createHash('sha512')
      .update(this.customerKey + timestamp + this.apiKey)
      .digest('hex')
      .toLowerCase();

    return {
      'Content-Type': 'application/json',
      'Customer-Key': this.customerKey,
      Timestamp: timestamp,
      Authorization: authorization,
    };
  }

  async sendOtp(
    receiver: string,
  ): Promise<{ success: boolean; txId?: string; message?: string }> {
    const phone = `91${receiver.replace(/\D/g, '').slice(-10)}`;
    const headers = this.buildAuthHeaders();
    const payload = {
      customerKey: this.customerKey,
      phone,
      authType: 'SMS',
      transactionName: 'CUSTOM-OTP-VERIFICATION',
    };

    try {
      const res = await fetch(XECURIFY_CHALLENGE_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => null);

      if (!res.ok || !body) {
        this.logger.error(
          `Xecurify challenge failed: ${res.status} ${JSON.stringify(body)}`,
        );
        return {
          success: false,
          message: 'Unable to send OTP. Please try again.',
        };
      }

      if (body.status === 'SUCCESS' && body.txId) {
        return { success: true, txId: body.txId };
      }

      this.logger.warn(`Xecurify challenge unexpected response: ${JSON.stringify(body)}`);
      return {
        success: false,
        message: body.message || 'Unable to send OTP. Please try again.',
      };
    } catch (e) {
      this.logger.error('Xecurify challenge error', e);
      return {
        success: false,
        message: e instanceof Error ? e.message : 'OTP send failed',
      };
    }
  }

  async validateOtp(
    txId: string,
    token: string,
  ): Promise<{ valid: boolean; message?: string }> {
    const headers = this.buildAuthHeaders();
    const payload = { txId, token };

    try {
      const res = await fetch(XECURIFY_VALIDATE_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => null);

      if (!res.ok || !body) {
        this.logger.error(
          `Xecurify validate failed: ${res.status} ${JSON.stringify(body)}`,
        );
        return { valid: false, message: 'OTP validation failed.' };
      }

      if (body.status === 'SUCCESS') {
        return { valid: true };
      }

      return {
        valid: false,
        message: body.message || 'Invalid OTP. Please try again.',
      };
    } catch (e) {
      this.logger.error('Xecurify validate error', e);
      return {
        valid: false,
        message: e instanceof Error ? e.message : 'OTP validation failed',
      };
    }
  }
}
