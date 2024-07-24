"use client";

import { useState } from "react";

export default function UserSettings({ user }) {
const [activeSetting, setActiveSetting] = useState(null);

const handleButtonClick = (setting) => {
setActiveSetting(setting);
// Implement further actions based on the selected setting
console.log(`${setting} clicked`);
};

return (
<div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold text-center bg-green-500">Stretch Goal</h1>
    <div className="flex flex-col items-center w-full">
    <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
        <h2 className="text-xl w-full font-bold mb-4">Account Settings</h2>
        <div className="flex flex-col space-y-4">
        <button
            onClick={() => handleButtonClick("Profile Information")}
            className="px-4 py-2 bg-Secondary text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
            Profile Information
        </button>
        <button
            onClick={() => handleButtonClick("Payment Methods")}
            className="px-4 py-2 bg-Secondary text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
            Payment Methods
        </button>
        <button
            onClick={() => handleButtonClick("Order History")}
            className="px-4 py-2 bg-Secondary text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
            Order History
        </button>
        <button
            onClick={() => handleButtonClick("Wishlist")}
            className="px-4 py-2 bg-Secondary text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
            Wishlist
        </button>
        <button
            onClick={() => handleButtonClick("Preferences")}
            className="px-4 py-2 bg-Secondary text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
            Preferences
        </button>
        </div>
    </div>
    </div>
    {activeSetting && (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{activeSetting}</h2>
        <p>Details and options for {activeSetting} will be implemented here.</p>
    </div>
    )}
</div>
);
}