"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavbarUser from '@/components/navbarUser';
import '@/styles/globals.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex flex-col bg-Primary text-white font-merriweather lg:p-5 lg:flex-row lg:items-center lg:justify-between lg:border-b-8 border-sky-800">
      <div className="flex justify-center items-center text-2xl font-bold lg:px-24 lg:py-2 lg:rounded-full lg:space-x-5 bg-white justify-evenly">
        <Link href="/">
          <Image className="hover:animate-spin" src="/logo.png" width={50} height={50} alt="logo" />
        </Link>
        <div className='flex flex-col'>
          <h1 className="animate-pulse bg-gradient-to-r from-Primary via-Secondary to-purple-500 bg-clip-text text-transparent">Trading Trends</h1>
          <h4 className="text-xs mx-auto font-merriweather text-Primary">Start Trading Today</h4>
        </div>
        <Image className="lg:hidden cursor-pointer" src="/menu.svg" width={50} height={50} alt="menu" onClick={handleMenuToggle} />
      </div>
      <ul className={`flex justify-between w-full  items-center py-5 text-xl lg:flex-row font-merriweather space-x-4 ${isMenuOpen ? 'block' : 'hidden'} ${isMobileView ? 'block' : 'lg:flex lg:mx-auto'}`}>
        <li className='hover:text-Secondary flex-1 text-center'><Link href="/">Home</Link></li>
        <li className='hover:text-Secondary flex-1 text-center'><Link href="/shop">Product</Link></li>
        <li className='hover:text-Secondary flex-1 text-center'><Link href="/likes">Likes</Link></li>
        <li className='hover:text-Secondary flex-1 text-center'><Link href="/cart"><Image className="cursor-pointer mx-auto" src="/cart.svg" width={25} height={25} alt="cart" /></Link></li>
        <li className='hover:text-Secondary flex-1 text-center'><NavbarUser /></li>
      </ul>
    </nav>
  );
}