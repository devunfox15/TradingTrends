"use client";
import { useState, useEffect } from 'react';
import FilterBar from "@/components/(shop)/filterBar";
import DisplayItems from "@/components/(shop)/displayItems";
import "@/styles/globals.css";


export default function ShopContainer({ category }) {
    const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);

    const toggleFilterBar = () => {
        setIsFilterBarOpen(!isFilterBarOpen);
    };

    return (
        <div className="">
            <div className="flex flex-col lg:flex-row w-full h-full bg-gradient-to-b from-Tertiary to-DarkBlue via-Primary rounded-lg">
            <div className="flex flex-row lg:flex-col lg:mr-2 bg-Primary border-2 border-white lg:border-none   ">
        <button
        className={`${
        isFilterBarOpen
            ? "text-white bg-Primary text-sm text-left font-bold px-1 h-fit lg:h-[50px] w-[50px] lg:w-full text-center my-auto"
            : "text-white bg-Primary w-full h-full font-bold p-2 py-2 lg:py-10 mx-auto lg:mx-0 lg:mr-2"
            }`}
            onClick={toggleFilterBar}
        >
            <div className={`${isFilterBarOpen ? "bg-red-500 rounded-lg p-5" : "vertical-text"} w-full h-full flex justify-center items-center lg:justify-end text-center lg:border-none `}>
            {isFilterBarOpen ? 'X' : 'Category Menu'}
            </div>
            </button>
            {isFilterBarOpen && <FilterBar />}
            </div>
            
                <DisplayItems category={category} />
            </div>
        </div>
        
    );
}
