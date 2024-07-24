"use client"; // Indicates that this component is a client-side component

import "@/styles/globals.css"; // Import global CSS styles
import Image from "next/image"; // Import Next.js optimized image component
import Link from "next/link"; // Import Next.js link component
import { useState, useEffect } from "react"; // Import React hooks

// Define the Cart component
export default function Cart() {
  const [cart, setCart] = useState([]); // Initialize the cart state

  // useEffect hook to load cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart'); // Retrieve cart data from localStorage
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart).map(item => ({
        ...item,
        quantity: item.quantity || 1, // Set default quantity to 1 if not specified
      }));
      setCart(parsedCart); // Parse and set the cart state if data is found
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to handle quantity change of cart items
  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      ); // Update the quantity of the item
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage with the new cart state
      return updatedCart; // Return the updated cart state
    });
  };

  // Function to handle removal of an item from the cart
  const handleRemoveItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id); // Remove the item from the cart
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage with the new cart state
      return updatedCart; // Return the updated cart state
    });
  };

  // Function to handle checkout by saving the current cart state to localStorage
  const handleCheckout = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Render the component
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-DarkBlue py-10">
      <h1 className="text-5xl font-bold text-white mb-8">My Cart</h1>
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row items-center justify-between w-full py-4 border-b last:border-b-0"
          >
            <div className="flex items-center space-x-4 py-2 lg:py-0">
              <Image src={item.image} alt={item.title} width={50} height={50} />
              <h2 className="text-xl font-bold">{item.title}</h2>
            </div>
            <div className="flex items-center space-x-4 py-2 lg:py-0">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                disabled={item.quantity <= 1}
                className="px-3 py-1 bg-gray-300 rounded-lg"
              >
                -
              </button>
              <span className="text-xl font-bold">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="px-3 py-1 bg-gray-300 rounded-lg"
              >
                +
              </button>
            </div>
            <h2 className="text-xl font-bold py-2 lg:py-0 ">${(item.price * item.quantity).toFixed(2)}</h2>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
          <Link href="/cart/checkout">
            <div
              className={`lg:px-6 lg:py-3 px-1 py-2 text-center rounded-lg text-white font-bold ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
              onClick={handleCheckout}
            >
              Continue to Checkout
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}