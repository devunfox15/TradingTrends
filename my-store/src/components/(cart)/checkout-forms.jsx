"use client"
import { useState, useEffect } from "react";
import { CreateOrder } from "@/actions/orderActions";

export default function CheckoutForms({ user, cart, setCart, totalPrice, setSuccessMessage }) {
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [finalPrice, setFinalPrice] = useState(totalPrice);

    useEffect(() => {
        setFinalPrice((totalPrice - discount).toFixed(2));
    }, [discount, totalPrice]);

    const calculateDiscount = (coupon) => {
        if (coupon === 'DISCOUNT10') {
            return (totalPrice * 0.1).toFixed(2);
        }
        if (coupon === 'DISCOUNT25') {
            return (totalPrice * 0.25).toFixed(2);
        }
        return 0;
    }

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        const discountAmount = calculateDiscount(coupon);
        setDiscount(discountAmount);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', user.id);
        formData.append('products', JSON.stringify(cart)); // Serialize the cart array
        formData.append('totalAmount', finalPrice);
        const data = CreateOrder(formData);

        console.log('Checkout submitted', data);
        // Clear the cart after submission
        localStorage.removeItem('cart');
        setCart([]);
        setSuccessMessage('Thank you for your purchase! Your cart has been cleared.');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <h2 className="text-xl font-bold mb-4">Billing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="p-2 border rounded-lg"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="p-2 border rounded-lg"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    className="p-2 border rounded-lg"
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    className="p-2 border rounded-lg"
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    required
                    className="p-2 border rounded-lg"
                />
                <input
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                    required
                    className="p-2 border rounded-lg"
                />
            </div>
            <h2 className="text-xl font-bold mt-6 mb-4">Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    required
                    className="p-2 border rounded-lg"
                />
                <input
                    type="text"
                    name="cardExpiry"
                    placeholder="Expiry Date (MM/YY)"
                    required
                    className="p-2 border rounded-lg"
                />
                <input
                    type="text"
                    name="cardCVC"
                    placeholder="CVC"
                    required
                    className="p-2 border rounded-lg"
                />
            </div>
            <h2 className="text-xl font-bold mt-6 mb-4">Coupon Code</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="p-2 border rounded-lg"
                />
                <button
                    onClick={handleApplyCoupon}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Apply
                </button>
            </div>
            <div className="mt-6 ">
                <h2 className="text-xl font-bold mb-2">Order Summary</h2>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
                <p className="mb-1">Original Price: ${(totalPrice)}</p>
                <p className="mb-1">Discount: ${discount}</p>
                <p className="font-bold">Total Price: ${finalPrice}</p>
                </div>
            </div>
            <button
                type="submit"
                className="mt-6 px-6 py-3 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600"
            >
                Submit Order
            </button>
        </form>
    );
}