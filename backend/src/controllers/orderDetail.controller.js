import OrderDetail from "../models/orderDetail.model.js";
import Order from "../models/order.model.js";
import Post from "../models/post.model.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export async function getAllOrderDetailsByOrderId(req, res) {
  try {
    const orderId = req.params.orderId;

    if (!ObjectId.isValid(orderId)) {
      return res.status(400).json({ message: "Invalid order ID" });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const orderDetails = await OrderDetail.find({ orderId: orderId });
    res.status(200).json(orderDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function addOrderDetail(req, res) {
  try {
    const { orderId, postId, quantity, unitPrice } = req.body;

    if (!orderId || !postId || !quantity || !unitPrice) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!ObjectId.isValid(orderId) || !ObjectId.isValid(postId)) {
      return res.status(400).json({ message: "Invalid order ID or post ID" });
    }

    if (quantity < 1 || unitPrice < 0) {
      return res.status(400).json({
        message:
          "Quantity must be at least 1 and unit price must be non-negative",
      });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const subtotal = quantity * unitPrice;

    await OrderDetail.create({
      orderId,
      postId,
      quantity,
      unitPrice,
      subtotal,
    });

    res.status(201).json({ message: "Order detail added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateOrderDetail(req, res) {
  try {
    const orderDetailId = req.params.id;
    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No updates provided" });
    }

    if (
      (updates.quantity && updates.quantity <= 0) ||
      (updates.unitPrice && updates.unitPrice < 0)
    ) {
      return res.status(400).json({
        message: "positive num only",
      });
    }

    delete updates.orderId;
    delete updates.postId;

    const existingOrderDetail = await OrderDetail.findById(orderDetailId);

    if (!existingOrderDetail) {
      return res.status(404).json({ message: "Order detail not found" });
    }

    const quantity = updates.quantity || existingOrderDetail.quantity;
    const unitPrice = updates.unitPrice || existingOrderDetail.unitPrice;
    updates.subtotal = quantity * unitPrice;

    const updatedOrderDetail = await OrderDetail.findByIdAndUpdate(
      orderDetailId,
      updates,
      { new: true }
    );
    res.status(200).json(updatedOrderDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteOrderDetail(req, res) {
  try {
    const orderDetailId = req.params.id;

    if (!ObjectId.isValid(orderDetailId)) {
      return res.status(400).json({ message: "Invalid order detail ID" });
    }

    const orderDetail = await OrderDetail.findByIdAndDelete(orderDetailId);
    if (!orderDetail) {
      return res.status(404).json({ message: "Order detail not found" });
    }

    res.status(200).json({ message: "Order detail deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
