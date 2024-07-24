import Navbar from "./navbar";
import { auth } from "@/app/auth";

export default async function NavbarData() {
    const session = await auth();
    const user = session?.user;

    return (
        <>
            <Navbar  User={user}/>
        </>
    );
}