import Cart from "../models/cart.model.js";
import Post from "../models/post.model.js";

// Get current user's cart
export const getCart = async (req, res) => {
  try {
    const userId = req.user && (req.user._id || req.user.id);
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    let cart = await Cart.findOne({ user: userId }).populate("items.post", "listing media listing.name listing.price kind");
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
      await cart.save();
    }

    return res.status(200).json(cart);
  } catch (err) {
    console.error("Error in getCart:", err.message || err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Add a post/listing to cart
export const addToCart = async (req, res) => {
  try {
    const userId = req.user && (req.user._id || req.user.id);
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const { postId, quantity = 1 } = req.body;
    if (!postId) return res.status(400).json({ message: "postId is required" });

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.kind !== "listing") return res.status(400).json({ message: "Post is not a listing" });

    const listingSnapshot = {
      name: post.listing?.name || "",
      price: post.listing?.price || 0,
      media: Array.isArray(post.media) ? post.media.slice(0, 1) : [],
    };

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingIndex = cart.items.findIndex((it) => String(it.post) === String(postId));
    if (existingIndex >= 0) {
      cart.items[existingIndex].quantity = Math.max(1, cart.items[existingIndex].quantity + Number(quantity));
    } else {
      cart.items.unshift({ post: postId, quantity: Number(quantity) || 1, listingSnapshot });
    }

    await cart.save();

    const populated = await Cart.findById(cart._id).populate("items.post", "listing media listing.name listing.price kind");

    return res.status(200).json(populated);
  } catch (err) {
    console.error("Error in addToCart:", err.message || err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Remove a post from cart
export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user && (req.user._id || req.user.id);
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const { postId } = req.params;
    if (!postId) return res.status(400).json({ message: "postId is required" });

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter((it) => String(it.post) !== String(postId));
    await cart.save();

    const populated = await Cart.findById(cart._id).populate("items.post", "listing media listing.name listing.price kind");
    return res.status(200).json(populated);
  } catch (err) {
    console.error("Error in removeFromCart:", err.message || err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
