import { SearchSection } from '@/app/components/SearchSection/SearchSection';
import React, { FC } from 'react';
import { ListingsList } from './ListingsList';
import { Filters } from './Filters';
import { redirect } from 'next/navigation';

interface SearchResultsPageProps {}

const SearchResultsPage: FC<SearchResultsPageProps> = () => {
  redirect('/');

  return (
    <>
      {/* <SearchSection />
      <Filters />
      <ListingsList /> */}
    </>
  );
};

export default SearchResultsPage;
