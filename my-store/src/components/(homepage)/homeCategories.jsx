
import {FeaturedDeals} from "@/components/(homepage)/featuredDeals";
import {FeaturedUsers} from "@/components/(homepage)/featuredUsers";
export default function  HomeCategories(){
    return (
        <div className="bg-gradient-to-b from-DarkBlue to-Primary via-Primary ">
        <div className="flex flex-col items-center justify-center h-fit bg-tertiary px-5 lg:px-12 rounded-t-lg ">
            <FeaturedDeals />
            <FeaturedUsers />
        </div>
        </div>
    )
}