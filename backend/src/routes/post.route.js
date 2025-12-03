import express from "express";
import { addComment, createPost, getComments, getPosts, toggleLike } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public feed
router.get("/", getPosts);

// Comments for a post
router.get("/:id/comments", getComments);
router.post("/:id/comments", protectRoute, addComment);

// Like/unlike a post
router.post("/:id/like", protectRoute, toggleLike);

// Create post (authenticated)
router.post("/", protectRoute, createPost);

export default router;
