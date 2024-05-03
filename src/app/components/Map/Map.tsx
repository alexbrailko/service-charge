'use client';
import { Listing } from '@prisma/client';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngBounds, Map } from 'leaflet';
import { Pin } from './Pin';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { cn } from '@/app/helpers/utils';

interface MapProps {
  items: Listing[];
  zoom?: number;
  height?: string;
  borderRadius?: string;
  fullScreenButton?: boolean;
  style?: string;
}

const MapLeaflet: FC<MapProps> = ({ items, style, zoom = 18 }) => {
  const [map, setMap] = useState<Map | null>(null);

  const getMapBounds = useCallback(
    (items: Listing[]) => {
      const bounds = new LatLngBounds([]);
      items.forEach((i) => {
        const coords = i.coordinates?.split(/\s*,\s*/) || [];
        bounds.extend([Number(coords[0]), Number(coords[1])]);
      });
      return bounds;
    },
    [items]
  );

  const bounds = getMapBounds(items);

  useEffect(() => {
    () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  return (
    <MapContainer
      center={bounds.getCenter()}
      bounds={bounds}
      scrollWheelZoom={false}
      className={cn('w-full hello h-[300px] rounded-md', style)}
      ref={setMap}
      // zoom={10}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default MapLeaflet;
