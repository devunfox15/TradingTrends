"use server";
import prisma from "@/app/lib/prisma";
import Link from "next/link";
export default async function Page({ params }) {

    const order = await prisma.order.findUnique({
        where: { id: params.id },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })

    if (!order) {
        return <div className="p-10 text-white">Order not found</div>;
      }
    
      return (
        <div className="p-10 bg-DarkBlue w-full min-h-screen text-white flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-5">Order Details</h1>
          <div className="bg-Primary p-5 rounded-lg w-full max-w-2xl flex flex-col items-center">
            <p className="mb-2 text-center">Order ID: {order.id}</p>
            <p className="mb-2">Order Total: ${parseFloat(order.totalAmount).toFixed(2)}</p>
            <p className="mb-5">Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}</p>
            <div className="flex flex-col md:flex-row md:flex-wrap lg:space-x-5 ">
              {order.orderProducts?.length > 0 ? (
                order.orderProducts.map((orderProduct) => (
                  <div key={orderProduct.product.id} className="flex flex-col lg:flex-row bg-Tertiary rounded-lg text-black mb-5  ">
                    <Link href={`/shop/products/${orderProduct.product.id}`} className="text-xl font-bold text-center mx-auto">
                    <p className="text-center mb-2"> {orderProduct.product.title.length > 10 ? orderProduct.product.title.slice(0, 10) + "..." : orderProduct.product.title}</p>
                    <img
                      src={orderProduct.product.image}
                      alt={orderProduct.product.title}
                      className="w-24 h-24 rounded-full border-2 border-Tertiary mx-auto mb-2"
                    />
                    </Link>
                  </div>
                ))
              ) : (
                <p>No products in this order</p>
              )}
            </div>
            <Link href="/orders" className="text-xl font-bold text-center bg-Tertiary p-2 px-10 rounded-lg mt-10 inline-block">
                Back to Orders
            </Link>
          </div>
        </div>
      );
    }