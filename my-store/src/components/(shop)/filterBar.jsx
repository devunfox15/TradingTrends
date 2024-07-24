"use client";

import Link from "next/link";
import "@/styles/globals.css";

export default function FilterBar() {
    const categories = [
        { name: 'All', href: '/shop' },
        { name: 'Men', href: '/shop/mens' },
        { name: 'Women', href: '/shop/women' },
        { name: 'Electronics', href: '/shop/electronics' },
        { name: 'Jewelery', href: '/shop/jewelery' },
    ];

    return (
        <div className="w-full h-fit bg-Primary grid grid-cols-3 p-5 gap-4 lg:flex lg:flex-col lg:px-10 lg:items-baseline items-center gap-5 lg:gap-10 lg:h-full lg:py-5  ">
            {categories.map((category) => (
                <Link className=" w-full h-fit text-center p-2 bg-Secondary rounded-lg text-purple-900 text-s md:text-xl lg:text-2xl hover:text-Tertiary" key={category.name} href={category.href}>
                        {category.name}
                </Link>

            ))}
        </div>
    );
}