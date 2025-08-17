'use client';

import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

export const ProductsFilter = () => {
  const [priceRange, setPriceRange] = useState([600, 1000]);
  return (
    <>
      {/* Filter By Price */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Filter By Price
        </h3>
        <div className="mb-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            defaultValue={priceRange}
            max={2000}
            min={100}
            step={5}
            className="w-full"
          />
        </div>
        <div className="text-sm text-gray-600">
          Price: {priceRange[0]} ৳ — {priceRange[1]} ৳
        </div>
      </div>

      {/* Products */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Products</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="combo-packs" />
            <label htmlFor="combo-packs" className="text-sm text-gray-700">
              Combo Packs
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="gift-boxes" />
            <label htmlFor="gift-boxes" className="text-sm text-gray-700">
              Gift Boxes
            </label>
          </div>
        </div>
        <Button variant="outline" className="mt-4 w-20 bg-transparent">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>
    </>
  );
};

export default ProductsFilter;
