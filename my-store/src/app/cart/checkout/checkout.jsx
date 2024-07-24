"use client";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CheckoutForms from "@/components/(cart)/checkout-forms";

export default function Checkout( { user } ) {
const [cart, setCart] = useState([]);
const [successMessage, setSuccessMessage] = useState('');

useEffect(() => {
// Load cart data from localStorage
const storedCart = localStorage.getItem('cart');
if (storedCart) {
    setCart(JSON.parse(storedCart));
}
}, []);

const totalPrice = cart.reduce(
(acc, item) => acc + item.price * item.quantity,
0
).toFixed(2);


return (
<div className="flex flex-col items-center w-full min-h-screen bg-DarkBlue py-10">
<Link className="text-5xl font-bold text-white mb-8" href="/cart">
{/* Back button */}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</Link>
<h1 className="text-5xl font-bold text-white mb-8">Checkout</h1>
<div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
  {successMessage && (
    <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
      {successMessage}
    </div>
  )}
  {cart.length > 0 ? (
    <>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-row items-center justify-between w-full py-4 border-b last:border-b-0"
        >
          <div className="flex items-center space-x-4">
            <Image src={item.image} alt={item.name} width={50} height={50} />
            <h2 className="text-xl font-bold">{item.name}</h2>
          </div>
          <span className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
    <div className="flex justify-end mt-6">
        <h2 className="text-2xl font-bold">Total: ${totalPrice}</h2>
    </div>
    <CheckoutForms user={user} cart={cart} setCart={setCart} totalPrice={totalPrice} setSuccessMessage={setSuccessMessage} />
</>
) : (
    <>
    <p className="text-xl font-bold mb-4 text-center">Your cart is waiting for some great items<br/>
    Browse our store to add products!</p>
    <Link href="/shop">
        <h2 className="mt-4 text-blue-500 hover:underline text-center">Return to Shop</h2>
    </Link>
    </>
)
}
</div>
</div>
);
}