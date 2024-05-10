import { NextResponse } from 'next/server';

const getCoordinates = async (address: string): Promise<string | false> => {
  // Encode the address string
  const encodedAddress = encodeURIComponent(address);

  const req = `https://nominatim.openstreetmap.org/search.php?q=${encodedAddress}&format=jsonv2`;

  try {
    const response = await fetch(req);
    const data = await response.json();

    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      return `${lat},${lon}`;
    } else {
      return false;
    }
  } catch (error) {
    console.log('Error OpenStreetMap api request:', error);
    throw error; // Re-throw the error for potential handling elsewhere
  }
};

export async function POST(req: Request) {
  const { address } = await req.json();

  try {
    const coordinates = await getCoordinates(address);

    return NextResponse.json(
      {
        coordinates
      },
      { status: 200 }
    );
  } catch (error) {
    const err = error instanceof Error ? error.message : error;
    console.error('Address not found:', err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
