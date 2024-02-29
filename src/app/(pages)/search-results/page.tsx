import { FC } from 'react';
import { redirect } from 'next/navigation';

interface SearchResultsPageProps {}

const SearchResultsPage: FC<SearchResultsPageProps> = () => {
  redirect('/');
};

export default SearchResultsPage;
