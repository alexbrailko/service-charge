import { SearchSection } from '@/app/components/SearchSection/SearchSection';
import React, { FC } from 'react';
import { Filters } from './Filters';
import { ListingsContainer } from './ListingsContainer';

interface SearchResultsPageProps {
  params: { address: string };
}

const SearchResultsParamPage: FC<SearchResultsPageProps> = ({ params }) => {
  const address = params?.address && decodeURIComponent(params.address);

  return (
    <>
      <SearchSection address={address} />
      <Filters />
      <ListingsContainer address={address} />
    </>
  );
};

export default SearchResultsParamPage;
