export const getMapPicture = async (coords: string) => {
  const imgResponse = await fetch(
    `https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/${coords}/19?mapSize=760,460&pp=${coords};128;&mapLayer=Basemap,Buildings&key=${process.env.NEXT_PUBLIC_BING_API_KEY}`
  );

  return imgResponse?.url;
};
