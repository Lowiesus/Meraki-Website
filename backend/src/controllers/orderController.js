import order from "../models/orderModel.js";
import cloudinary from "../lib/cloudinary.js";

//Cerate Order
export const createOrder = async (req, res) => {
  try {
    const customerId = req.user._id;
    const { items, paymentMethod, shippingAddress } = req.body;

    //validation

    if (!items || items.length === 0) {
      return res
        .status(400)
        .json({ message: "Order must contain at least one item" });
    }
    if (!shippingAddress || !paymentMethod) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    let totalAmount = 0;

    const validatedItems = items.map((item) => {
      const subtotal = item.price * item.quantity;
      totalAmount += subtotal;

      return {
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      };
    });

    const newOrder = new Order({
      customerId,
      items: validatedItems,
      totalAmount,
      paymentMethod,
      shippingAddress,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customerId", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "customerId",
      "fullName email"
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      { new: true }
    );
  } catch (error) {}
};
