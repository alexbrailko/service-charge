'use client';
import React, { FC, useState } from 'react';
import { Map } from './Map';
import Image from 'next/image';
import { useListingsStore } from '@/app/store/listings';
import { Listing } from '@prisma/client';

interface MapWrapperProps {}

export const MapWrapper: FC<MapWrapperProps> = ({}) => {
  const [show, setShow] = useState(false);
  const listings = useListingsStore((state) => state.listings) as Listing[];

  return (
    <>
      <div className="w-full h-[270px]">
        {!show && (
          <>
            {/* <img src={'/map-thumb.png'} /> */}
            <Image
              src={'/map-thumb.png'}
              alt="a"
              width={200}
              height={200}
              className="w-full"
            />
          </>
        )}
        {show && <Map markers={listings} />}
      </div>
      {!!listings.length && (
        <button
          className="bg-dark rounded-2xl mt-3 w-full text-white py-3 uppercase font-medium"
          onClick={() => setShow(true)}
        >
          Show on Map
        </button>
      )}
    </>
  );
};
