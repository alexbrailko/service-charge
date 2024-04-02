var count = 0;
export const getMapPicture = async (
  coords: string,
  type: string = 'BirdsEye'
): Promise<string | false> => {
  try {
    const imgResponse = await fetch(
      `https://dev.virtualearth.net/REST/v1/Imagery/Map/${type}/${coords}/19?mapSize=760,460&pp=${coords};128;&mapLayer=Basemap,Buildings&key=${process.env.NEXT_PUBLIC_BING_API_KEY}`
    );

    if (imgResponse.status !== 200 && !count) {
      count++;
      return getMapPicture(coords, 'Aerial');
    }
    if (count) {
      count = 0;
    }

    return imgResponse?.url;
  } catch (e) {
    return false;
  }
};
