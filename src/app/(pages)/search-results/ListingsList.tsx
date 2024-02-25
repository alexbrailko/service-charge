'use client';
import { useListingsStore } from '@/app/store/listings';
import { redirect, useSearchParams } from 'next/navigation';
import React, { FC } from 'react';

interface ListingsListProps {}

export const ListingsList: FC<ListingsListProps> = ({}) => {
  const searchParams = useSearchParams();
  const listings = useListingsStore((state) => state.listings);
  console.log('listings', listings);

  // if (!searchParams?.size) {
  //   redirect('/');
  // }

  return <div className="container">ListingsList</div>;
};
