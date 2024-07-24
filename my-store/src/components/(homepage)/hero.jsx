import Image from "next/image";
import Link from "next/link";
export default function  Hero(){
    return (
        <>
        <div className="w-full bg-Primary py-5">
        <div className="w-full mx-auto h-fit border-4 border-Primary rounded-3xl px-10 py-16 bg-Primary rounded-3xl  ">

        <Link className="mouse-pointer" href="/account/register">
            <Image 
                src="/Invitation-Banner.png" 
                alt="Invitation Banner" 
                width={500} 
                height={250} 
                className="mx-auto rounded-3xl w-1/2 lg:h-1/2"  
                />
            </Link>
        </div>
        </div>
        </>
    
    );
}