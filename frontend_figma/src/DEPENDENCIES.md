# Dependencies Documentation

## Required Dependencies

This project uses the following dependencies that are automatically handled by Figma Make:

### Core Dependencies
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "typescript": "^5.x"
}
```

### Styling
- **Tailwind CSS v4.0** - Utility-first CSS framework (automatically configured)
- Custom fonts via Google Fonts:
  - Work Sans (Regular, Medium, SemiBold, Bold)
  - Comfortaa (Bold)
  - Raleway (Regular)

## Future Backend Integration Dependencies

When integrating with the backend, you may need:

### API & Data Fetching
```bash
npm install @tanstack/react-query axios
npm install @tanstack/react-query-devtools --save-dev
```

### Form Validation
```bash
npm install react-hook-form@7.55.0 zod @hookform/resolvers
```

### State Management (Optional)
```bash
npm install zustand
# or
npm install @reduxjs/toolkit react-redux
```

### Notifications
```bash
npm install sonner@2.0.3
```

### Date Handling (if needed)
```bash
npm install date-fns
```

### File Upload Progress (optional)
```bash
npm install react-dropzone
```

## Development Tools

### Recommended Dev Dependencies
```bash
npm install --save-dev @types/react @types/react-dom @types/react-router-dom
npm install --save-dev eslint prettier
```

## Environment Variables

Create a `.env.local` file for configuration:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_API_TIMEOUT=10000

# OAuth Configuration (when implementing social auth)
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_FACEBOOK_APP_ID=your_facebook_app_id

# File Upload
VITE_MAX_FILE_SIZE=5242880
VITE_ALLOWED_FILE_TYPES=image/jpeg,image/png,image/webp

# Feature Flags
VITE_ENABLE_SOCIAL_AUTH=true
VITE_ENABLE_REMEMBER_ME=true
```

## Backend Package Recommendations

For the Node.js/Express backend:

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "multer": "^1.4.5-lts.1",
    "express-validator": "^7.0.1",
    "helmet": "^7.1.0",
    "express-rate-limit": "^7.1.5",
    "cookie-parser": "^1.4.6",
    "nodemailer": "^6.9.7"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.10.0",
    "nodemon": "^3.0.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}
```

## MongoDB Schema Example

```typescript
// User Schema for MongoDB
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, unique: true },
  role: { type: String, enum: ['artist', 'client'] },
  bio: String,
  tags: [String],
  profileImage: String,
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const User = mongoose.model('User', userSchema);
```

## API Routes Structure

```typescript
// Recommended Express routes structure

// routes/auth.routes.ts
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh-token
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
POST   /api/auth/verify-email

// routes/user.routes.ts
GET    /api/users/profile
PUT    /api/users/profile
POST   /api/users/account-setup
PUT    /api/users/profile-image
DELETE /api/users/account

// routes/oauth.routes.ts
POST   /api/oauth/google
POST   /api/oauth/facebook
POST   /api/oauth/phone
```

## Notes

- All imports in this project use ES modules syntax
- React Router v6 is used for routing
- TypeScript is fully configured
- Tailwind CSS v4.0 uses the new `@theme` directive
- No build configuration needed - managed by Figma Make

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Android (latest)
