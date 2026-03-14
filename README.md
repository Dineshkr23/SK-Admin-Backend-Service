# SK Super TMT Backend

NestJS API with PostgreSQL (Prisma 7), Redis, BullMQ, S3, and JWT auth.

## Setup

1. Copy `.env.example` to `.env` and set `DATABASE_URL`, `REDIS_URL`, `JWT_SECRET`, and optionally storage and OTP. **Storage**: MinIO (S3-compatible) is used by default; set `S3_ENDPOINT` (e.g. `http://localhost:9000`), `S3_ACCESS_KEY`, `S3_SECRET_KEY`, and `S3_BUCKET`. For AWS S3, leave `S3_ENDPOINT` unset and use `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` if needed.
2. Start PostgreSQL and Redis (e.g. `docker-compose up -d postgres redis`).
3. Run migrations: `npx prisma migrate deploy` (or `npm run prisma:migrate` for dev).
4. Seed admin user: `npx prisma db seed` (default admin@sksupertmt.com / Admin@123; set `ADMIN_EMAIL` and `ADMIN_PASSWORD` to override).
5. Start: `npm run start:dev` (dev) or `npm run build && npm run start:prod`.

## Docker

- `docker-compose up -d` — runs app, Postgres, Redis. Set env in `.env`.
- `docker build -t backend .` — build image for deployment.

## API

- `POST /auth/login` — admin login (email, password); returns JWT.
- `GET /health` — health check (public).
- `POST /form-submissions` — submit form (multipart: `data` JSON string + optional files `photoProof`, `idProof`, `idProofBack`); public.
- `POST /otp/send` — body `{ "receiver": "<mobile>" }`; public.
- `POST /otp/validate` — body `{ "receiver": "<mobile>", "code": "123456" }`; public.
- `GET /admin/submissions` — list (query: search, professionTypes, isContacted, isApproved, isDeleted, isActive, isPending, isRejected, page, limit); JWT required.
- `GET /admin/submissions/:id` — get one; JWT required.
- `PATCH /admin/submissions/:id` — update; JWT required.
