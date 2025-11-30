import express from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public feed
router.get("/", getPosts);

// Create post (authenticated)
router.post("/", protectRoute, createPost);

export default router;
