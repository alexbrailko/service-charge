import { Listing } from '@prisma/client';
import { create } from 'zustand';
import { FiltersProps } from '../(pages)/search-results/[address]/Filters';

const listingsStore = (set: any, get: any) => ({
  listings: [] as Listing[],
  selectedListing: {} as Listing | null,
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
  },
  getListing: (id: Listing['id']) => {
    const listing = get().listings.filter((l: Listing) => l.id === id);

    return listing ? listing : null;
  }
});

export const useListingsStore = create(listingsStore);
