"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);
    calculateTotal(cartData);
  }, []);

  const calculateTotal = (cartItems: any[]) => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleQuantityChange = (id: string, increment: boolean) => {
    const updatedCart = cart
      .map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity + (increment ? 1 : -1) }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    window.dispatchEvent(new Event("storage"));
  };

  const handleRemove = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    window.dispatchEvent(new Event("storage"));
  };

  if (cart.length === 0) {
    return <p className="text-center mt-8 text-lg">Your cart is empty!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-600 mb-6">
            Free Delivery on orders of ₹14,000.00 or more.{" "}
            <span className="text-black font-medium underline cursor-pointer">
              View details
            </span>
          </div>

          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-start bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-grow ml-4">
                  <h3 className="text-lg font-medium">{item.productName}</h3>
                  <p className="text-gray-500 text-sm">
                    {item.description} <br />
                    Size: {item.size} Quantity: {item.quantity}
                  </p>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-gray-200 p-1 rounded-full"
                      onClick={() => handleQuantityChange(item._id, false)}
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      className="bg-gray-200 p-1 rounded-full"
                      onClick={() => handleQuantityChange(item._id, true)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-right font-medium">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4">Summary</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-black">
                <span>Total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              onClick={() => router.push("/checkout")}
            >
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
