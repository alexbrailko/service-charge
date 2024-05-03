import { numberWithCommas } from '@/app/helpers/listings';
import { getListingsScHistory } from '@/app/queries/listingsActions';
import { Listing } from '@prisma/client';
import { format } from 'date-fns';
import React, { FC, useEffect, useState } from 'react';

interface ServiceChargeHistoryProps {
  address: string;
  beds: number;
}

export const ServiceChargeHistory: FC<ServiceChargeHistoryProps> = ({
  address,
  beds
}) => {
  const [data, setData] = useState<Listing[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getListingsScHistory(address, beds);

      if (res.length) {
        const newArray = res.slice(1);
        setData(newArray);
      }
    };

    getData();
  }, [address]);

  if (!data.length) {
    return null;
  }

  return (
    <div className="sm:mb-4">
      <h4 className="text-[24px]">Service charge history </h4>
      {!!data &&
        data.map((d) => (
          <div
            key={d.id}
            className="flex justify-between bg-light mb-1 py-2 px-3 rounded-md items-center sm:block"
          >
            <div>{format(d.datePosted, 'dd.MM.yyyy')}</div>

            <div>
              <div>
                Service charge:{' '}
                <span className="font-semibold">£{d.serviceCharge} (Year)</span>
              </div>
              <div>
                Price:{' '}
                <span className="font-semibold">
                  £{numberWithCommas(d.listingPrice)}
                </span>
              </div>
              {d.area && (
                <div>
                  Area:{' '}
                  {d.area && (
                    <span className="font-semibold">{d.area} sq. ft</span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
