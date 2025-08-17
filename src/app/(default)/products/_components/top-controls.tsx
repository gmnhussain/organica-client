'use client';

import { Grid, List } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useViewPreferencesStore } from '@/stores/useViewPreferencesStore';

export const TopControls = () => {
  const viewMode = useViewPreferencesStore((state) => state.viewMode);
  const setViewMode = useViewPreferencesStore((state) => state.setViewMode);
  const sortBy = useViewPreferencesStore((state) => state.sortBy);
  const setSortBy = useViewPreferencesStore((state) => state.setSortBy);
  const showCount = useViewPreferencesStore((state) => state.showCount);
  const setShowCount = useViewPreferencesStore((state) => state.setShowCount);

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-2">
        <Button
          variant={viewMode === 'list' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setViewMode('list')}
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
          variant={viewMode === 'grid' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setViewMode('grid')}
        >
          <Grid className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Show:</span>
          <Select value={showCount} onValueChange={setShowCount}>
            <SelectTrigger className="w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="40">40</SelectItem>
              <SelectItem value="60">60</SelectItem>
              <SelectItem value="all">Show All</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Sort by latest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A-Z</SelectItem>
            <SelectItem value="name-desc">Name: Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
