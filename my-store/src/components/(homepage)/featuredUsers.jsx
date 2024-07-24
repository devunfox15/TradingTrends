import {ArrowDotsReviews} from './arrowDotsReviews'
import AutoScrollLeft from './horizontalScrollCarousel'

export const FeaturedUsers = () => {
    const FeaturedUserData = [
        { id: 1, className: 'bg-gradient-to-t from-Primary to-Primary via-Tertiary', content: "Why would you shop at a place like Amazon when you can shop at TrendTrove? Hello the product is just as good and to your door in no time." , author: '- Alex'},
        { id: 2, className: 'bg-gradient-to-t from-Secondary to-Secondary via-Tertiary', content: 'I found exactly what I wanted. I\'ll definitely be returning! ', author: '- Daphnie' },
        { id: 3, className: 'bg-gradient-to-t from-Primary to-Primary via-Tertiary', content: 'This jean were cheap and comfortable. Also caught the plated ring for my future girl and I know she will loved it. Now I feel Skibidi and am ready to Rizz. ', author: '- Devun' },
        { id: 4, className: 'bg-gradient-to-t from-Secondary to-Secondary via-Tertiary',  content: 'Perfect condition and my friends are jealous for it. I slay!', author: '- Katie' }, 
        { id: 5, className: 'bg-gradient-to-t from-Primary to-Primary via-Tertiary', content: 'You think you can dress for less, get computer parts, and jewelry in one place other then trading Trends... You are frankly clueless! ' , author: '- Ross' },
        ]
    return (
        <div className="flex flex-col items-center justify-center w-full h-1/2 mt-5">
            <div className="flex flex-col items-center justify-center w-full h-1/2 bg-DarkBlue rounded-3xl">
            <h1 className="text-5xl py-10 font-bold bg-gradient-to-l from-Primary via-Secondary to-purple-500 bg-clip-text text-transparent text-center"> Our Users' Testimonials</h1>
            <div className=" w-full bg-DarkBlue px-5 lg:px-10  rounded-lg flex flex-col items-center justify-center text-center">
                <ArrowDotsReviews slidesData={FeaturedUserData} />
            </div>
            </div>
        </div>
    )
}