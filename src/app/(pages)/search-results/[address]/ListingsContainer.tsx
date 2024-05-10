'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ListingsList } from './ListingsList';
import { useListingsStore } from '@/app/store/listings';
import {
  getClosestListings,
  getCoordinatesByAddress,
  getListingsResults
} from '@/app/queries/listingsActions';
import { FiltersProps } from './Filters';
import { objHasValue } from '@/app/helpers/utils';

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
  const prevFiltersSelected = useRef(false);
  const setCurrentPage = useListingsStore((state) => state.setCurrentPage);

  const [closestListingsMessage, setClosestListingsMessage] = useState(false);

  const getListings = async (address: string, filters?: FiltersProps) => {
    try {
      setIsLoading(true);
      let results = await getListingsResults(address, filters);

      if (!results.length) {
        const coords = await getCoordinatesByAddress(address);

        if (coords) {
          setClosestListingsMessage(true);
          results = await getClosestListings(coords);
        }

        if (!coords) {
          setListingsNotFound(true);
        }
      } else {
        setListingsNotFound(false);
        setClosestListingsMessage(false);
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
    const hasValue = objHasValue(filters);

    if (hasValue) {
      setCurrentPage(1);
      getListings(address, filters);
      prevFiltersSelected.current = true;
    }
    if (!hasValue && prevFiltersSelected.current) {
      setCurrentPage(1);
      getListings(address);
      prevFiltersSelected.current = false;
    }
  }, [filters]);

  return (
    <ListingsList
      listings={listings}
      isLoading={isLoading}
      listingsNotFound={listingsNotFound}
      showClosestListingsMessage={closestListingsMessage}
    />
  );
};
