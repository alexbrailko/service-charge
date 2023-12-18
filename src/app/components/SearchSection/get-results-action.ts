'use server';

import prisma from '@/db';

export const getResults = async (addressFull: string) => {
  try {
    const result = await prisma.listing.findMany({
      where: {
        addressFull: {
          contains: addressFull
        }
      }
    });

    return result;
  } catch (e) {
    console.log('Error:', e);
    return [];
  }
};
