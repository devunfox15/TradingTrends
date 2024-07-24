import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import "@/styles/globals.css"


export default function PhoneNavbar() {
    return (
        <nav className="sm:grid sm:grid-cols-2  md:flex lg:flex-row items-center justify-between lg:border-b-4 border-t-4 border-Primary bg-Primary text-white font-merriweather p-2 ">

        <div className="flex justify-center items-center text-xl font-bold px-10 rounded-full space-x-5 bg-white">
            <Image className="hover:animate-spin" src="/logo.png" href="/" width={50} height={50} alt="logo" />
            <div className='flex flex-col'>
            <h1 className="animate-pulse-reverse bg-gradient-to-r from-Primary via-Secondary via-Tertiary to-purple-500  bg-clip-text text-transparent">TrendTrove Trading</h1>
            <h4 className="text-xs mx-auto
            font-merriweather  text-Primary">Start Trading Today</h4>
            </div>
        </div>
            <ul className="flex justify-evenly md:space-x-16 lg:space-x-16 font-merriweather">
            <Image className="lg:hidden" src="/menu.svg" width={50} height={50} alt="menu" />
            <li className='hover:text-Secondary sm:hidden'><Link href="/">Home</Link></li>
            <li className='hover:text-Secondary sm:hidden'><Link href="/about">About</Link></li>
            <li className='hover:text-Secondary sm:hidden'><Link href="/contact">Contact</Link></li>
            <div className="flex justify-center items-center text-xl p-2 bg-Primary mr-5 rounded-full hover:bg-Tertiary">
            <Link href="/cart"><Image src="/cart.svg" href="/cart" width={25} height={25} /> </Link>
        </div>
            </ul>

        </nav>

    );
}