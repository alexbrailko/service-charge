import { Listing } from '@prisma/client';
import create from 'zustand';

const listingsStore = (set: any) => ({
  listings: [],
  totalListings: null,
  totalPages: 0,
  currentPage: 1,
  loading: false,
  setCurrentPage: (page: number) => {
    set(() => ({
      currentPage: page,
    }));
  },
  addListings: (list: Listing[], pages: number) => {
    set(() => ({
      listings: list,
      totalPages: pages,
    }));
  },
  setLoading: (loading: boolean) => {
    set(() => ({
      loading: loading,
    }));
  },
  setTotalListings: (total: number) => {
    set(() => ({
      totalListings: total,
    }));
  },
});

export const useListingsStore = create(listingsStore);
