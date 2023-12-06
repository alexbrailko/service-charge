'use client';
import { FC, useMemo } from 'react';
import { Listing } from '@prisma/client';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';
import { numberWithCommas } from '@/app/helpers/listings';

export const ListingCard: FC<Listing> = ({
  title,
  listingPrice,
  beds,
  baths,
  address,
  serviceCharge,
  groundRent,
  datePosted,
  pictures,
  url,
  area
}) => {
  const pics = useMemo(() => {
    if (!pictures) return [];

    return JSON.parse(pictures).map((pic: any) => {
      return {
        original: pic.small.replace(/\s+/g, '').replace(':p', ''),
        fullscreen: pic.large.replace(/\s+/g, '').replace(':p', ''),
        loading: 'lazy'
      };
    });
  }, [pictures]);

  return (
    <div className="bg-gray-50 border border-gray-300 text-gray-900 rounded mb-5 p-2 flex">
      <div className="imageContainer w-2/5">
        <ImageGallery
          items={pics}
          showThumbnails={false}
          showPlayButton={false}
          showIndex
          lazyLoad
        />
      </div>
      <div className="textContainer w-3/5 text-left pl-5 relative">
        <div className="text-xl	font-bold mb-2">
          £{numberWithCommas(listingPrice)}
        </div>
        <div className="text-lg font-medium">{address}</div>
        {area && (
          <div className="text-lg font-medium mt-2 mb-2">
            Area: {area} sq. ft
          </div>
        )}
        <div className="text-lg font-medium">
          Service charge:{' '}
          <span className="font-bold">£{numberWithCommas(serviceCharge)}</span>
        </div>
        {groundRent ? (
          <div>
            Ground rent:{' '}
            <span className="font-bold">£{numberWithCommas(groundRent)}</span>
          </div>
        ) : null}

        <div className="mt-3">
          <div className="flex">
            {beds ? <div>Beds: {beds}</div> : null}
            {baths ? <div className="ml-3">Baths: {baths}</div> : null}
          </div>
        </div>
        <div className="mt-3 text-sm">
          Date posted: {moment(datePosted).format('MMM YYYY')}
        </div>
        <div className="text-right absolute right-1 bottom-0">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
