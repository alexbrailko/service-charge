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
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  bedrooms: z.string(),
  price: z.string()
});

const bedrooms = [
  // { key: 1, value: '' },
  { key: 2, value: '1' },
  { key: 3, value: '2' }
];

interface FiltersProps {}

export const Filters: FC<FiltersProps> = ({}) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      bedrooms: '',
      price: ''
    }
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }

  //const fieldValue = form.watch('bedrooms');

  return (
    <div className="bg-light py-5">
      <div className="container">
        <Button
          title="Clear"
          onClick={() => {
            form.setValue('bedrooms', '');
          }}
        />
        <Form {...form}>
          <form className="space-y-5 flex" id="filters">
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bedrooms</FormLabel>

                  <Select
                    key={form.watch(field.name)}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        fieldName={field.name}
                        fieldValue={field.value}
                        className="bg-white"
                      >
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      {/* <SelectItem value="" key="-">
                        Select bedrooms
                      </SelectItem> */}
                      {bedrooms.map(({ key, value }) => (
                        <SelectItem
                          //defaultValue="test"
                          value={value}
                          key={key}
                        >
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bedrooms</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      {bedrooms.map((bedroom) => (
                        <SelectItem  value={bedroom.toString()} key={bedroom}>
                          {bedroom}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            /> */}

            <Button
              title="Save"
              type="submit"
              form="filters"
              onClick={form.handleSubmit(onSubmit)}
              style={{ marginTop: '1.5rem' }}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};
