'use server';

import prisma from '@/db';

export const getListingsResults = async (addressFull: string) => {
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

export const getListingById = async (id: string) => {
  try {
    const result = await prisma.listing.findFirst({
      where: {
        id: {
          contains: id
        }
      }
    });

    return result;
  } catch (e) {
    console.log('Error:', e);
    return [];
  }
};
