import { auth } from "@/app/auth";
import UserLikes from "@/components/(account)/(info)/user-likes";

export default async function AccountLikes() {
    const session = await auth();
    const User = session?.user;

    return User ? (
    <div className="bg-DarkBlue h-screen">
    <div className="flex flex-col items-center w-full h-fit  bg-DarkBlue">
        <UserLikes user={User} />
    </div>
    </div>
)
: (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-DarkBlue">
        <h1 className='text-2xl font-bold text-center text-white'>Please login to view your likes</h1>
    </div>
)
}