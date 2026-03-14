import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
} from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  private readonly client: S3Client;
  private readonly bucket: string;
  private readonly publicBaseUrl: string;

  constructor(private readonly config: ConfigService) {
    const endpoint = this.config.get<string>('s3.endpoint');
    const region = this.config.get<string>('s3.region') ?? 'us-east-1';
    this.bucket = this.config.get<string>('s3.bucket') ?? 'sksupertmt-uploads';
    const accessKeyId = this.config.get<string>('s3.accessKeyId');
    const secretAccessKey = this.config.get<string>('s3.secretAccessKey');

    this.client = new S3Client({
      region,
      ...(endpoint && {
        endpoint,
        forcePathStyle: true,
      }),
      ...(accessKeyId &&
        secretAccessKey && {
          credentials: {
            accessKeyId,
            secretAccessKey,
          },
        }),
    });

    const publicUrl = this.config.get<string>('s3.publicUrl');
    if (publicUrl) {
      this.publicBaseUrl = publicUrl.replace(/\/$/, '');
    } else if (endpoint) {
      const base = endpoint.replace(/\/$/, '');
      this.publicBaseUrl = `${base}/${this.bucket}`;
    } else {
      this.publicBaseUrl = `https://${this.bucket}.s3.${region}.amazonaws.com`;
    }
  }

  async upload(
    key: string,
    body: Buffer | Uint8Array,
    contentType?: string,
  ): Promise<string> {
    const input: PutObjectCommandInput = {
      Bucket: this.bucket,
      Key: key,
      Body: body,
      ContentType: contentType ?? 'application/octet-stream',
    };
    await this.client.send(new PutObjectCommand(input));
    return `${this.publicBaseUrl}/${key}`;
  }
}
