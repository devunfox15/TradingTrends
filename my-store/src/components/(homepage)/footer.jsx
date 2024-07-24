import Link from "next/link"

export default function  Footer(){
    return (
        <div className=" flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1 items-center gap-x-4 w-full border-t-2 border-white">

        <div className="col-start-0 col-span-1 pb-10 border-b-2 border-white lg:border-none w-full">
        <div className="flex flex-col items-center w-full h-full text-white ">
            <h1 className="text-lg font-bold text-center">Categories</h1>
            <h1 className="text-m font-bold text-center pb-5"> Summer Season 2024</h1>  
            <div className="flex flex-row text-center items-space-between px-5 space-x-5 text-white text-sm ">
            <Link className="text-sm font-bold text-center hover:text-Secondary" href="/shop/men">Men's Collection</Link>
            <Link className="text-sm font-bold text-center hover:text-Secondary" href="/shop/women">Women's Collection</Link>
            <Link className="text-sm font-bold text-center hover:text-Secondary" href="/shop/electronics">Technology</Link>
            <Link className="text-sm font-bold text-center hover:text-Secondary" href="/shop/jewelery">Jewelery</Link>
            </div>
        </div>
        </div>

        <div className="col-2 w-full pb-10 border-b-2 border-white lg:border-none  ">
        <div className="flex flex-col items-center w-full h-full text-white ">
        <h1 className="text-xl text-white text-center pb-5">This is not a Real Site</h1>
        <Link className="text-m font-bold text-center hover:text-Secondary" href="/plan">Project details and Site Plan</Link>
        </div>
        </div>


        <div className="col-start-3 col-span-4 pb-10 border-b-2  border-white w-full lg:border-none">
        <div className="flex flex-col items-center w-full h-full text-white ">
            <h1 className="text-lg font-bold text-center">Devun Fox Durst</h1>
            <h1 className="text-m font-bold text-center pb-5">Portfolio project - Summer 2024</h1>
            <div className="flex flex-row items-space-between space-x-5 text-white text-sm ">
            <Link className="text-m font-bold text-center hover:text-Secondary" href={"https://github.com/devunfox15"}>Github Profile</Link>
            <Link className="text-m font-bold text-center hover:text-Secondary" href={"https://www.linkedin.com/in/devun-durst/"}>LinkedIn Profile</Link>
            </div>
        </div>
        </div>
        </div>
    )
}