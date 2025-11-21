import bcrypt from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret';

function authMiddleware(req, res, next){
  const auth = req.headers.authorization || req.headers.Authorization;
  if (!auth) return res.status(401).json({ message: 'Missing authorization header' });
  const parts = auth.split(' ');
  const token = parts.length === 2 ? parts[1] : null;
  if (!token) return res.status(401).json({ message: 'Invalid authorization format' });
  try{
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  }catch(err){
    return res.status(401).json({ message: 'Invalid token', error: err.message });
  }
}

// GET /api/users/test-db - connectivity check
router.get('/test-db', async (req, res) => {
  try {
    const state = User.db.readyState;
    let ping = null;
    if (state === 1 && User.db && User.db.admin) {
      ping = await User.db.admin().ping();
    }
    res.json({ connected: state === 1, state, ping });
  } catch (err) {
    console.error(err);
    res.status(500).json({ connected: false, error: err.message });
  }
});

// GET /api/users - list users (omit passwords)
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-user_password');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// GET /api/users/:id - get user by id (omit password)
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-user_password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST /api/users - signup: hash password, create user, return JWT + profile
router.post('/', async (req, res) => {
  try {
    const { user_username, user_email_address, user_password, user_role, user_bios, user_social_links, user_profile_picture, user_roles, user_tags } = req.body;
    if (!user_username || !user_email_address || !user_password) {
      return res.status(400).json({ message: 'username, email and password are required' });
    }

    const existing = await User.findOne({ user_email_address });
    if (existing) return res.status(409).json({ message: 'Email already registered' });

    const hashed = await bcrypt.hash(user_password, 10);
    const newUser = new User({ user_username, user_email_address, user_password: hashed, user_role, user_bios, user_social_links, user_profile_picture, user_roles, user_tags });
    const saved = await newUser.save();

    const token = jwt.sign({ id: saved._id }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      token,
      id: saved._id,
      user_id: saved.user_id,
      user_username: saved.user_username,
      user_email_address: saved.user_email_address,
      user_bios: saved.user_bios || '',
      user_roles: saved.user_roles || [],
      user_tags: saved.user_tags || [],
      user_profile_picture: saved.user_profile_picture || ''
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// PUT /api/users/:id - update user (authenticated)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updates = { ...req.body };
    if (!req.userId || req.userId.toString() !== req.params.id.toString()) return res.status(403).json({ message: 'Forbidden' });

    if (updates.user_password) updates.user_password = await bcrypt.hash(updates.user_password, 10);

    const updated = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-user_password');
    if (!updated) return res.status(404).json({ message: 'User not found' });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// DELETE /api/users/:id - delete user
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;