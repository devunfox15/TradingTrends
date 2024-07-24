"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function NavbarUser() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();

        if (res.ok && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUser(null);
      }
    }

    fetchSession();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {user ? (
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
          <img
            src={user.picture || "https://via.placeholder.com/150"}
            alt={user.name || "User Avatar"}
            className="w-8 h-8 rounded-full"
          />
          <p className="invisible lg:visible">{user.name}</p>
        </div>
      ) : (
        /*Change Localhost to your URL*/
        <Link href="/api/auth/signin"> 
          <p>Login</p>
        </Link>
      )}
      {isDropdownOpen && user && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <p className="block px-4 text-sm text-gray-800 visible lg:invisible">Hello, {user.name}</p>
          <Link href="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Order History
          </Link>
          {/* Change Localhost to your URL*/}
          <Link href="/api/auth/signout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
}