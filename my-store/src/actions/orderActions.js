"use server";
import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();


export async function CreateOrder(formData) {
    console.log("create order");

  // Convert FormData to a plain object
  const data = Object.fromEntries(formData.entries());

  console.log(data); // Debugging log

  // Parse products array from JSON string
  const products = JSON.parse(data.products);

  // Create the order
  const order = await prisma.order.create({
    data: {
      totalAmount: Number(data.totalAmount),
      userId: data.userId,
      orderProducts: {
        create: products.map(product => ({
          productId: (product.id),
          quantity: product.quantity,
          price: product.price, // Assuming you want to store the price at the time of order
        })),
      },
    },
    include: {
      user: true,
      orderProducts: {
        include: {
          product: true,

        },
      },
    },
  });

  revalidatePath("/orders");

  return order;
}