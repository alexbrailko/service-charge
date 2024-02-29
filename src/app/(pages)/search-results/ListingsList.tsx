'use client';
import { getListingsResults } from '@/app/queries/listingsActions';
import { useListingsStore } from '@/app/store/listings';
import React, { FC, useEffect } from 'react';
import { ListingCard } from './ListingCard';
import Pagination from '../../components/ui/Pagination/Pagination';
import { FiltersProps } from './Filters';

interface ListingsListProps {
  address: string;
}

export const ListingsList: FC<ListingsListProps> = ({ address }) => {
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

  const perPage = 6;
  const setCurrentPage = useListingsStore((state) => state.setCurrentPage);
  const currentPage = useListingsStore((state) => state.currentPage);
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = listings.slice(indexOfFirstPost, indexOfLastPost);

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

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container my-12">
      {isLoading && (
        <div className="text-center text-lg color-dark">Loading...</div>
      )}

      {!isLoading && !!listings.length && (
        <div className="grid-cols-3 gap-[30px] grid sm:block sm:space-y-7">
          {currentPosts.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      )}

      {listingsNotFound && !isLoading && (
        <div className="text-center text-lg color-dark">
          Sorry, we could not find any properties
        </div>
      )}

      {!!listings.length && (
        <Pagination
          className="mt-10 justify-center"
          currentPage={currentPage}
          totalCount={listings.length}
          pageSize={perPage}
          onPageChange={onPageChange}
          showArrows={false}
        />
      )}
    </div>
  );
};
