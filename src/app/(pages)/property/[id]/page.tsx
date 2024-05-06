import { Metadata } from 'next';
import React, { FC } from 'react';
import { SinglePropertyContainer } from './SinglePropertyContainer';
import { getListingById } from '@/app/queries/listingsActions';

interface PropertyPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params
}: PropertyPageProps): Promise<Metadata> {
  // read route params
  const id = params.id;

  const property = await getListingById(id);

  return {
    title: `Property at ${property?.addressFull}`,
    description: `Service charge information for property at ${property?.addressFull}`
  };
}

const PropertyPage: FC<PropertyPageProps> = async ({ params }) => {
  return <SinglePropertyContainer listingId={params.id} />;
};

export default PropertyPage;
