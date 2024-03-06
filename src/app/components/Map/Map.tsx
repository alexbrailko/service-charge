// import { Listing } from '@prisma/client';
// import React, { FC } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import { Pin } from './Pin';

// interface MapProps {
//   items: Listing[];
//   singleMarker?: boolean;
//   zoom?: number;
//   height?: string;
//   borderRadius?: string;
//   fullScreenButton?: boolean;
// }

// export const Map: FC<MapProps> = ({ items }) => {
//   console.log('items', items);

//   return (
//     <MapContainer
//       center={[52.4797, -1.90269]}
//       zoom={7}
//       scrollWheelZoom={false}
//       className="w-full h-full hello"
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {items.map((item) => (
//         <Pin item={item} key={item.id} />
//       ))}
//     </MapContainer>
//   );
// };
