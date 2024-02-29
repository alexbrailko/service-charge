import { Listing } from '@prisma/client';
import { create } from 'zustand';
import { FiltersProps } from '../(pages)/search-results/Filters';

const listingsStore = (set: any) => ({
  listings: [] as Listing[],
  totalListings: null,
  currentPage: 1,
  loading: false,
  error: false,
  listingsNotFound: false,
  filters: {
    bedrooms: null,
    priceMin: null,
    priceMax: null
  } as FiltersProps,
  setCurrentPage: (page: number) => {
    set(() => ({
      currentPage: page
    }));
  },
  addListings: (list: Listing[]) => {
    set(() => ({
      listings: list
    }));
  },
  setLoading: (loading: boolean) => {
    set(() => ({
      loading
    }));
  },
  setError: (error: boolean) => {
    set(() => ({
      error
    }));
  },
  setTotalListings: (total: number) => {
    set(() => ({
      totalListings: total
    }));
  },
  setListingsNotFound: (value: boolean) => {
    set(() => ({
      listingsNotFound: value
    }));
  },
  setFilters: (filters: FiltersProps) => {
    set(() => ({
      filters: filters
    }));
  }
});

export const useListingsStore = create(listingsStore);
