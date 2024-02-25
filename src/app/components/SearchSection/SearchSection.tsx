//'use client';

import React, { FC } from 'react';
import { SearchForm } from './SearchForm';

interface SearchSectionProps {}

export const SearchSection: FC<SearchSectionProps> = ({}) => {
  return (
    <div className="h-[487px] bg-[url('/search-bg.jpg')] sm:bg-[url('/search-bg-mob.jpg')]">
      <div className="container pt-4 pb-2 h-[100%] flex items-center">
        <div className=" text-center ">
          <h1 className="text-[56px] sm:text-[32px] text-white">
            Service Charge checker & Database
          </h1>
          <p className="text-white text-xl leading-[155%] w-[60%] mx-auto font-light mb-9 mt-2 sm:w-[100%] sm:text-[15px]">
            Whether you`re buying your house, planning to invest in UK property
            market or looking to optimise your service charge spending
          </p>
          <SearchForm />
        </div>
      </div>
    </div>
  );
};
