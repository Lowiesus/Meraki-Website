import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        required: true,
        min: 1,
      },
    ],
    totalAmount: Number,
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
      enum: ["Credit Card", "paypal", "GCash", "Cash On Delivery"],
      default: "Cash On Delivery",
    },
    shippingAddress: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
