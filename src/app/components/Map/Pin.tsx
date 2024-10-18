'use client';
import { modifyfullAddressString } from '@/app/helpers/common';
import { Listing } from '@prisma/client';
import { Icon } from 'leaflet';
import React, { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Button } from '../ui/Button';

interface PinProps {
  item: Listing;
  hideButton?: boolean;
}

export const Pin: FC<PinProps> = ({ item, hideButton }) => {
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
          {!hideButton && (
            <div className="mt-3">
              <Button title="More details" url={`/property/${item.id}`} />
            </div>
          )}
        </div>
      </Popup>
    </Marker>
  );
};
