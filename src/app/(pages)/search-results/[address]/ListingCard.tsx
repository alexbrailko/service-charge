import { numberWithCommas } from '@/app/helpers/listings';
import { BathroomIcon } from '@/app/images/svg/BathroomIcon';
import { BedroomIcon } from '@/app/images/svg/BedroomIcon';
import { LeftArrowIcon } from '@/app/images/svg/LeftArrow';
import { PinIcon } from '@/app/images/svg/PinIcon';
import { RightArrowIcon } from '@/app/images/svg/RightArrow';
import { SquareIcon } from '@/app/images/svg/SquareIcon';
import { Listing } from '@prisma/client';
import Link from 'next/link';
import React, { FC, useMemo } from 'react';
import ImageGallery from 'react-image-gallery';

export const ListingCard: FC<Listing> = ({
  listingPrice,
  beds,
  baths,
  address,
  addressFull,
  serviceCharge,
  groundRent,
  datePosted,
  pictures,
  url,
  area,
  postCode,
  id
}) => {
  const pics = useMemo(() => {
    if (!pictures) return [];

    return JSON.parse(pictures).map((pic: any) => {
      return {
        original: pic.small.replace(/\s+/g, '').replace(':p', ''),
        // fullscreen: pic.large.replace(/\s+/g, '').replace(':p', ''),
        loading: 'lazy'
      };
    });
  }, [pictures]);

  const addressFullTrimmed = addressFull
    .replace(', England,', '')
    .replace('United Kingdom', '');

  return (
    <div className="rounded-md box-shadow flex flex-col">
      <div>
        <ImageGallery
          items={pics}
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
        />
      </div>
      <Link
        href={`/property/${id}`}
        className="py-[20px] px-[26px] flex-1 hover:bg-light transition-all duration-300"
      >
        <div className="text-[22px] font-bold color-dark">
          £{numberWithCommas(listingPrice)}
        </div>
        <div className="flex text-[14px] mt-1">
          <div className="mr-2 ">
            <PinIcon className="mt-[2px]" />
          </div>
          {addressFullTrimmed}
        </div>
        <div className="text-base mt-3">
          Service charge:{' '}
          <span className="font-bold">£{numberWithCommas(serviceCharge)}</span>
        </div>
        {groundRent ? (
          <div className="text-base mt-0.5">
            Ground rent:{' '}
            <span className="font-bold">£{numberWithCommas(groundRent)}</span>
          </div>
        ) : null}
        <div className="flex items-center mt-5 space-x-3">
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
          {beds && (
            <div className="flex items-center ">
              <BedroomIcon />
              <div className="ml-[8px]">
                <div className="font-bold text-[14px] leading-[17px]">
                  {beds}
                </div>
                <div className="text-[12px] leading-[17px]">Bedroom</div>
              </div>
            </div>
          )}
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
        </div>
      </Link>
    </div>
  );
};
