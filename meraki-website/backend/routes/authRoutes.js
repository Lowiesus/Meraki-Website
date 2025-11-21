import bcrypt from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret';

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { identity, password } = req.body;
    if (!identity || !password) return res.status(400).json({ message: 'identity and password required' });

    // Try to find by email (lowercased) or username
    const lookup = { $or: [ { user_email_address: identity.toLowerCase() }, { user_username: identity } ] };
    const user = await User.findOne(lookup);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.user_password);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, id: user._id, user_id: user.user_id, user_username: user.user_username, user_profile_picture: user.user_profile_picture });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
