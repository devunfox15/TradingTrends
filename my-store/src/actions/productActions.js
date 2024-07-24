"use server";
import { PrismaClient } from "@prisma/client";
import { revalidateTag } from "next/cache";
const prisma = new PrismaClient();


export async function likeProductSwitch(id, liked) {

    let product;
    product = await prisma.product.findUnique({ where: { id: id } });


    if (product.liked) {
      product = await prisma.product.update({
        where: { id: id },
        data: { liked: false },
      });
    } else {
      product = await prisma.product.update({
        where: { id: id },
        data: { liked: true },
      });
    }
    
    revalidateTag("products");

    return product;
}