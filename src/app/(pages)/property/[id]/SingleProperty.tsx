import React, { FC } from 'react';
import { format } from 'date-fns';

import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import { Listing } from '@prisma/client';

interface SinglePropertyProps {
  data: Listing;
}

export const SingleProperty: FC<SinglePropertyProps> = ({ data }) => {
  const { title, datePosted } = data;

  return (
    <div className="container">
      <Breadcrumbs title={title} />
      <div className="text-grey2 text-[15px] mt-9 mb-5">
        Posted {format(datePosted, 'dd MMMM yyyy')}
      </div>
    </div>
  );
};
