'use client';
import { Button } from '@/app/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/app/components/ui/form/Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/app/components/ui/form/Select';
import { bedroomsData, priceRangeData } from '@/app/helpers/filters';
import { useListingsStore } from '@/app/store/listings';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  bedrooms: z.string(),
  priceMin: z.string(),
  priceMax: z.string()
});

export interface FiltersProps {
  bedrooms?: number | null;
  priceMin?: number | null;
  priceMax?: number | null;
}

interface FiltersComponentProps {
  address: string;
}

export const Filters: FC<FiltersComponentProps> = ({ address }) => {
  const setFilters = useListingsStore((state) => state.setFilters);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      bedrooms: '',
      priceMin: '',
      priceMax: ''
    }
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    const filters = {
      bedrooms: Number(values.bedrooms) || null,
      priceMin:
        Number(values.priceMin.replace(/,/g, '').replace(/£/g, '')) || null,
      priceMax:
        Number(values.priceMax.replace(/,/g, '').replace(/£/g, '')) || null
    };

    setFilters(filters);
  }

  return (
    <div className="bg-light pt-6 pb-10">
      <div className="container">
        <Form {...form}>
          <form
            className="space-x-3 flex items-end justify-center	sm:items-center sm:flex-col sm:space-x-0 sm:space-y-4"
            id="filters"
          >
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem className="min-w-[180px] sm:w-full">
                  <FormLabel>Bedrooms</FormLabel>

                  <Select
                    key={form.watch(field.name)}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent
                      className="bg-white"
                      form={form}
                      fieldName={field.name}
                      fieldValue={field.value}
                    >
                      {bedroomsData.map(({ key, value }) => (
                        <SelectItem value={value} key={key}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priceMin"
              render={({ field }) => (
                <FormItem className="min-w-[180px] sm:w-full">
                  <FormLabel>Min price</FormLabel>
                  <Select
                    key={form.watch(field.name)}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select min price" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent
                      className="bg-white"
                      form={form}
                      fieldName={field.name}
                      fieldValue={field.value}
                    >
                      {priceRangeData(true).map(({ key, value }) => (
                        <SelectItem value={value} key={key}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priceMax"
              render={({ field }) => (
                <FormItem className="min-w-[180px] sm:w-full">
                  <FormLabel>Max price</FormLabel>
                  <Select
                    key={form.watch(field.name)}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select max price" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent
                      className="bg-white"
                      form={form}
                      fieldName={field.name}
                      fieldValue={field.value}
                    >
                      {priceRangeData(false).map(({ key, value }) => (
                        <SelectItem value={value} key={key}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button
              title="Save"
              type="submit"
              form="filters"
              onClick={form.handleSubmit(onSubmit)}
              className="px-12 sm:w-6/12 sm:!mt-7"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};
