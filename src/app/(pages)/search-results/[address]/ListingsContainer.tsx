'use client';
import React, { FC, useEffect } from 'react';
import { ListingsList } from './ListingsList';
import { useListingsStore } from '@/app/store/listings';
import { getListingsResults } from '@/app/queries/listingsActions';
import { FiltersProps } from './Filters';

interface ListingsContainerProps {
  address: string;
}

export const ListingsContainer: FC<ListingsContainerProps> = ({ address }) => {
  const listings = useListingsStore((state) => state.listings);
  const addListings = useListingsStore((state) => state.addListings);
  const setIsLoading = useListingsStore((state) => state.setLoading);
  const setListingsError = useListingsStore((state) => state.setError);
  const listingsNotFound = useListingsStore((state) => state.listingsNotFound);
  const setListingsNotFound = useListingsStore(
    (state) => state.setListingsNotFound
  );
  const isLoading = useListingsStore((state) => state.loading);
  const filters = useListingsStore((state) => state.filters);

  const getListings = async (address: string, filters?: FiltersProps) => {
    try {
      setIsLoading(true);
      const results = await getListingsResults(address, filters);

      if (!results.length) {
        setListingsNotFound(true);
      } else {
        setListingsNotFound(false);
      }

      addListings(results);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setListingsError(true);
    }
  };

  useEffect(() => {
    getListings(address);
  }, [address]);

  useEffect(() => {
    const hasValue = Object.values(filters).some(
      (value) => value !== null && value !== undefined
    );
    if (hasValue) {
      getListings(address, filters);
    }
    getListings(address, filters);
  }, [filters]);

  return (
    <ListingsList
      listings={listings}
      isLoading={isLoading}
      listingsNotFound={listingsNotFound}
    />
  );
};
