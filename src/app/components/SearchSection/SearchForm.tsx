'use client';

import React, { FC, useState } from 'react';
import SubmitButton from './SubmitButton';
import { getResults } from './get-results-action';
import { useListingsStore } from '@/app/store/listings';
// import { valid_postcode } from '@/app/helpers/validation';

export const SearchForm: FC = () => {
  const [error, setError] = useState(false);
  const addListings = useListingsStore((state) => state.addListings);
  const setIsLoading = useListingsStore((state) => state.setLoading);

  const submitPostcode = async (formData: FormData) => {
    const res = formData.get('postcode') || '';
    // const postcode = res?.toString().replace(/\s+/g, '') || '';

    // if (!valid_postcode(postcode)) {
    //   setError(true);
    //   return;
    // }

    // setError(false);
    // const postcodeWithSpaces = postcode.replace(/^(.*)(\d)/, '$1 $2');

    try {
      setIsLoading(true);

      const results = await getResults(res?.toString());

      addListings(results, 0);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <form action={submitPostcode}>
      <div className="relative">
        <input
          type="text"
          name="postcode"
          //onChange={(e) => setPostcode(e.target.value)}
          className="block flex-1 border-0 py-3 px-3 text-dark text-center placeholder:text-gray-400 focus:ring-0 border-transparent focus:border-transparent focus-visible:outline-0  bg-white rounded w-full"
          placeholder="Address or postcode"
          // value={postcode}
        />
        <SubmitButton />
      </div>
      {error && <div className="text-error">Not a valid postcode</div>}
    </form>
  );
};
