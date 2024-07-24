import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function saltAndHashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export async function getUserFromDb(email, passwordHash) {
    const user = await prisma.user.findUnique({
    where: { email },
    });

    if (user && bcrypt.compareSync(passwordHash, user.password)) {
    return user;
    }

    return null;
}