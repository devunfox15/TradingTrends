
import Checkout from "./checkout";
import { auth } from "@/app/auth";
import {redirect} from "next/navigation";

export default async function VerifyCheckout() {
    const session = await auth();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/cart/checkout");
    }

    return (
        <Checkout user={user} />
    )
}