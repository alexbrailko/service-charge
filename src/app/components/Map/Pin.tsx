// import { Listing } from '@prisma/client';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { FC } from 'react';
// import { Marker, Popup } from 'react-leaflet';

// interface PinProps {
//   item: Listing;
// }

// export const Pin: FC<PinProps> = ({ item }) => {
//   const coords = item.coordinates?.split(/\s*,\s*/) || [];
//   const pic = item.pictures.split(',');

//   return (
//     <Marker position={[Number(coords[0]), Number(coords[1])]}>
//       <Popup>
//         <div className="popupContainer">
//           <Image src={pic[0]} alt={item.title} width={0} height={0} />

//           <div className="textContainer">
//             <Link href={`/${item.id}`}>{item.title}</Link>
//           </div>
//         </div>
//       </Popup>
//     </Marker>
//   );
// };
