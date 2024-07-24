
import UserLikes from "../(account)/(info)/user-likes";
import UserOrders from "../(account)/(info)/user-orders";
import UserSettings from "../(account)/(info)/user-settings";

export default function AccountInfo({ User }) {
    return (
    <div className="flex flex-col items-center w-full h-screen bg-DarkBlue">
        <UserSettings user={User} />
    </div>
)
}