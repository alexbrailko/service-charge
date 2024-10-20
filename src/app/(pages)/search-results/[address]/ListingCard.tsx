import { modifyfullAddressString } from '@/app/helpers/common';
import { numberWithCommas } from '@/app/helpers/listings';
import { BathroomIcon } from '@/app/images/svg/BathroomIcon';
import { BedroomIcon } from '@/app/images/svg/BedroomIcon';
import { PinIcon } from '@/app/images/svg/PinIcon';
import { SquareIcon } from '@/app/images/svg/SquareIcon';
import { Listing } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
//import ImageGallery from 'react-image-gallery';
//import { LeftArrowIcon } from '@/app/images/svg/LeftArrow';
//import { RightArrowIcon } from '@/app/images/svg/RightArrow';

export const ListingCard: FC<Listing> = ({
  listingPrice,
  beds,
  baths,
  addressFull,
  serviceCharge,
  groundRent,
  address,
  area,
  id
}) => {
  // const pics = useMemo(() => {
  //   if (!pictures) return [];

  //   return JSON.parse(pictures).map((pic: any) => {
  //     return {
  //       original: pic.small.replace(/\s+/g, '').replace(':p', ''),
  //       loading: 'lazy'
  //     };
  //   });
  // }, [pictures]);

  const [imgSrc, setImgSrc] = useState(
    `${process.env.NEXT_PUBLIC_IMAGES_SERVER_URL}/${id}.webp`
  );

  return (
    <div className="rounded-md box-shadow flex flex-col">
      <Link
        href={`/property/${id}`}
        className=" flex-1 hover:bg-light transition-all duration-300"
      >
        <div>
          <Image
            src={imgSrc}
            alt={address}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
            className="rounded-md"
            loading="lazy"
            onError={() => {
              setImgSrc('/image-not-found.png');
            }}
          />
          {/* <ImageGallery
            items={[
              {
                original: pictures,
                loading: 'lazy'
              }
            ]}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            lazyLoad
            renderLeftNav={(onClick, disabled) => (
              <button
                className="image-gallery-icon image-gallery-left-nav"
                aria-label="Prev Slide"
                onClick={onClick}
                disabled={disabled}
              >
                <LeftArrowIcon />
              </button>
            )}
            renderRightNav={(onClick, disabled) => (
              <button
                className="image-gallery-icon image-gallery-right-nav"
                aria-label="Next Slide"
                onClick={onClick}
                disabled={disabled}
              >
                <RightArrowIcon />
              </button>
            )}
          /> */}
        </div>

        <div className="py-[20px] px-[26px]">
          <div className="text-[18px] color-dark">
            Service charge:{' '}
            <span className="text-[18px] font-bold">
              £{numberWithCommas(serviceCharge)}
            </span>
          </div>
          <div className="flex text-[14px] mt-1">
            <div className="mr-2 ">
              <PinIcon className="mt-[2px]" />
            </div>
            {modifyfullAddressString(addressFull)}
          </div>
          <div className="text-base mt-3">
            Property price:{' '}
            <span className="font-bold">£{numberWithCommas(listingPrice)}</span>
          </div>
          {groundRent ? (
            <div className="text-base mt-0.5">
              Ground rent:{' '}
              <span className="font-bold">£{numberWithCommas(groundRent)}</span>
            </div>
          ) : null}
          <div className="flex items-center mt-5 space-x-3">
            <div className="flex items-center ">
              <BedroomIcon />
              <div className="ml-[8px]">
                {beds && (
                  <div className="font-bold text-[14px] leading-[17px]">
                    {beds}
                  </div>
                )}

                <div className="text-[12px] leading-[17px]">
                  {beds ? 'Bedroom' : 'Studio'}{' '}
                </div>
              </div>
            </div>

            {baths && (
              <div className="flex items-center ">
                <BathroomIcon />
                <div className="ml-[8px]">
                  <div className="font-bold text-[14px] leading-[17px]">
                    {baths}
                  </div>
                  <div className="text-[12px] leading-[17px]">Bathroom</div>
                </div>
              </div>
            )}
            {area && (
              <div className="flex items-center ">
                <SquareIcon />
                <div className="ml-[8px]">
                  <div className="font-bold text-[14px] leading-[17px]">
                    {area} sq. ft
                  </div>
                  <div className="text-[12px] leading-[17px]">Square</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
