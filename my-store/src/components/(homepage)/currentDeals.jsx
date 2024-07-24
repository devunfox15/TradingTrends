"use Server";
import React from 'react';
import AutoScrollLeft from './horizontalScrollCarousel';
import prisma from '@/app/lib/prisma'

export const CurrentDeals = async () => {

    const CurrentDealsData = await prisma.product.findMany(
        {
            where: {
                price: {
                    gt: 26,
                    lt: 150
                }
            }
        }
    );
    return (
        <div className="bg-gradient-to-b from-Primary to-DarkBlue via-Primary px-5 lg:px-12 pb-10 flex flex-col items-center h-full w-full ">
        <div className="flex flex-col items-center justify-center w-full h-full bg-DarkBlue rounded-3xl border-4 border-sky-700 px-2 pb-10">
            <h1 className="text-5xl py-10 font-bold bg-gradient-to-l from-Primary via-Secondary to-purple-500 bg-clip-text text-transparent text-shadow-xl ">Don't Miss Our Latest Deals!</h1>
                <div className="bg-gradient-to-t from-Tertiary to-Secondary via-purple-500 w-full lg:py-10 ">
                <AutoScrollLeft slidesData={CurrentDealsData} rtl={false} />
                </div>
        </div>
        </div>
    )
}