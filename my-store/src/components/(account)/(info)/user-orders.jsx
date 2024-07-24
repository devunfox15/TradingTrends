"use client";
import Image from "next/image";
import Link from "next/link";

export default function UserOrders({ user, orders }) {
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  return orders.length > 0 ? (
    <div className="h-fit w-full bg-DarkBlue text-white p-10">
      <h1 className="text-2xl font-bold text-center pb-5">{user.name}'s Recent Orders</h1>
      <ul className="border-2 border-Tertiary h-full w-full flex flex-col p-5 bg-Primary rounded-lg">
        <li className="p-6 flex flex-row justify-between w-full bg-Tertiary text-black mb-3 py-2 items-center rounded-lg">
          <p className="font-bold">Order Total</p>
          <p className="font-bold">Order ID</p>
          <p className="font-bold">Expected Delivery</p>
          <p className="font-bold hidden md:block">Products</p>
        </li>
        {orders.map((order) => (
          <li key={order.id} className="p-6 flex flex-row justify-between w-full bg-Tertiary text-black mb-3 py-2 items-center rounded-lg">
            <Link href={`/orders/${order.id}`} className="w-full flex flex-row justify-between items-center">
                <p>Order total: ${parseFloat(order.totalAmount).toFixed(2)}</p>
                <p>Order ID: {order.id.length > 6 ? order.id.slice(0, 6) : order.id}</p>
                <p>Expected Delivery: {order.createdAt ? addDays(order.createdAt, 2).toLocaleDateString() : "Order not yet shipped"}</p>
                <div className="flex flex-col space-y-3 items-center hidden md:flex">
                  {order.orderProducts?.length > 0 ? (
                    order.orderProducts.map((orderProduct) => (
                      <div key={orderProduct.product.id} className="flex flex-col items-center">
                        <p className="text-center">
                          {orderProduct.product.title.length > 10 ? orderProduct.product.title.slice(0, 10) + "..." : orderProduct.product.title}
                        </p>
                    {order.orderProducts.length > 1 ? <></> : <img
                      src={orderProduct.product.image}
                      alt={orderProduct.product.title}
                      className="m-auto w-24 h-24 rounded-full border-2 border-Tertiary"
                      />
                      }

                      </div>
                ))
              ) : (
                <p>No products in this order</p>
              )}
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-DarkBlue">
      <h1 className="text-2xl font-bold text-center text-white">
        Aww Man! No orders yet...
      </h1>
      <div className="bg-white p-1 m-10 rounded-full animate-spin-slow">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <Link href="/shop" className="text-xl font-bold text-center bg-Tertiary p-2 px-10 rounded-lg mt-10">
        <button className="text-xl font-bold text-center text-Primary">
          Click here to view all products
        </button>
      </Link>
    </div>
  );
}