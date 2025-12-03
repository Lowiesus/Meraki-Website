# API Reference - Meraki Platform

This document outlines the complete API structure for the Meraki digital commissioning platform.

## Base URL

```
Development: http://localhost:5000/api
Production: https://api.meraki.com/api
```

## Authentication

All authenticated endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

---

## Authentication Endpoints

### Register New User

**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Response (201 Created):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
}
```

**Error Responses:**
- `400 Bad Request` - Email already registered
- `422 Unprocessable Entity` - Validation errors
- `500 Internal Server Error` - Server error

---

### Login

**POST** `/auth/login`

Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "rememberMe": true
}
```

**Response (200 OK):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "username": "johndoe",
    "role": "artist",
    "profileImage": "/uploads/profiles/profile-1234567890.jpg"
  }
}
```

**Error Responses:**
- `401 Unauthorized` - Invalid credentials
- `500 Internal Server Error` - Server error

---

### Account Setup

**POST** `/auth/account-setup`

Complete user profile setup after registration.

**Authentication:** Required

**Content-Type:** `multipart/form-data`

**Request Body (FormData):**
- `username` (string, required) - Unique username
- `role` (string, required) - Either "artist" or "client"
- `bio` (string, optional) - User biography (max 500 chars)
- `tags` (string, optional) - Comma-separated tags
- `profileImage` (file, optional) - Profile picture (max 5MB, jpeg/png/webp)

**Response (200 OK):**
```json
{
  "message": "Account setup completed",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "username": "johndoe",
    "role": "artist",
    "bio": "Digital artist specializing in character design",
    "tags": ["digital art", "character design", "commissions"],
    "profileImage": "/uploads/profiles/profile-1234567890.jpg",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:35:00.000Z"
  }
}
```

**Error Responses:**
- `400 Bad Request` - Username already taken
- `401 Unauthorized` - Invalid or missing token
- `413 Payload Too Large` - File too large
- `415 Unsupported Media Type` - Invalid file type
- `500 Internal Server Error` - Server error

---

### Refresh Token

**POST** `/auth/refresh-token`

Refresh JWT token before expiration.

**Request Body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Logout

**POST** `/auth/logout`

Logout user (invalidate token server-side if using blacklist).

**Authentication:** Required

**Response (200 OK):**
```json
{
  "message": "Logout successful"
}
```

---

### Forgot Password

**POST** `/auth/forgot-password`

Request password reset email.

**Request Body:**
```json
{
  "email": "john.doe@example.com"
}
```

**Response (200 OK):**
```json
{
  "message": "Password reset email sent"
}
```

---

### Reset Password

**POST** `/auth/reset-password`

Reset password using token from email.

**Request Body:**
```json
{
  "token": "reset-token-from-email",
  "newPassword": "newSecurePassword123"
}
```

**Response (200 OK):**
```json
{
  "message": "Password reset successful"
}
```

---

## User Endpoints

### Get User Profile

**GET** `/users/profile`

Get current user's profile.

**Authentication:** Required

**Response (200 OK):**
```json
{
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "username": "johndoe",
    "role": "artist",
    "bio": "Digital artist specializing in character design",
    "tags": ["digital art", "character design", "commissions"],
    "profileImage": "/uploads/profiles/profile-1234567890.jpg",
    "isVerified": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:35:00.000Z"
  }
}
```

---

### Update User Profile

**PUT** `/users/profile`

Update user profile information.

**Authentication:** Required

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "bio": "Updated bio text",
  "tags": ["digital art", "3D modeling"]
}
```

**Response (200 OK):**
```json
{
  "message": "Profile updated successfully",
  "user": {
    // Updated user object
  }
}
```

---

### Update Profile Image

**POST** `/users/profile-image`

Update user's profile picture.

**Authentication:** Required

**Content-Type:** `multipart/form-data`

**Request Body (FormData):**
- `profileImage` (file, required) - New profile picture

**Response (200 OK):**
```json
{
  "message": "Profile image updated successfully",
  "profileImage": "/uploads/profiles/profile-1234567890.jpg"
}
```

---

### Delete Account

**DELETE** `/users/account`

Permanently delete user account.

**Authentication:** Required

**Request Body:**
```json
{
  "password": "currentPassword"
}
```

**Response (200 OK):**
```json
{
  "message": "Account deleted successfully"
}
```

---

## OAuth Endpoints

### Google OAuth

**POST** `/oauth/google`

Authenticate with Google.

**Request Body:**
```json
{
  "token": "google-id-token"
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    // User object
  },
  "isNewUser": false
}
```

---

### Facebook OAuth

**POST** `/oauth/facebook`

Authenticate with Facebook.

**Request Body:**
```json
{
  "accessToken": "facebook-access-token"
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    // User object
  },
  "isNewUser": false
}
```

---

## Error Response Format

All error responses follow this format:

```json
{
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

## Status Codes

- `200 OK` - Successful request
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request data
- `401 Unauthorized` - Authentication required or failed
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `409 Conflict` - Resource conflict (e.g., duplicate email)
- `413 Payload Too Large` - Request body too large
- `415 Unsupported Media Type` - Invalid content type
- `422 Unprocessable Entity` - Validation errors
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

## Rate Limiting

API endpoints are rate-limited to prevent abuse:

- **Authentication endpoints:** 5 requests per 15 minutes per IP
- **General endpoints:** 100 requests per 15 minutes per user

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1640995200
```

## Pagination

List endpoints support pagination:

**Query Parameters:**
- `page` (number, default: 1)
- `limit` (number, default: 10, max: 100)
- `sort` (string, default: "-createdAt")

**Response:**
```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
```

## Filtering & Sorting

**Query Parameters:**
- `filter[field]=value` - Filter by field
- `sort=field` - Sort ascending
- `sort=-field` - Sort descending

**Example:**
```
GET /users?filter[role]=artist&sort=-createdAt&page=1&limit=20
```

## File Upload Limits

- **Profile Images:** Max 5MB
- **Allowed formats:** JPEG, PNG, WebP
- **Recommended dimensions:** 500x500px minimum

## Webhooks (Future Implementation)

Webhooks will be available for:
- New user registration
- Account verification
- Commission status changes
- Payment notifications

---

## Testing

Use the provided Postman collection or cURL examples:

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123"
  }'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123",
    "rememberMe": true
  }'

# Get Profile (with token)
curl -X GET http://localhost:5000/api/users/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

**API Version:** 1.0.0  
**Last Updated:** December 2024  
**Contact:** api@meraki.com
