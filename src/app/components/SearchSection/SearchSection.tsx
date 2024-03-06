'use client';

import React, { FC, useState } from 'react';
import { SearchForm } from './SearchForm';
import { usePathname } from 'next/navigation';
import { MapMarkerIcon } from '@/app/images/svg/MapMarkerIcon';
import { Map } from '../Map';
import { useListingsStore } from '@/app/store/listings';
import { Modal } from '../Modal';

interface SearchSectionProps {
  address?: string;
}

export const SearchSection: FC<SearchSectionProps> = ({ address = '' }) => {
  const path = usePathname();
  const isSearchPage = path.includes('search-results');

  const [mapVisible, setMapVisible] = useState(false);
  const listings = useListingsStore((state) => state.listings);

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
            {!isSearchPage && 'Service Charge checker & Database'}
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
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setMapVisible(true)}
                className="flex items-center h-[52px] px-[29px] font-medium text-[15px] rounded-md border-[1px] border-white text-white hover:bg-grey transition-all duration-300"
              >
                <MapMarkerIcon className="mr-2" />
                View results on map
              </button>
            </div>
          )}

          <Modal
            isOpen={mapVisible}
            closeModal={() => setMapVisible(false)}
            full
            closeIconColor="#000"
            closeIconSize="25"
          >
            <Map markers={listings} height="100vh" fullScreenButton={false} />
          </Modal>
        </div>
      </div>
    </div>
  );
};
