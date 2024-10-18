'use client';

import React, { FC, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MapMarkerIcon } from '@/app/images/svg/MapMarkerIcon';
import dynamic from 'next/dynamic';

import { useListingsStore } from '@/app/store/listings';
import { SearchForm } from './SearchForm';
import { Modal } from '../Modal';
import { getAllListings } from '@/app/queries/listingsActions';
import { Listing } from '@prisma/client';

interface SearchSectionProps {
  address?: string;
}

export const SearchSection: FC<SearchSectionProps> = ({ address = '' }) => {
  const MapLeaflet = useMemo(
    () => dynamic(() => import('@/app/components/Map/Map'), { ssr: false }),
    []
  );
  const path = usePathname();
  const isSearchPage = path.includes('search-results');

  const [mapVisible, setMapVisible] = useState(false);
  const [allListingsLoading, setAllListingsLoading] = useState(false);
  const listings = useListingsStore((state) => state.listings);
  const [allListings, setAllListings] = useState<Listing[]>([]);
  const listingsNotFound = useListingsStore((state) => state.listingsNotFound);

  const onMapButtonClick = async () => {
    if (!listings.length) {
      setAllListingsLoading(true);
      // get all listings
      const res = await getAllListings();

      setAllListings(res);

      if (res.length) {
        setAllListingsLoading(false);
        setMapVisible(true);
      }
    } else {
      setMapVisible(true);
    }
  };

  return (
    <div
      className={` bg-[url('/search-bg.jpg')] sm:bg-[url('/search-bg-mob.jpg')] ${
        isSearchPage ? 'h-[350px]' : 'h-[487px]'
      }`}
    >
      <div className="container py-4 h-[100%] flex items-center">
        <div className="text-center flex-1">
          <h1
            className={`text-[56px] sm:text-[32px] text-white mb-5 ${
              isSearchPage && 'mb-9'
            }`}
          >
            {!isSearchPage && 'Service Charge finder & Database'}
            {isSearchPage && 'Search Results'}
          </h1>
          <p
            className={`text-white text-xl leading-[155%] w-[60%] mx-auto font-light mb-9 mt-2 sm:w-[100%] sm:text-[15px] ${
              isSearchPage && 'hidden'
            }`}
          >
            Whether you`re buying your house, planning to invest in UK property
            market or looking to optimise your service charge spending
          </p>

          <SearchForm address={address} />

          {isSearchPage && address && (
            <>
              <div className="flex justify-center mt-8">
                <button
                  disabled={allListingsLoading}
                  onClick={onMapButtonClick}
                  className="flex items-center h-[52px] px-[29px] font-medium text-[15px] rounded-md border-[1px] border-white text-white hover:bg-grey transition-all duration-300"
                >
                  <MapMarkerIcon className="mr-2" />
                  <span></span>
                  {listingsNotFound
                    ? 'View all properties on map'
                    : 'View results on map'}
                </button>
              </div>
              {allListingsLoading && (
                <div
                  id="form-item-message"
                  className="text-md text-center mt-1 font-medium text-destructive"
                >
                  Loading...
                </div>
              )}
            </>
          )}

          <Modal
            isOpen={mapVisible}
            closeModal={() => setMapVisible(false)}
            full
            closeIconColor="#000"
            closeIconSize="25"
          >
            <MapLeaflet
              items={allListings.length ? allListings : listings}
              style={'h-[100vh]'}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};
