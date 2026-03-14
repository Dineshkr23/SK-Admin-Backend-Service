# Postman Collection – SK Super TMT API

## Import

1. Open Postman.
2. **Import** → **File** → choose `SK-Super-TMT-API.postman_collection.json`.

## Variables

- **baseUrl**: API base URL (default `http://localhost:3000`). Edit in collection variables if your server runs elsewhere.
- **token**: Set automatically after **Auth → Login** (used by Admin requests). You can also set it manually after copying the JWT from the login response.

## Usage

1. Run **Auth → Login** with valid admin credentials (e.g. from seed: `admin@sksupertmt.com` / `Admin@123`). The script on that request saves `access_token` into the `token` variable.
2. Call **Admin** requests; they use `Authorization: Bearer {{token}}`.
3. For **Get Submission by ID** and **Update Submission**, set the path variable **id** to a submission UUID (e.g. from the list response).

## Endpoints

| Folder            | Request              | Method | Auth   |
|-------------------|----------------------|--------|--------|
| Auth              | Login                | POST   | No     |
| Health            | Health Check         | GET    | No     |
| Form Submissions  | Create Form Submission | POST | No     |
| OTP               | Send OTP             | POST   | No     |
| OTP               | Validate OTP         | POST   | No     |
| Admin             | List Submissions     | GET    | Bearer |
| Admin             | Get Submission by ID | GET    | Bearer |
| Admin             | Update Submission    | PATCH  | Bearer |
