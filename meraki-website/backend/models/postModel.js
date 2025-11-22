import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  post_title: { type: String, required: true, maxlength: 100, trim: true },
  post_content: { type: String, maxlength: 1000, trim: true },
  post_category: { type: String, enum: ['Commission','Selling','Post'], default: 'Post' },
  post_tags: { type: [String], default: [] },
  post_price: { type: Number, default: 0 },
  post_images: { type: [String], default: [] }, // store dataURLs or URLs
  post_deposit_required: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);