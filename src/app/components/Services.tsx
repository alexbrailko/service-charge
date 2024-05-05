import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import {
  URL_PROPERTY_MANAGEMENT,
  URL_RESOURCES,
  URL_SERVICE_CHARGE_FINDER
} from '../constants';

const data = [
  {
    title: 'Service Charge finder',
    description:
      'In the context of leasehold property, a service charge refers to the fee paid by leaseholders to the landlord or management company for the maintenance and upkeep of the building and communal areas.',
    imgUrl: '/info-1.jpg',
    url: URL_SERVICE_CHARGE_FINDER
  },
  {
    title: 'Valuable Resources and Tools for Real Estate Investors',
    description:
      'There are plenty of valuable resources across the internet that help homeowners and investors to take well-informed decisions when purchasing the property.',
    imgUrl: '/info-2.jpg',
    url: URL_RESOURCES
  },
  {
    title: 'Property & Block Management ',
    description:
      'Numerous prominent high street property management firms offer comprehensive lettings and property management services to ensure peace of mind. For instance, Kinleigh Folkard & Hayward is a leading provider...',
    imgUrl: '/info-3.jpg',
    url: URL_PROPERTY_MANAGEMENT
  }
];

interface ServicesProps {}

export const Services: FC<ServicesProps> = ({}) => {
  return (
    <div className="container mb-8 mt-16  sm:mt-10">
      <div className="text-center mb-10 sm:mb-8">
        <h2>Services & Checkers</h2>
        <hr className="w-[80px] h-[3px] bg-highlight inline-block	" />
      </div>

      <div className="grid-cols-3 gap-[30px] grid sm:block sm:space-y-7">
        {data.map(({ title, description, imgUrl, url }) => (
          <div
            key={title}
            className="rounded-b-md bg-white box-shadow flex flex-col"
          >
            <Image
              src={imgUrl}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-t-md"
            />
            <div className="py-2 min-h-[100px] px-[27px] pt-[25px] pb-[26px] flex-1 flex flex-col">
              <div className="mb-[28px] flex: 1">
                <h4>{title}</h4>
                <div className="text-sm leading-[22px]">{description}</div>
              </div>
              <div>
                <Button title="Read more" url={url} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
