'use client';
import { Listing } from '@prisma/client';
import React, { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
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
  // const array = items[0].coordinates?.split(',') || [];

  // const markers = [
  //   { position: [51.576251, 0.118821], popup: 'Marker 1 content' },
  //   { position: [0.118821, 0.178319], popup: 'Marker 2 content' }
  //   // ... more markers
  // ];

  function getMapBounds(items: Listing[]) {
    const bounds = new LatLngBounds([]);
    items.forEach((i) => {
      const coords = i.coordinates?.split(/\s*,\s*/) || [];
      bounds.extend([Number(coords[0]), Number(coords[1])]);
    });
    // const center = bounds.getCenter();

    return bounds;
  }

  const bounds = getMapBounds(items);

  // const center = getMapBounds(items).center;

  return (
    <MapContainer
      center={bounds.getCenter()}
      bounds={bounds}
      scrollWheelZoom={false}
      className={cn('w-full hello h-[300px] rounded-md', style)}
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
