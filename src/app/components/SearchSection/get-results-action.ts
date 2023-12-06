'use server';

import prisma from '@/db';

export const getResults = async (postCode: string) => {
  try {
    const result = await prisma.listing.findMany({
      where: { postCode },
    });

    return result;
  } catch (e) {
    console.log('Error:', e);
    return [];
  }
};
