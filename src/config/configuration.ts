export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  database: {
    url: process.env.DATABASE_URL,
  },
  redis: {
    url: process.env.REDIS_URL ?? 'redis://localhost:6379',
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? 'default-secret-change-me',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  },
  otp: {
    whatsappApiUrl:
      process.env.OTP_WHATSAPP_API_URL ??
      'https://adminapis.backendprod.com/lms_campaign/api/whatsapp/template/g1b95xhmc7/process',
    ttlSeconds: parseInt(process.env.OTP_TTL_SECONDS ?? '600', 10),
  },
  // MinIO (S3-compatible) – use S3_ENDPOINT; for AWS leave S3_ENDPOINT unset
  s3: {
    endpoint: process.env.S3_ENDPOINT, // e.g. http://localhost:9000 or https://minio.example.com
    region: process.env.S3_REGION ?? process.env.AWS_REGION ?? 'us-east-1',
    accessKeyId: process.env.S3_ACCESS_KEY ?? process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_KEY ?? process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.S3_BUCKET ?? 'sksupertmt-uploads',
    publicUrl: process.env.S3_PUBLIC_URL, // optional: public base URL for stored objects (e.g. https://minio.example.com/bucket)
  },
  cors: {
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:3001',
  },
});
