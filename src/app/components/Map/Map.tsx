// 'use client';
// import { Listing } from '@prisma/client';
// import React, { FC } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import { Pin } from './Pin';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// interface MapProps {
//   items: Listing[];
//   singleMarker?: boolean;
//   zoom?: number;
//   height?: string;
//   borderRadius?: string;
//   fullScreenButton?: boolean;
// }

// const MapLeaflet: FC<MapProps> = ({ items }) => {
//   const array = items[0].coordinates?.split(',') || [];

//   console.log('items', array[0]);

//   return (
//     <MapContainer
//       center={[Number(array[0]), Number(array[1])]}
//       zoom={15}
//       scrollWheelZoom={false}
//       className="w-full hello"
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {items.map((item) => (
//         <Pin item={item} key={item.id} />
//       ))}
//     </MapContainer>
//   );
// };

// export default MapLeaflet;
