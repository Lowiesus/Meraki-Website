import cloudinary from "../lib/cloudinary.js";
import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

// Create a new post. Expects { caption, images: [base64Image,...] }
export const createPost = async (req, res) => {
  try {
    const authorId = req.user._id || req.user.id;
    const { caption, images, listing } = req.body || {};

    // Server-side upload size limit (in bytes). Match frontend: 200 KB
    const MAX_BYTES = 200 * 1024;

    const mediaUrls = [];
    if (Array.isArray(images) && images.length) {
      for (const img of images) {
        // img should be a base64 data URI (data:image/..;base64,AAAA...)
        if (typeof img !== "string" || !img.includes(",")) {
          return res.status(400).json({ message: "Invalid image data format" });
        }

        const base64Part = img.split(",")[1];
        if (!base64Part) {
          return res.status(400).json({ message: "Invalid base64 image" });
        }

        // Calculate decoded byte length
        const bufferSize = Buffer.byteLength(base64Part, "base64");
        if (bufferSize > MAX_BYTES) {
          return res.status(413).json({ message: `Image exceeds maximum allowed size of ${Math.round(MAX_BYTES/1024)} KB` });
        }

        try {
          const uploadResponse = await cloudinary.uploader.upload(img);
          if (uploadResponse && uploadResponse.secure_url) {
            mediaUrls.push(uploadResponse.secure_url);
          }
        } catch (uploadErr) {
          console.error("Cloudinary upload failed:", uploadErr?.message || uploadErr);
          return res.status(502).json({ message: "Failed to upload media to storage service" });
        }
      }
    }

    // Determine if this post is a listing
    let kind = "post";
    let listingData = undefined;
    if (listing && (listing.name || listing.price || listing.type || listing.description)) {
      kind = "listing";
      listingData = {
        name: listing.name || "",
        type: listing.type || "",
        price: typeof listing.price === "number" ? listing.price : (listing.price ? Number(listing.price) : undefined),
        description: listing.description || "",
        tags: Array.isArray(listing.tags) ? listing.tags.map(String) : [],
      };
    }

    const newPost = new Post({
      author: authorId,
      caption: caption || "",
      media: mediaUrls,
      kind,
      listing: listingData,
    });

    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error in createPost:", error?.message || error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Simple feed: return recent posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("author", "fullName username profilePic");

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error in getPosts:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get comments for a given post
export const getComments = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const comments = await Comment.find({ post: postId })
      .sort({ createdAt: -1 })
      .populate("author", "fullName username profilePic");

    return res.status(200).json(comments);
  } catch (error) {
    console.error("Error in getComments:", error.message || error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Add a comment to a post (requires authenticated user)
export const addComment = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const userId = req.user && (req.user._id || req.user.id);
    const { text } = req.body;

    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    if (!text || typeof text !== "string" || !text.trim()) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const comment = new Comment({ post: postId, author: userId, text: text.trim() });
    await comment.save();

    const populated = await comment.populate("author", "fullName username profilePic");

    return res.status(201).json(populated);
  } catch (error) {
    console.error("Error in addComment:", error.message || error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Toggle like for a post by authenticated user
export const toggleLike = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const userId = req.user && (req.user._id || req.user.id);
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const idx = post.likes.findIndex((u) => String(u) === String(userId));
    if (idx >= 0) {
      // already liked -> remove
      post.likes.splice(idx, 1);
    } else {
      post.likes.push(userId);
    }

    await post.save();

    return res.status(200).json({ likes: post.likes, likesCount: post.likes.length });
  } catch (err) {
    console.error("Error in toggleLike:", err.message || err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
