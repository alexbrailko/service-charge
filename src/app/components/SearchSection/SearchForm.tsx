'use client';

import React, { FC, useState } from 'react';
import { useListingsStore } from '@/app/store/listings';
import SearchIcon from '@/app/images/svg/SearchIcon';
// import { valid_postcode } from '@/app/helpers/validation';
// import config from '../../../../tailwind.config';
import { getListingsResults } from '@/app/queries/listingsActions';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../ui/form/Form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationMessages } from '@/app/helpers/validation';
import { Button } from '../ui/Button';
import { useRouter } from 'next/navigation';

// const postcode = res?.toString().replace(/\s+/g, '') || '';
// const postcodeWithSpaces = postcode.replace(/^(.*)(\d)/, '$1 $2');
const schema = z.object({
  address: z.string().min(3, { message: validationMessages.minMessage(3) })
});

export const SearchForm: FC = () => {
  const addListings = useListingsStore((state) => state.addListings);
  const setIsLoading = useListingsStore((state) => state.setLoading);
  const loading = useListingsStore((state) => state.loading);
  const setListingsError = useListingsStore((state) => state.setError);
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      address: ''
    }
  });

  const submitPostcode = async (values: z.infer<typeof schema>) => {
    const { address } = values;
    console.log('address', address);

    try {
      setIsLoading(true);

      const results = await getListingsResults(address);

      //console.log('results', results);
      //router.replace();
      router.push(`/search-results/${encodeURIComponent(address)}`);

      addListings(results, 0);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setListingsError(true);
    }
  };

  return (
    <Form {...form}>
      <form className="max-w-[585px] m-auto">
        <div className="relative">
          <div className="absolute top-[27px] left-[27px]">
            <SearchIcon color="var(--highlight)" size="16" />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <input
                      type="text"
                      className="block flex-1 border-0 py-6 pl-[60px] pr-[115px] text-dark  placeholder:text-grey text-[15px] focus:ring-0 border-transparent focus:border-transparent focus-visible:outline-0  bg-white rounded w-full"
                      placeholder="Type location or postcode"
                      {...field}
                    />
                    <div className="absolute top-[3px] right-[10px] xs:static">
                      <Button
                        title="Search"
                        className="min-w-[102px] xs:w-[100%] xs:mt-2"
                        onClick={form.handleSubmit(submitPostcode)}
                        isLoading={loading}
                      />
                    </div>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
