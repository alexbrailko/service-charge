import { getListingById } from '@/app/queries/listingsActions';
import React, { FC } from 'react';

interface PropertyPageProps {
  params: { id: string };
}

const PropertyPage: FC<PropertyPageProps> = async ({ params }) => {
  const property = await getListingById(params.id);

  console.log('property', property);

  return <div>page</div>;
};

export default PropertyPage;
