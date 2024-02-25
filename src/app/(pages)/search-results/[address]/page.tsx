import { SearchSection } from '@/app/components/SearchSection/SearchSection';
import React, { FC } from 'react';
import { Filters } from '../Filters';
import { ListingsList } from '../ListingsList';

interface SearchResultsPageProps {
  params: { id: string };
}

const SearchResultsParamPage: FC<SearchResultsPageProps> = ({ params }) => {
  console.log('params', params);

  return (
    <>
      <SearchSection />
      <Filters />
      {/* <ListingsList /> */}
    </>
  );
};

export default SearchResultsParamPage;
