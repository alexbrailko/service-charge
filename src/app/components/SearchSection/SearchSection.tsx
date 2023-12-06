//'use client';

import React, { FC } from 'react';
import { SearchForm } from './SearchForm';
import { Map } from './Map';
import { MapWrapper } from './MapWrapper';

interface SearchSectionProps {
  onsubmit?: (value: string) => void;
}

export const SearchSection: FC<SearchSectionProps> = ({ onsubmit }) => {
  return (
    <div className="bg-light-grey">
      <div className="container pt-4 pb-2 flex items-center">
        <div className="w-3/5 text-center pr-12">
          <h2 className="text-3xl font-semibold mb-5">
            Service Charge Checker & Database
          </h2>
          <p className="mb-8">
            Whether you are buying your house, planning to invest in UK property
            market or looking to opyimize your service charge spending
          </p>
          <SearchForm />
        </div>
        <div className="w-2/5">
          <MapWrapper />
        </div>
      </div>
    </div>
  );
};
