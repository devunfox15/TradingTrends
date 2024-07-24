import  Footer  from "../(homepage)/footer";
import Hero from "../(homepage)/hero";

export default function  HomePageEnd(){
    return (
        <div className="bg-gradient-to-b from-Primary to-DarkBlue via-DarkBlue pt-10 h-fit">
            <Hero />
            <Footer />
        </div>
    )
}