'use client';
import { useSearchParams } from 'next/navigation';
import { SearchSection } from './components/SearchSection/SearchSection';
import { useEffect, useState } from 'react';
import { Listing } from '@prisma/client';
import { getResults } from './components/SearchSection/get-results-action';
import Listings from './components/Listings/Listings';
import { InfoSection } from './components/InfoSection';
import { useListingsStore } from './store/listings';

export default function Home() {
  //const [listings, setListings] = useState<Listing[]>();
  const searchParams = useSearchParams();
  // const postcode = searchParams.get('postcode');
  const isLoading = useListingsStore((state) => state.loading);
  const listings = useListingsStore((state) => state.listings);

  useEffect(() => {
    // async function fetchData(postcode: string) {
    //   try {
    //     const postcodeWithSpaces = postcode.replace(/^(.*)(\d)/, '$1 $2');
    //     const results = await getResults(postcodeWithSpaces);
    //     console.log('results', results);
    //     setListings(results);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }
    // if (postcode) {
    //   //fetchData(postcode);
    // }
  }, []);

  return (
    <>
      <SearchSection />

      {listings.length ? <Listings listings={listings} /> : <InfoSection />}
    </>
  );
}
