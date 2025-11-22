import express from 'express';
import Post from '../models/postModel.js';

const router = express.Router();

// GET /api/posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ created_at: -1 });
    res.json(posts);
  } catch (err) {
    console.error('GET /api/posts error', err);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
});

// POST /api/posts (simple JSON handler for testing)
router.post('/', async (req, res) => {
  try {
    const payload = req.body;
    const post = new Post({
      post_title: payload.post_title || 'Untitled',
      post_content: payload.post_content || '',
      post_category: payload.post_category || 'Post',
      post_tags: payload.post_tags || [],
      post_price: payload.post_price || 0,
      post_images: payload.post_images || [],
      post_deposit_required: !!payload.post_deposit_required
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error('POST /api/posts error', err);
    res.status(500).json({ message: 'Failed to create post' });
  }
});

export default router;