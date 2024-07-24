import "@/styles/globals.css"
import Image from "next/image";
import Link from "next/link";
import AccountInfo from "@/components/(account)/account-info";
import { auth } from "@/app/auth";


export default async function Account() {
    const session = await auth();
    const User = session?.user;


    return  (!session) ? (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-Tertiary to-DarkBlue via-Primary to-Tertiary">
    <div className="max-w-md lg:max-w-lg w-full text-center h-1/2 flex flex-col  mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h1 className="text-md font-bold text-center">It Seems that you are not logged in...<br/>
    Please login or register to continue.
    </h1>
    <div className="flex flex-col py-20 items-center justify-center gap-5">
    <Link className="text-2xl font-bold" href="/api/auth/signin">
    <div className="bg-Tertiary p-2 px-10 rounded-lg">
    Login
    </div>
    </Link>
    <Link className="text-2xl font-bold" href="/account/register">
    <div className="bg-Tertiary p-2 px-6 rounded-lg">
    Register
    </div>
    </Link>
    </div>
    </div>
    </div>
    ) : (
    <AccountInfo User={User}/>
    );

}