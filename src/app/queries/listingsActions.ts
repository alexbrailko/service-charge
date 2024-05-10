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

    if (!result.length) {
      return [];
    }

    const filteredItems = result.filter((value, index, self) => {
      return (
        index ===
        self.findIndex(
          (t) => t.addressFull === value.addressFull && t.beds === value.beds
        )
      );
    });

    return filteredItems;
  } catch (e) {
    console.log('Error:', e);
    return [];
  }
};

export const getAllListings = async () => {
  try {
    const result = await prisma.listing.findMany({});

    if (!result.length) {
      return [];
    }

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

export const getListingsScHistory = async (
  address: string,
  beds: number
): Promise<Listing[]> => {
  try {
    const result = await prisma.listing.findMany({
      where: {
        addressFull: {
          contains: address
        },
        beds: beds
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

export const getClosestListings = async (
  coordinates: string
): Promise<Listing[]> => {
  const [lat, long] = coordinates.split(',');
  const latitude = parseFloat(lat);
  const longitude = parseFloat(long);
  // Define search radius (in kilometers)
  const radius = 5;

  const query = `
SELECT *,
  acos(
    sin(radians(TRIM(SUBSTRING_INDEX(coordinates, ',', 1)))) * sin(radians(${latitude})) +
    cos(radians(TRIM(SUBSTRING_INDEX(coordinates, ',', 1)))) * cos(radians(${latitude})) * cos(radians(CAST(SUBSTRING_INDEX(coordinates, ',', -1) AS FLOAT) - ${longitude}))
  ) * 6373 AS distance
FROM Listing AS l
WHERE l.coordinates IS NOT NULL
  AND (
    CAST(TRIM(SUBSTRING_INDEX(coordinates, ',', 1)) AS FLOAT) BETWEEN ${latitude} - ${radius} AND ${latitude} + ${radius}
    OR CAST(SUBSTRING_INDEX(coordinates, ',', -1) AS FLOAT) BETWEEN ${longitude} - ${radius} AND ${longitude} + ${radius}
  )
ORDER BY distance ASC
LIMIT 10;
`;

  try {
    const result: any = await prisma.$queryRawUnsafe(query);

    console.log('result', result);

    return result;
  } catch (e) {
    console.log('Error:', e);
    return [];
  }
};

export const getCoordinatesByAddress = async (address: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/send/coordinates`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ address })
    });

    const { coordinates } = await response.json();

    if (coordinates) {
      return coordinates;
    } else {
      return false;
    }
  } catch (error) {
    console.log('Error', error);

    console.error(error instanceof Error ? error.message : error);
    return Promise.reject();
  }
};
