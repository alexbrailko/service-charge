'use client';

import React, { FC } from 'react';
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

// const postcode = res?.toString().replace(/\s+/g, '') || '';
// const postcodeWithSpaces = postcode.replace(/^(.*)(\d)/, '$1 $2');
const schema = z.object({
  address: z.string().min(3, { message: validationMessages.minMessage(3) })
});

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

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      address: address ? address : ''
    }
  });

  const formSubmit = async (values: z.infer<typeof schema>) => {
    if (values.address !== address) {
      setIsLoading(true);
    }

    afterSubmit();

    router.push(`/search-results/${encodeURIComponent(values.address.trim())}`);
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
                      className={cn(
                        'block flex-1 border-0 py-6 pl-[60px] pr-[120px] xs:pr-5 text-dark placeholder:text-grey text-[15px] focus:ring-0 border-transparent focus:border-transparent focus-visible:outline-0 bg-white rounded w-full',
                        modalView && 'bg-light pr-5'
                      )}
                      placeholder="Type location or postcode"
                      {...field}
                    />
                    <div
                      className={cn(
                        'absolute top-[3px] right-[10px] xs:static',
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
