import { create } from 'zustand';

const globalsStore = (set: any) => ({
  contactModalOpen: false,

  setContactModalOpen: (open: boolean) => {
    set(() => ({
      contactModalOpen: open
    }));
  }
});

export const useGlobalstore = create(globalsStore);
