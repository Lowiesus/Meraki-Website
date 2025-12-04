import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

export default function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Form state
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");

  // Fetch cart on mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axiosInstance.get("/cart");
        setCart(res.data);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
        toast.error("Failed to load cart");
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // Calculate total
  const getTotal = () => {
    if (!cart?.items) return 0;
    return cart.items.reduce((total, item) => {
      const price =
        item.listingSnapshot?.price || item.post?.listing?.price || 0;
      return total + price * item.quantity;
    }, 0);
  };

  // Handle checkout - creates the order
  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!cart?.items || cart.items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    if (!shippingAddress.trim()) {
      toast.error("Please enter a shipping address");
      return;
    }

    setSubmitting(true);

    try {
      // Prepare order data
      const orderData = {
        items: cart.items.map((item) => ({
          postId: item.post?._id || item.post,
          quantity: item.quantity,
        })),
        paymentMethod,
        shippingAddress: shippingAddress.trim(),
      };

      // Create the order
      const res = await axiosInstance.post("/orders", orderData);

      toast.success("Order placed successfully!");

      // Clear the cart after successful order (optional - depends on your backend)
      // You might want to add a DELETE /cart endpoint

      // Navigate to orders page
      navigate("/cart"); // or wherever your ShoppingCart page is
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error.response?.data?.message || "Failed to place order");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="ml-20 lg:ml-72 min-h-screen flex items-center justify-center bg-base-200">
          <div>Loading cart...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="ml-20 lg:ml-72 min-h-screen bg-base-200 p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-[#0F4786]">Checkout</h1>

          {/* Cart Items */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Your Items</h2>

            {!cart?.items || cart.items.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item, idx) => {
                  const name =
                    item.listingSnapshot?.name ||
                    item.post?.listing?.name ||
                    "Item";
                  const price =
                    item.listingSnapshot?.price ||
                    item.post?.listing?.price ||
                    0;
                  const media =
                    item.listingSnapshot?.media?.[0] || item.post?.media?.[0];

                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-3 border rounded-lg"
                    >
                      {media && (
                        <img
                          src={media}
                          alt={name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      )}
                      <div className="flex-1">
                        <p className="font-medium">{name}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold">
                        ₱
                        {(price * item.quantity).toLocaleString("en-PH", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  );
                })}

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>
                      ₱
                      {getTotal().toLocaleString("en-PH", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Checkout Form */}
          {cart?.items && cart.items.length > 0 && (
            <form
              onSubmit={handleCheckout}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-lg font-semibold mb-4">Shipping & Payment</h2>

              {/* Shipping Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Shipping Address
                </label>
                <textarea
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Enter your full shipping address"
                  className="w-full p-3 border rounded-lg resize-none"
                  rows={3}
                  required
                />
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Payment Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash_on_delivery"
                      checked={paymentMethod === "cash_on_delivery"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Cash on Delivery (COD)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="gcash"
                      checked={paymentMethod === "gcash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>GCash</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit_card"
                      checked={paymentMethod === "credit_card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Credit Card</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#0F4786] text-white py-3 rounded-lg font-semibold hover:bg-[#0d3a6d] transition-colors disabled:opacity-50"
              >
                {submitting ? "Placing Order..." : "Place Order"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
