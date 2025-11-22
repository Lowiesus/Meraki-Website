import express from 'express';
import Post from '../models/postModel.js';

const router = express.Router();

// POST /api/posts
router.post('/', async (req, res) => {
  try {
    const payload = req.body;
    const post = new Post({
      post_title: payload.post_title,
      post_content: payload.post_content,
      post_category: payload.post_category,
      post_tags: payload.post_tags || [],
      post_price: payload.post_price || 0,
      post_images: payload.post_images || [],
      post_deposit_required: !!payload.post_deposit_required
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error('Create post error:', err);
    res.status(500).json({ message: 'Failed to create post', error: err.message });
  }
});

export default router;