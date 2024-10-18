'use client';
import React, { FC, useState, useEffect, useCallback } from 'react';
import { useListingsStore } from '@/app/store/listings';
import SearchIcon from '@/app/images/svg/SearchIcon';
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
import { cn } from '@/app/helpers/utils';
import debounce from 'lodash.debounce';
import { Listing } from '@prisma/client';
import { getSearchAutocomplete } from '@/app/queries/listingsActions';
import { HighlightedText } from './HighlightedText';

const schema = z.object({
  address: z.string().min(3, { message: validationMessages.minMessage(3) })
});

export interface AutocompleteResult {
  id: number;
  postCode: string;
  addressFull: string;
}

interface SearchFormProps {
  address: string;
  modalView?: boolean;
  afterSubmit?: () => void;
}

export const SearchForm: FC<SearchFormProps> = ({
  address,
  modalView,
  afterSubmit = () => {}
}) => {
  const setIsLoading = useListingsStore((state) => state.setLoading);
  const loading = useListingsStore((state) => state.loading);
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<AutocompleteResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      address: address ? address : ''
    }
  });

  const searchAddresses = async (searchQuery: string) => {
    if (searchQuery.length < 3) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    setIsSearching(true);

    const data = await getSearchAutocomplete(searchQuery);
    setIsSearching(false);

    if (!data.length) {
      setSearchResults([]);
    } else {
      setSearchResults(data);
      setShowDropdown(true);
    }
  };

  // Create a memoized debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      searchAddresses(query);
    }, 300),
    [] // Empty dependency array since we don't want to recreate the debounced function
  );

  // Cleanup the debounced function on component unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // Watch for changes in the address field
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'address') {
        debouncedSearch(value.address || '');
      }
    });

    return () => subscription.unsubscribe();
  }, [form.watch, debouncedSearch]);

  const formSubmit = async (values: z.infer<typeof schema>) => {
    if (values.address !== address) {
      setIsLoading(true);
    }
    setShowDropdown(false);
    afterSubmit();
    router.push(`/search-results/${encodeURIComponent(values.address.trim())}`);
  };

  const handleResultClick = (result: AutocompleteResult) => {
    debouncedSearch.cancel();
    form.setValue('address', result.addressFull);
    formSubmit({ address: result.addressFull });
    setShowDropdown(false);
  };

  return (
    <Form {...form}>
      <form className="max-w-[585px] m-auto">
        <div className="relative">
          <div className="absolute top-[27px] left-[27px] z-10">
            <SearchIcon color="var(--highlight)" size="16" />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <input
                      type="text"
                      className={cn(
                        'block flex-1 border-0 py-6 pl-[60px] pr-[120px] xs:pr-5 text-dark placeholder:text-grey text-[15px] focus:ring-0 border-transparent focus:border-transparent focus-visible:outline-0 bg-white rounded w-full',
                        modalView && 'bg-light pr-5'
                      )}
                      placeholder="Type location or postcode"
                      {...field}
                      onFocus={() => {
                        if (searchResults.length > 0) {
                          setShowDropdown(true);
                        }
                      }}
                    />
                    {showDropdown && searchResults.length > 0 && (
                      <ul className="absolute pl-[60px] text-left z-50 w-full bg-white border rounded-b-md shadow-lg max-h-60 overflow-auto">
                        {searchResults.map((result) => (
                          <li
                            key={result.id}
                            className="p-3 pl-0 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                            onClick={() => handleResultClick(result)}
                          >
                            <div className="font-medium">
                              <HighlightedText
                                text={result.addressFull}
                                highlight={form.getValues('address')}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div
                      className={cn(
                        'absolute top-[11px] right-[10px] xs:static',
                        modalView && 'static'
                      )}
                    >
                      <Button
                        title="Search"
                        className={cn(
                          'min-w-[102px] xs:w-[100%] xs:mt-2',
                          modalView && 'w-[100%] mt-2'
                        )}
                        onClick={form.handleSubmit(formSubmit)}
                        isLoading={loading || isSearching}
                      />
                    </div>
                  </div>
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
