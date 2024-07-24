import { auth } from "@/app/auth";
import UserOrders from "@/components/(account)/(info)/user-orders";
import prisma from '@/app/lib/prisma'

export default async function AccountOrders() {
    const session = await auth();
    const User = session?.user;
    console.log(User)
    const orders = await prisma.order.findMany({
        where: { userId: User.id },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
    <div className="flex flex-col items-center w-full h-screen bg-DarkBlue">
        <UserOrders user={User} orders={orders} />
    </div>
)
}