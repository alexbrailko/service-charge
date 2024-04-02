// 'use client';
// import { numberWithCommas } from '@/app/helpers/listings';
// import { Listing } from '@prisma/client';
// import React, { FC } from 'react';
// import { Marker, Popup } from 'react-leaflet';

// interface PinProps {
//   item: Listing;
// }

// export const Pin: FC<PinProps> = ({ item }) => {
//   const coords = item.coordinates?.split(/\s*,\s*/) || [];

//   return (
//     <Marker key={item.id} position={[Number(coords[0]), Number(coords[1])]}>
//       <Popup>
//         <div className="px-2">
//           <div>Address: {item.address}</div>
//           <div className="my-1">
//             Price: £{numberWithCommas(item.listingPrice)}
//           </div>

//           <div>
//             Service charge: £{item.serviceCharge}
//             {' (per year)'}
//           </div>
//           {item.groundRent && <div>Ground rent: £{item.groundRent}</div>}
//         </div>
//       </Popup>
//     </Marker>
//   );
// };
