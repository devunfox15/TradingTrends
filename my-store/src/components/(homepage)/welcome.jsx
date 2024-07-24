"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/globals.css";

export const Welcome = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
    "/opening-Image-1.jpg",
    "/opening-Image-2.jpg",
    "/opening-Image-3.jpg",
    ];

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
    }, [images.length]);



    const imageStyle2 = {
    borderRadius: "3%",
    border: "2px solid #fff",
    };

    return (
    <div className="bg-gradient-to-b from-DarkBlue to-Primary via-Primary w-full h-fit lg:h-screen py-10">
        <Link href="/shop" className="w-full h-full">
        <div className="flex flex-col lg:flex-row h-full w-11/12 m-auto bg-DarkBlue rounded-3xl border-2 border-sky-700 p-5 overflow-hidden ">
        <div className="bg-gradient-to-r from-Primary to-Primary via-Tertiary w-full lg:w-1/2 h-full lg:rounded-l-3xl lg:border-l-4 lg:border-y-4 border-t-4 border-b-2 border-black flex flex-col items-center  lg:flex-row p-5 shadow-2xl">
        <Image
            className="rounded-3xl"
            src="/opening-Image.jpg"
            width={300}
            height={100}
            alt="opening"
        />

        <div className="w-full lg:w-1/3 lg:mx-auto h-full flex flex-col justify-center items-center ">
            <h1 className="flex text-center text-3xl py-5 md:text-2xl font-bold">Welcome to Trading Trends</h1>
            <h2 className="py-2  flex text-center font-bold text-white specialtext">
                Discover the Best Deals Online for All Your Needs!
            </h2>
            <h2 className="px-8 py-5 flex justify-center text-m font-bold text-white text-center specialtext">
                Join Us Today and Explore Exclusive Offers and Trendy Products Tailored Just for You!
            </h2>
            <h2 className="w-[150px] h-[50px] flex justify-center m-auto items-center bg-Primary rounded-lg specialtext">
                Shop Now
            </h2>
            </div>
        </div>
        <div className="w-full h-[300px] md:h-[400px] lg:w-1/2 lg:h-full flex justify-center items-center border-t-2 border-b-4 lg:border-y-4 lg:border-r-4 lg:rounded-r-3xl border-black bg-gradient-to-l from-fuchsia-800 to-Primary via-fuchsia-600 p-5">
        <Image
            src={images[currentImageIndex]}
            width={500}
            height={300}
            alt="opening"
            className="w-max[300px] h-[200px] md:w-max[500px] md:h-[300px] lg:w-full lg:h-full rounded-r-3xl "
        />
        </div>
        </div>
        </Link>
    </div>
    );
};