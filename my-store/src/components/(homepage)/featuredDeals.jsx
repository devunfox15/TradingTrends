"use Server";
import AutoScrollLeft from './horizontalScrollCarousel'
import prisma from '@/app/lib/prisma'

export const FeaturedDeals = async () => {
   
    const CurrentDealsData = await prisma.product.findMany({
        where: {
            price: {
                gt: 0,
                lt: 25
            }
        }
    });


    return (
        <div className="flex flex-col items-center justify-center w-full h-1/2 bg-DarkBlue border-2 border-sky-700 rounded-3xl px-5 pb-10">
            <h1 className="text-5xl py-10 font-bold bg-gradient-to-l from-Primary via-Secondary to-purple-500 bg-clip-text text-transparent text-center">Shop Now for Limited-Time Offers!</h1>
            <div className="bg-gradient-to-t from-Tertiary to-Secondary via-purple-500 w-full lg:py-10 ">
            <AutoScrollLeft slidesData={CurrentDealsData} rtl={true} />
            </div>
        </div>
    )
}