import Order from "../models/order.model.js";
import OrderDetail from "../models/orderDetail.model.js";
import Post from "../models/post.model.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

export async function createOrder(req, res) {
  try {
    const customerId = req.user._id;
    const { items, paymentMethod, shippingAddress } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "At least one item is required" });
    }

    if (!paymentMethod || !shippingAddress) {
      return res.status(400).json({ message: "Missing fields are required" });
    }

    const postCollections = await Post.find({
      _id: { $in: items.map((item) => item.postId) },
    });

    let calculatedTotal = 0;
    const orderDetails = [];

    for (const item of items) {
      if (!item.postId || !item.quantity || item.quantity <= 0) {
        return res.status(400).json({
          message: "Must include postId and quantity with valid values",
        });
      }

      const post = await postCollections.find(
        (p) => p._id.toString() === item.postId
      );

      if (!post) {
        return res
          .status(404)
          .json({ message: `Post with ID ${item.postId} not found` });
      }

      const unitPrice = post.price;
      const subtotal = unitPrice * item.quantity;
      calculatedTotal += subtotal;

      orderDetails.push({
        postId: item.postId,
        quantity: item.quantity,
        unitPrice,
        subtotal,
      });
    }

    const newOrder = new Order({
      customerId,
      items: orderDetails.map((d) => ({
        postId: d.postId,
        quantity: d.quantity,
      })),
      orderStatus: "preparing",
      paymentStatus: "pending",
      paymentMethod,
      shippingAddress,
      totalAmount: calculatedTotal,
    });

    const orderDetailsWithId = orderDetails.map((d) => ({
      orderId: newOrder._id,
      ...d,
    }));

    await OrderDetail.insertMany(orderDetailsWithId);

    res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
      orderDetails: orderDetailsWithId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllOrders(req, res) {
  try {
    const orders = await Order.find({ customerId: req.user._id });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getOrderById(req, res) {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateOrderStatus(req, res) {
  try {
    const userId = req.user._id;
    const { orderId } = req.params;
    const { orderStatus, paymentStatus } = req.body;

    const order = await Order.findById(req.params.orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const isAuthor = order.items.some(
      (item) => item.postId.author.toString() === userId.toString()
    );
    if (!isAuthor) {
      return res
        .status(403)
        .json({ message: "You are not authorized to update this order" });
    }

    const updates = {};

    if (orderStatus !== undefined) {
      if (!Order.orderStatuses.includes(orderStatus)) {
        return res.status(400).json({ message: "Invalid order status" });
      }
      updates.orderStatus = orderStatus;
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No updates provided" });
    }

    const result = await Order.findByIdAndUpdate(orderId, updates, {
      new: true,
    });

    if (result.matchCount === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order status updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateOrderByCustomer(req, res) {
  try {
    const { orderId } = req.params;
    const updates = req.body;

    const allowedUpdates = ["shippingAddress", "paymentMethod", "orderStatus"];

    Object.keys(updates).forEach((key) => {
      if (!allowedUpdates.includes(key)) {
        delete updates[key];
      }
    });
    if (updates.orderStatus && updates.orderStatus !== "cancelled") {
      return res
        .status(400)
        .json({ message: "Customers can only cancel orders" });
    }

    const order = await Order.findOneAndUpdate(
      { _id: orderId, customerId: req.user._id },
      updates,
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "You are not authorized to update this order" });
    }

    const result = await Order.findById(orderId, updates, { new: true });

    res.status(200).json({ message: "Order updated successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteOrder(req, res) {
  try {
    const userId = req.user._id;
    const { orderId } = req.params;

    const order = await Order.findById(req.params.orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const isAuthor = order.items.some(
      (item) => item.postId.author.toString() === userId.toString()
    );
    if (!isAuthor) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this order" });
    }

    const result = await Order.findByIdAndDelete(orderId);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
