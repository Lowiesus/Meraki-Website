# Meraki - Digital Commissioning Platform (Frontend)

A pixel-perfect, fully responsive frontend for the Meraki digital commissioning platform built with React, TypeScript, and Tailwind CSS.

## 🎨 Design Features

- **Exact Color Palette:**
  - Sky Blue: `#60A5FA` / `#428DFE`
  - White: `#FFFFFF`
  - Dark Gray: `#22242B`, `#2963A3`, `#6C757D`
  - Background Gradients: `#BBE2FF` to `#95D2FF`

- **Responsive Design:** Fully responsive across all devices (mobile, tablet, desktop)
- **Custom Typography:** Work Sans, Comfortaa, and Raleway fonts
- **Soft UI Aesthetic:** Rounded corners, soft shadows, and smooth transitions

## 📁 Project Structure

```
/
├── App.tsx                      # Main app with routing
├── pages/
│   ├── LoginPage.tsx           # Login screen with social auth
│   ├── SignUpPage.tsx          # Registration screen
│   └── AccountSetupPage.tsx    # Onboarding/profile setup
├── imports/
│   ├── AccountSetup.tsx        # Original Figma import (reference)
│   ├── SignUp.tsx              # Original Figma import (reference)
│   ├── LogIn.tsx               # Original Figma import (reference)
│   ├── svg-*.ts                # SVG path definitions
│   └── figma:asset/*           # Images and textures
├── styles/
│   └── globals.css             # Global styles and design tokens
└── README.md                   # This file
```

## 🚀 Features

### 1. Login Page (`/login`)
- Email and password authentication
- Password visibility toggle
- "Remember Me" checkbox
- Social login options (Google, Facebook, Phone)
- "Forgot Password" functionality
- Link to Sign Up page

### 2. Sign Up Page (`/signup`)
- First Name, Last Name fields
- Email validation
- Password and Confirm Password with visibility toggles
- Terms of Service agreement checkbox
- Social registration options
- Link to Login page

### 3. Account Setup Page (`/account-setup`)
- Profile picture upload with preview
- Username input
- Role selection dropdown (Artist/Client)
- User bio textarea
- Tags input for preferences
- Cancel and Confirm buttons

## 🔧 Technical Implementation

### State Management
- React `useState` hooks for form data
- Local state for UI interactions (password visibility, file uploads)
- Ready for integration with state management libraries (Redux, Zustand, etc.)

### Form Handling
- Native form validation
- Controlled components
- Password matching validation
- File upload handling with preview

### Routing
- React Router v6
- Protected routes ready for authentication
- Programmatic navigation

## 🔌 Backend Integration Guide

### Authentication Endpoints (To Be Implemented)

```typescript
// POST /api/auth/login
interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

// POST /api/auth/signup
interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// POST /api/auth/account-setup
interface AccountSetupRequest {
  username: string;
  role: 'artist' | 'client';
  bio: string;
  tags: string;
  profileImage: File;
}

// POST /api/auth/social
interface SocialAuthRequest {
  provider: 'google' | 'facebook' | 'phone';
  token: string;
}
```

### Integration Points

1. **LoginPage.tsx (Line 124-131)**
   ```typescript
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     // TODO: Replace with actual API call
     const response = await fetch('/api/auth/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email, password, rememberMe })
     });
     // Handle response and navigate
   };
   ```

2. **SignUpPage.tsx (Line 182-195)**
   ```typescript
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     // TODO: Replace with actual API call
     const response = await fetch('/api/auth/signup', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     });
     // Handle response and navigate
   };
   ```

3. **AccountSetupPage.tsx (Line 112-118)**
   ```typescript
   const handleConfirm = async (e: React.FormEvent) => {
     e.preventDefault();
     // TODO: Replace with actual API call
     const formData = new FormData();
     formData.append('username', username);
     formData.append('role', role);
     formData.append('bio', bio);
     formData.append('profileImage', profileImage);
     
     const response = await fetch('/api/auth/account-setup', {
       method: 'POST',
       body: formData
     });
     // Handle response
   };
   ```

### Recommended Libraries for Backend Integration

- **API Client:** `axios` or native `fetch`
- **State Management:** `@tanstack/react-query` for server state
- **Form Validation:** `react-hook-form` with `zod` schemas
- **Authentication:** JWT tokens stored in httpOnly cookies
- **File Upload:** `FormData` API for multipart/form-data

## 🎯 Next Steps

1. **Backend API Development:**
   - Set up Express.js/Node.js server
   - MongoDB database schema
   - Authentication middleware
   - File upload handling (multer)
   - JWT token generation

2. **Enhanced Features:**
   - Email verification
   - Password reset flow
   - OAuth integration
   - Form validation with Zod
   - Loading states and error handling
   - Toast notifications

3. **Security:**
   - CSRF protection
   - Rate limiting
   - Input sanitization
   - Secure password hashing (bcrypt)
   - HTTPS only

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (Single column layout)
- **Tablet:** 768px - 1024px (Adjusted spacing)
- **Desktop:** > 1024px (Full dual-pane design)

## 🎨 Design Assets

All design assets are imported from Figma and include:
- Penguin character illustrations
- Background textures
- Logo and branding elements
- Social media icons
- SVG icons and graphics

## 📝 Notes

- This is **Part 1** of the Meraki platform
- The codebase is structured for easy expansion
- All TODO comments indicate backend integration points
- Console logs are included for debugging (remove in production)
- The design is pixel-perfect to the Figma specifications

## 🔒 Security Considerations

**IMPORTANT:** This frontend is designed for development purposes. Before production:

1. Never store sensitive data in localStorage
2. Use httpOnly cookies for tokens
3. Implement proper CORS policies
4. Add rate limiting
5. Validate all inputs server-side
6. Use environment variables for API endpoints

## 📄 License

© 2021 Innovae, Inc. - All rights reserved

---

**Ready for Backend Integration** ✅
