import React, { FC, useState } from 'react';
import { format } from 'date-fns';

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
import { Map } from '@/app/components/Map';
import Image from 'next/image';
//import Image from 'next/image';

interface SinglePropertyProps {
  data: Listing;
}

export const SingleProperty: FC<SinglePropertyProps> = ({ data }) => {
  const {
    id,
    address,
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

  console.log('imgSrc', imgSrc);

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
      <div className="grid-cols-2 gap-[30px] grid mt-9 sm:block">
        <div>
          <div className="text-grey2 text-[15px mb-2">
            Posted {format(datePosted, 'dd MMMM yyyy')}
          </div>
          {/* <h1 className="sm:text-[28px] sm:leading-[42px]">{title}</h1> */}
          <div className="text-lg flex items-center mt-1">
            <PinIcon size="18" className="mr-[9px]" />
            {address}
          </div>
          <div className="flex items-center mt-5 mb-6 space-x-8">
            {area && (
              <div className="flex items-center ">
                <SquareIconBig />
                <div className="ml-[10px]">
                  <div className="font-bold text-[17px] leading-[21px]">
                    {area} sq. ft
                  </div>
                  <div className="text-[15px] leading-[21px]">Square</div>
                </div>
              </div>
            )}
            {beds && (
              <div className="flex items-center ">
                <BedroomIconBig />
                <div className="ml-[10px]">
                  <div className="font-bold text-[17px] leading-[21px]">
                    {beds}
                  </div>
                  <div className="text-[15px] leading-[21px]">Bedroom</div>
                </div>
              </div>
            )}
            {baths && (
              <div className="flex items-center ">
                <BathroomIconBig />
                <div className="ml-[10px]">
                  <div className="font-bold text-[17px] leading-[21px]">
                    {baths}
                  </div>
                  <div className="text-[15px] leading-[21px]">Bathroom</div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-light rounded-md p-[15px] mb-5 flex text-base md:block">
            <div className="flex items-center ml-7 basis-[50%] md:ml-0">
              <div className="font-bold text-[42px] leading-[55px]">
                £{numberWithCommas(listingPrice)}
              </div>
            </div>
            <div className="basis-[50%] border-l-[1px]	border-[#D2DCD9] pl-5 md:border-0 md:pl-0">
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
            </div>
          </div>
        </div>
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
          <div className="mt-[20px]">
            <Map markers={[data]} singleMarker zoom={15} borderRadius="10px" />
          </div>
        </div>
      </div>
    </div>
  );
};
