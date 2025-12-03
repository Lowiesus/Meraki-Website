import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    orderStatus: {
      type: String,
      enum: ["preparing", "ready", "completed", "cancelled"],
      default: "preparing",
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "gcash", "cash_on_delivery"],
      default: "cash_on_delivery",
    },
    shippingAddress: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
