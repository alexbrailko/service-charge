import { Metadata } from 'next';
import React, { FC } from 'react';
import { SinglePropertyContainer } from './SinglePropertyContainer';
import { useListingsStore } from '@/app/store/listings';

interface PropertyPageProps {
  params: { id: string };
}

// export async function generateMetadata({
//   params
// }: PropertyPageProps): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   const listings = useListingsStore((state) => state.listings);
//   const listing = listings.filter((l) => l.id === id);

//   return {
//     title: `Property - ${listing[0]}`
//   };
// }

const PropertyPage: FC<PropertyPageProps> = async ({ params }) => {
  return <SinglePropertyContainer listingId={params.id} />;
};

export default PropertyPage;
