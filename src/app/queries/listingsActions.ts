'use server';

import prisma from '@/db';
import { FiltersProps } from '../(pages)/search-results/[address]/Filters';
import { Listing } from '@prisma/client';

export const getListingsResults = async (
  address: string,
  filters?: FiltersProps
) => {
  const { bedrooms, priceMin, priceMax } = filters || {};

  try {
    const result = await prisma.listing.findMany({
      distinct: ['addressFull'],
      where: {
        OR: [
          { addressFull: { contains: address } },
          { address: { contains: address } }
        ],
        ...(bedrooms && {
          beds: bedrooms
        }),
        listingPrice: {
          ...(priceMin && {
            gte: priceMin
          }),
          ...(priceMax && {
            lte: priceMax
          })
        }
      },
      orderBy: {
        datePosted: 'desc'
      }
    });

    return result;
  } catch (e) {
    console.log('Error:', e);
    return [];
  }
};

export const getListingById = async (id: string): Promise<Listing | null> => {
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
    return null;
  }
};

export const getListingsByAddress = async (
  address: string
): Promise<Listing[]> => {
  try {
    const result = await prisma.listing.findMany({
      where: {
        addressFull: {
          contains: address
        }
      },
      orderBy: {
        datePosted: 'desc'
      }
    });

    return result;
  } catch (e) {
    console.log('Error:', e);
    return [];
  }
};
