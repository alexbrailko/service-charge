import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindowF
} from '@react-google-maps/api';
import { Listing } from '@prisma/client';

interface MapProps {
  markers: Listing[];
}

const calculateCenter = (markers: Listing[]) => {
  if (markers.length === 0) {
    return { lat: 0, lng: 0 }; // Default center if no markers
  }

  // Calculate the average coordinates of all markers
  const { sumLat, sumLng } = markers.reduce(
    (accumulator, marker) => {
      const coords = marker.coordinates?.split(/\s*,\s*/) || [];

      return {
        sumLat: accumulator.sumLat + Number(coords[0]),
        sumLng: accumulator.sumLng + Number(coords[1])
      };
    },
    { sumLat: 0, sumLng: 0 }
  );

  return {
    lat: sumLat / markers.length,
    lng: sumLng / markers.length
  };
};

export const Map: FC<MapProps> = ({ markers }) => {
  const [map, setMap] = React.useState<google.maps.Map>();
  const [selectedMarker, setSelectedMarker] = useState<Listing | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds();

      for (let i = 0; i < markers.length; i++) {
        const coords = markers[i].coordinates?.split(/\s*,\s*/) || [];

        //extend the bounds to include each marker's position
        bounds.extend(
          new window.google.maps.LatLng(Number(coords[0]), Number(coords[1]))
        );
      }

      map.fitBounds(bounds);

      setMap(map);
    },
    [map, markers]
  );

  const onUnmount = React.useCallback(function callback() {
    setMap(undefined);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '270px' }}
      center={calculateCenter(markers)}
      zoom={10}
      // options={{
      //   restriction: {
      //     latLngBounds: calculateBounds(markers),
      //     strictBounds: false
      //   }
      // }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((marker) => {
        const coords = marker.coordinates?.split(/\s*,\s*/) || [];
        return (
          <MarkerF
            key={marker.id}
            position={{ lat: Number(coords[0]), lng: Number(coords[1]) }}
            onClick={() => setSelectedMarker(marker)}
          >
            {selectedMarker === marker && (
              <InfoWindowF onCloseClick={() => setSelectedMarker(null)}>
                <div>
                  <div>Address: {marker.address}</div>
                  <div>Price: {marker.listingPrice}</div>

                  <div>Service charge: {marker.serviceCharge}</div>
                  {marker.groundRent && (
                    <div>Ground rent: {marker.groundRent}</div>
                  )}
                </div>
              </InfoWindowF>
            )}
          </MarkerF>
        );
      })}

      <></>
    </GoogleMap>
  ) : (
    <div style={{ minHeight: 270 }} />
  );
};
