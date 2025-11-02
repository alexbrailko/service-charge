import React, { FC, useMemo, useState } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import { Listing } from '@prisma/client';
import { PinIcon } from '@/app/images/svg/PinIcon';
import { SquareIconBig } from '@/app/images/svg/SquareIconBig';
import { BedroomIconBig } from '@/app/images/svg/BedroomIconBig';
import { BathroomIconBig } from '@/app/images/svg/BathroomIconBig';
// import ReactImageGallery from 'react-image-gallery';
// import { LeftArrowIcon } from '@/app/images/svg/LeftArrow';
// import { RightArrowIcon } from '@/app/images/svg/RightArrow';
import { numberWithCommas } from '@/app/helpers/listings';
import { modifyfullAddressString } from '@/app/helpers/common';
import { ServiceChargeHistory } from './ServiceChargeHistory';

interface SinglePropertyProps {
  data: Listing;
}

export const SingleProperty: FC<SinglePropertyProps> = ({ data }) => {
  const MapLeaflet = useMemo(
    () => dynamic(() => import('@/app/components/Map/Map'), { ssr: false }),
    []
  );

  const {
    id,
    addressFull,
    datePosted,
    area,
    beds,
    baths,
    listingPrice,
    serviceCharge,
    groundRent
  } = data;

  const [imgSrc, setImgSrc] = useState(
    `${process.env.NEXT_PUBLIC_IMAGES_SERVER_URL}/${id}.webp`
  );

  const [imageNotFound, setImageNotFound] = useState(false);

  const address = modifyfullAddressString(addressFull);

  // const pics = useMemo(() => {
  //   if (!pictures) return [];

  //   return JSON.parse(pictures).map((pic: any) => {
  //     return {
  //       original: pic.small.replace(/\s+/g, '').replace(':p', ''),
  //       fullscreen: pic.large.replace(/\s+/g, '').replace(':p', ''),
  //       loading: 'lazy'
  //     };
  //   });
  // }, [pictures]);

  return (
    <div className="mb-[70px]">
      <Breadcrumbs title={address} />
      <div className="grid-cols-2 gap-[30px] grid mt-10 sm:block">
        <div>
          {/* <div className="text-grey2 text-[15px mb-2">
            Posted {format(datePosted, 'dd MMMM yyyy')}
          </div> */}
          {/* <h1 className="sm:text-[28px] sm:leading-[42px]">{title}</h1> */}
          <div className="text-lg flex">
            <div>
              <PinIcon size="18" className="mr-[9px] mt-[4px]" />
            </div>

            {address}
          </div>
          <div className="flex items-center mt-5 mb-6 space-x-7 sm:space-x-0 sm:justify-between">
            <div className="flex items-center ">
              <BedroomIconBig />
              <div className="ml-[10px] sm:ml-[6px]">
                {beds && (
                  <div className="font-bold text-[17px] sm:text-[16px] leading-[21px]">
                    {beds}
                  </div>
                )}

                <div className="text-[15px] sm:text-[14px] leading-[21px]">
                  {beds ? 'Bedroom' : 'Studio'}{' '}
                </div>
              </div>
            </div>

            {baths && (
              <div className="flex items-center ">
                <BathroomIconBig />
                <div className="ml-[10px] sm:ml-[6px]">
                  <div className="font-bold text-[17px] sm:text-[16px] leading-[21px]">
                    {baths}
                  </div>
                  <div className="text-[15px] sm:text-[14px] leading-[21px]">
                    Bathroom
                  </div>
                </div>
              </div>
            )}
            {area && (
              <div className="flex items-center ">
                <SquareIconBig />
                <div className="ml-[10px] sm:ml-[6px]">
                  <div className="font-bold text-[17px] sm:text-[16px] leading-[21px]">
                    {area} sq. ft
                  </div>
                  <div className="text-[15px] sm:text-[14px] leading-[21px]">
                    Square
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-light rounded-md p-[15px] mb-5 flex text-base md:block">
            <div className="ml-7 basis-[50%] md:ml-0">
              <div>
                Service charge:{' '}
                <span className="font-bold">
                  £{Math.round(serviceCharge / 12)}
                </span>{' '}
                {'(Monthly)'}
              </div>
              <div>
                Service charge:{' '}
                <span className="font-bold">£{serviceCharge}</span> {'(Year)'}
              </div>
              {groundRent && (
                <div>
                  Ground rent: <span className="font-bold">£{groundRent}</span>
                </div>
              )}
              <div className="text-[13px] text-[#8E8E99]">
                Last update date: {format(datePosted, 'dd.MM.yyyy')}
              </div>
            </div>
            <div className="basis-[50%] border-l-[1px]	border-[#D2DCD9] pl-5 md:border-0 md:pl-0 flex items-center">
              <div>
                <div className="text-[18px]">Property price</div>
                <div className="text-[38px] leading-[50px] sm:text-[32px] sm:leading-[43px] font-bold">
                  £{numberWithCommas(listingPrice)}
                </div>
              </div>
            </div>
          </div>
          <ServiceChargeHistory address={addressFull} beds={beds || 0} />
        </div>
        <div>
          {/* {!imageNotFound && (
            <Image
              src={imgSrc}
              alt={address}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} // optional
              className="rounded-md mb-[20px]"
              //loading="lazy"
              priority={true}
              onError={() => {
                setImageNotFound(true);
              }}
            />
          )} */}

          {/* <ReactImageGallery
            items={pics}
            showThumbnails={false}
            showPlayButton={false}
            lazyLoad
            additionalClass="full"
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
          <div className="">
            <MapLeaflet items={[data]} isSinglePropertyPage />
          </div>
        </div>
      </div>
    </div>
  );
};
