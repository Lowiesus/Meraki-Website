import express from "express";
import { createPost, getPosts, getComments, addComment } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public feed
router.get("/", getPosts);

// Comments for a post
router.get("/:id/comments", getComments);
router.post("/:id/comments", protectRoute, addComment);

// Create post (authenticated)
router.post("/", protectRoute, createPost);

export default router;
