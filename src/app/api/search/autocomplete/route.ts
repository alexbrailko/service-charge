import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  let { searchQuery } = await req.json();
  searchQuery.trim();

  if (!searchQuery || searchQuery.length < 2) {
    return NextResponse.json({ results: [] }, { status: 400 });
  }

  const normalizedQuery = searchQuery.trim().toUpperCase().replace(/\s+/g, '');

  try {
    const results = await prisma.$queryRaw`
      SELECT id, addressFull, postCode
      FROM Listing
      WHERE 
        -- Match against normalized postcode (no spaces)
        REPLACE(UPPER(postCode), ' ', '') LIKE ${normalizedQuery + '%'}
        -- Match against original postcode format
        OR UPPER(postCode) LIKE ${searchQuery.toUpperCase() + '%'}
        -- Match against address
        OR UPPER(addressFull) LIKE ${`%${searchQuery.toUpperCase()}%`}
      LIMIT 10
    `;

    const formattedResults = (results as any[]).map((result) => ({
      ...result,
      // Keep original postcode format from database
      postCode: result.postCode
    }));

    return NextResponse.json(
      {
        results: formattedResults
      },
      { status: 200 }
    );
  } catch (error) {
    const err = error instanceof Error ? error.message : error;
    console.error('Search failed:', err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
