'use client';
import { getListingsResults } from '@/app/queries/listingsActions';
import { useListingsStore } from '@/app/store/listings';
import React, { FC, useEffect } from 'react';
import { ListingCard } from './ListingCard';
import Pagination from '../../../components/ui/Pagination/Pagination';
import { FiltersProps } from './Filters';
import { Listing } from '@prisma/client';

interface ListingsListProps {
  listings: Listing[];
  isLoading: boolean;
  listingsNotFound: boolean;
}

export const ListingsList: FC<ListingsListProps> = ({
  listings,
  isLoading,
  listingsNotFound
}) => {
  const perPage = 6;
  const currentPage = useListingsStore((state) => state.currentPage);
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = listings.slice(indexOfFirstPost, indexOfLastPost);
  const setCurrentPage = useListingsStore((state) => state.setCurrentPage);

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
