import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type ViewMode = 'grid' | 'list';
export type ShowCount = '20' | '40' | '60' | 'all';
export type SortBy =
  | 'latest'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc'
  | 'name-desc';

interface ViewPreferencesStore {
  viewMode: ViewMode;
  showCount: ShowCount;
  sortBy: SortBy;
  setViewMode: (mode: ViewMode) => void;
  setShowCount: (count: ShowCount) => void;
  setSortBy: (sort: SortBy) => void;
  resetPreferences: () => void;
}

export const useViewPreferencesStore = create<ViewPreferencesStore>()(
  persist(
    (set) => ({
      viewMode: 'grid',
      showCount: '20',
      sortBy: 'latest',

      setViewMode: (mode) => set({ viewMode: mode }),
      setShowCount: (count) => set({ showCount: count }),
      setSortBy: (sort) => set({ sortBy: sort }),
      resetPreferences: () =>
        set({ viewMode: 'grid', showCount: '20', sortBy: 'latest' }),
    }),
    {
      name: 'view-preferences-storage',
      storage: createJSONStorage(() => localStorage),
      // Only persist these specific fields
      partialize: (state) => ({
        viewMode: state.viewMode,
        showCount: state.showCount,
        sortBy: state.sortBy,
      }),
    }
  )
);

// Selector hooks for optimized re-renders
export const useViewMode = () =>
  useViewPreferencesStore((state) => state.viewMode);

export const useShowCount = () =>
  useViewPreferencesStore((state) => state.showCount);

export const useSortBy = () => useViewPreferencesStore((state) => state.sortBy);
