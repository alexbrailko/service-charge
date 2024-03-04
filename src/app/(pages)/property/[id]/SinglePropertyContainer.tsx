'use client';

import { getListingById } from '@/app/queries/listingsActions';
import { useListingsStore } from '@/app/store/listings';
import { Listing } from '@prisma/client';

import React, { FC, useEffect, useState } from 'react';
import { SingleProperty } from './SingleProperty';

interface SinglePropertyContainerProps {
  listingId: string;
}

export const SinglePropertyContainer: FC<SinglePropertyContainerProps> = ({
  listingId
}) => {
  const listings = useListingsStore((state) => state.listings);

  const [listing, setListing] = useState<Listing>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // take listing from local state
  useEffect(() => {
    if (listings.length) {
      const l = listings.filter((l) => l.id === listingId);

      if (l.length) {
        const listing = l[0];

        setListing(listing);
      }
    }
  }, [listings]);

  // take listing from api
  useEffect(() => {
    async function getListing() {
      setLoading(true);

      const res = await getListingById(listingId);
      setLoading(false);

      if (!res) {
        setError(true);
      }

      if (res && error) {
        setError(false);
      }

      if (res) {
        setListing(res);
      }
    }

    if (!listing) {
      getListing();
    }
  }, [listing]);

  return (
    <div className="container">
      {!error && (loading || !listing) && (
        <div className="text-center text-lg color-dark my-10">Loading...</div>
      )}

      {!listing && error && (
        <div className="container text-center my-10">
          Something went wrong. Please try again later
        </div>
      )}

      {!loading && listing && <SingleProperty data={listing} />}
    </div>
  );
};
