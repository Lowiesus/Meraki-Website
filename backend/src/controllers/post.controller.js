import cloudinary from "../lib/cloudinary.js";
import Post from "../models/post.model.js";

// Create a new post. Expects { caption, images: [base64Image,...] }
export const createPost = async (req, res) => {
  try {
    const authorId = req.user._id || req.user.id;
    const { caption, images } = req.body;

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

    const newPost = new Post({
      author: authorId,
      caption: caption || "",
      media: mediaUrls,
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
