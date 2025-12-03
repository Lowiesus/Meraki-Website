import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import * as orderDetail from "../controllers/orderDetail.controller.js";

const router = express.Router();

router.use(protectRoute);

router.get("/:orderId", orderDetail.getAllOrderDetailsByOrderId);
router.post("/", orderDetail.addOrderDetail);
router.patch("/:id", orderDetail.updateOrderDetail);
router.delete("/:id", orderDetail.deleteOrderDetail);

export default router;
