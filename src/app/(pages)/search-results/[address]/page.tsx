import { SearchSection } from '@/app/components/SearchSection/SearchSection';
import React, { FC } from 'react';
import { Filters } from './Filters';
import { ListingsContainer } from './ListingsContainer';
import Head from 'next/head';

export const metadata = {
  title: 'Search results',
  description: 'Search results for a property',
  robots: {
    index: false,
    follow: true
  }
};

interface SearchResultsPageProps {
  params: { address: string };
}

const SearchResultsParamPage: FC<SearchResultsPageProps> = ({ params }) => {
  const address = params?.address && decodeURIComponent(params.address);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <SearchSection address={address} />
      <Filters />
      <ListingsContainer address={address} />
    </>
  );
};

export default SearchResultsParamPage;
