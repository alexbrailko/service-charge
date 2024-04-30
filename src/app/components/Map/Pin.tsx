'use client';
import { modifyfullAddressString } from '@/app/helpers/common';
//import { numberWithCommas } from '@/app/helpers/listings';
import { Listing } from '@prisma/client';
import { Icon } from 'leaflet';
import React, { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';

interface PinProps {
  item: Listing;
}

export const Pin: FC<PinProps> = ({ item }) => {
  const coords = item.coordinates?.split(/\s*,\s*/) || [];

  const customIcon = new Icon({
    iconUrl: '/pin.png',
    iconSize: [44, 44]
  });

  return (
    <Marker
      key={item.id}
      position={[Number(coords[0]), Number(coords[1])]}
      icon={customIcon}
    >
      <Popup>
        <div className="px-2">
          <div>
            <span className="font-bold">Address:</span>{' '}
            {modifyfullAddressString(item.addressFull)}
          </div>

          <div className="mt-1">
            <span className="font-bold">Service charge:</span> £
            {item.serviceCharge}
            {' (per year)'}
          </div>
          {item.groundRent && (
            <div className="mt-1">
              {' '}
              <span className="font-bold">Ground rent:</span> £{item.groundRent}
            </div>
          )}
        </div>
      </Popup>
    </Marker>
  );
};
