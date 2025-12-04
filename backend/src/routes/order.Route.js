import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import * as order from "../controllers/order.controller.js";

const router = express.Router();

// All routes are protected (need to be logged in)
router.use(protectRoute);

// Customer routes
router.post("/", order.createOrder);
router.get("/", order.getAllOrders);
router.get("/:orderId", order.getOrderById);
router.patch("/:orderId/customer", order.updateOrderByCustomer);

// Seller routes (author of post)
router.patch("/:orderId/status", order.updateOrderStatus);
router.delete("/:orderId", order.deleteOrder);

export default router;
