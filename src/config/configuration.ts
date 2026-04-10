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
    xecurifyCustomerKey: process.env.XECURIFY_CUSTOMER_KEY ?? '',
    xecurifyApiKey: process.env.XECURIFY_API_KEY ?? '',
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
