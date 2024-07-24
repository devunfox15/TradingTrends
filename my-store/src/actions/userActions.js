'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id  },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Error fetching user');
  }
};