# Backend Integration Guide

This guide will help you integrate the Meraki frontend with your MERN stack backend.

## 🚀 Quick Start

### Step 1: Set Up Your Backend

Create a new directory for your backend:

```bash
mkdir meraki-backend
cd meraki-backend
npm init -y
```

Install essential packages:

```bash
npm install express mongoose bcryptjs jsonwebtoken cors dotenv multer
npm install --save-dev nodemon typescript @types/node @types/express
```

### Step 2: Create Your Express Server

Create `server.ts`:

```typescript
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meraki')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

### Step 3: Create MongoDB Models

Create `models/User.model.ts`:

```typescript
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username?: string;
  role?: 'artist' | 'client';
  bio?: string;
  tags?: string[];
  profileImage?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
    trim: true 
  },
  password: { type: String, required: true, minlength: 6 },
  username: { type: String, unique: true, sparse: true, trim: true },
  role: { type: String, enum: ['artist', 'client'] },
  bio: { type: String, maxlength: 500 },
  tags: [{ type: String, trim: true }],
  profileImage: { type: String },
  isVerified: { type: Boolean, default: false }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser>('User', userSchema);
```

### Step 4: Create Authentication Routes

Create `routes/auth.routes.ts`:

```typescript
import express from 'express';
import { register, login, accountSetup } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth.middleware';
import { upload } from '../middleware/upload.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/account-setup', authenticate, upload.single('profileImage'), accountSetup);

export default router;
```

### Step 5: Create Authentication Controller

Create `controllers/auth.controller.ts`:

```typescript
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.model';

// Register
export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create user
    const user = new User({
      firstName,
      lastName,
      email,
      password
    });

    await user.save();

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, rememberMe } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const tokenExpiry = rememberMe ? '30d' : '7d';
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: tokenExpiry }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        role: user.role,
        profileImage: user.profileImage
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Account Setup
export const accountSetup = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId; // From auth middleware
    const { username, role, bio, tags } = req.body;
    const profileImage = req.file?.path;

    // Check if username is taken
    if (username) {
      const existingUsername = await User.findOne({ username, _id: { $ne: userId } });
      if (existingUsername) {
        return res.status(400).json({ message: 'Username already taken' });
      }
    }

    // Update user
    const user = await User.findByIdAndUpdate(
      userId,
      {
        username,
        role,
        bio,
        tags: tags ? tags.split(',').map((tag: string) => tag.trim()) : [],
        profileImage
      },
      { new: true }
    ).select('-password');

    res.json({
      message: 'Account setup completed',
      user
    });
  } catch (error) {
    console.error('Account setup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
```

### Step 6: Create Authentication Middleware

Create `middleware/auth.middleware.ts`:

```typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any;
    (req as any).userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
```

### Step 7: Create File Upload Middleware

Create `middleware/upload.middleware.ts`:

```typescript
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profiles/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req: any, file: any, cb: any) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed'));
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});
```

## 🔗 Frontend Integration

### Update the Frontend API Calls

Create `src/services/api.ts`:

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Register
  register: async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  // Login
  login: async (data: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  // Account Setup
  accountSetup: async (data: FormData, token: string) => {
    const response = await fetch(`${API_URL}/auth/account-setup`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: data
    });
    return response.json();
  }
};
```

### Update LoginPage.tsx

Replace the handleSubmit function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const result = await api.login({ email, password, rememberMe });
    if (result.token) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      navigate('/account-setup');
    } else {
      alert(result.message || 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('An error occurred during login');
  }
};
```

### Update SignUpPage.tsx

Replace the handleSubmit function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  try {
    const result = await api.register({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password
    });
    if (result.token) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      navigate('/account-setup');
    } else {
      alert(result.message || 'Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    alert('An error occurred during registration');
  }
};
```

### Update AccountSetupPage.tsx

Replace the handleConfirm function:

```typescript
const handleConfirm = async (e: React.FormEvent) => {
  e.preventDefault();
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please login first');
    navigate('/login');
    return;
  }

  try {
    const data = new FormData();
    data.append('username', formData.username);
    data.append('role', formData.role);
    data.append('bio', formData.bio);
    data.append('tags', formData.tags);
    if (formData.profileImage) {
      data.append('profileImage', formData.profileImage);
    }

    const result = await api.accountSetup(data, token);
    if (result.user) {
      localStorage.setItem('user', JSON.stringify(result.user));
      alert('Account setup completed!');
      // Navigate to dashboard or home
      navigate('/dashboard');
    } else {
      alert(result.message || 'Setup failed');
    }
  } catch (error) {
    console.error('Account setup error:', error);
    alert('An error occurred during account setup');
  }
};
```

## 🔒 Security Best Practices

1. **Use Environment Variables:**
   ```env
   # Backend .env
   MONGODB_URI=mongodb://localhost:27017/meraki
   JWT_SECRET=your-super-secret-jwt-key-change-this
   PORT=5000
   NODE_ENV=development
   ```

2. **Add Rate Limiting:**
   ```bash
   npm install express-rate-limit
   ```

3. **Add Helmet for Security Headers:**
   ```bash
   npm install helmet
   ```

4. **Implement HTTPS in Production**

5. **Use HttpOnly Cookies for Tokens (More Secure than localStorage)**

## 🧪 Testing Your Integration

1. Start your backend:
   ```bash
   cd meraki-backend
   npm run dev
   ```

2. Start your frontend (in a new terminal):
   ```bash
   # Your frontend should already be running via Figma Make
   ```

3. Test the flow:
   - Register a new account
   - Login with credentials
   - Complete account setup
   - Verify data in MongoDB

## 📝 Next Features to Add

1. Email verification
2. Password reset flow
3. OAuth (Google/Facebook) integration
4. Profile editing
5. Image optimization
6. Commission creation and management
7. Payment integration
8. Real-time messaging

---

**You're now ready to integrate your backend!** 🎉
