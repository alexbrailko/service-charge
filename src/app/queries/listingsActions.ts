'use server';

import prisma from '@/db';
import { FiltersProps } from '../(pages)/search-results/[address]/Filters';
import { Listing } from '@prisma/client';

export const getListingsResults = async (
  addressFull: string,
  filters?: FiltersProps
) => {
  const { bedrooms, priceMin, priceMax } = filters || {};

  try {
    const result = await prisma.listing.findMany({
      where: {
        addressFull: {
          contains: addressFull
        },
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
