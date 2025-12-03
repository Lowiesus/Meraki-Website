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

    const validatedItems = await Promise.all(
      items.map(async (item) => {
        const post = await Post.findById(item.postId); // 👈 Changed from productId
        if (!post) {
          throw new Error(`Post with ID ${item.postId} not found`);
        }

        const price = post.price; // 👈 Get price from Post
        const subtotal = price * item.quantity;
        totalAmount += subtotal;

        return {
          postId: item.postId, // 👈 Changed from productId
          quantity: item.quantity,
          price: price,
        };
      })
    );
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
      .populate("items.postId", "productName price media");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get order by id
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.orderStatus !== "preparing") {
      return res
        .status(400)
        .json({ message: "Can only cancel orders that are preparing" });
    }

    order.orderStatus = "cancelled";
    await order.save();

    res.status(200).json({ message: "Order cancelled", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
