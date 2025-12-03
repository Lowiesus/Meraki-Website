import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cart.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Get user's cart
router.get("/", protectRoute, getCart);

// Add to cart
router.post("/", protectRoute, addToCart);

// Remove from cart by postId
router.delete("/:postId", protectRoute, removeFromCart);

export default router;
