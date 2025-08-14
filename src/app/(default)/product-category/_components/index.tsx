'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '../_components/ui/slider';
import { Grid, List, Filter, ShoppingCart } from 'lucide-react';

export default function ProductListingPage() {
  const [priceRange, setPriceRange] = useState([600, 1000]);
  const [viewMode, setViewMode] = useState('grid');
  const [showCount, setShowCount] = useState('20');
  const [sortBy, setSortBy] = useState('latest');

  const products = Array(6).fill({
    id: 1,
    name: 'পিনাট চকলেট বাটার ক্রিম',
    price: 900.0,
    image: '/products/img01.jpg',
  });

  const topRatedProducts = [
    {
      name: 'আমলকিরস (Kalojira) - 500G / 1KG',
      price: 450,
      image: '/products/img01.jpg',
    },
    {
      name: 'আমলকিরস (Kalojira) - 500G / 1KG',
      price: 450,
      image: '/products/img01.jpg',
    },
    {
      name: 'আমলকিরস (Kalojira) - 500G / 1KG',
      price: 450,
      image: '/products/img01.jpg',
    },
    {
      name: 'আমলকিরস (Kalojira) - 500G / 1KG',
      price: 450,
      image: '/products/img01.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 container mx-auto">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white p-6 shadow-sm">
          {/* Filter By Price */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Filter By Price
            </h3>
            <div className="mb-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={2000}
                min={0}
                step={50}
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

          {/* Top Rated Products */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Top Rated Products
            </h3>
            <div className="space-y-3">
              {topRatedProducts.map((product, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-xs text-gray-700 leading-tight">
                      {product.name}
                    </p>
                    <p className="text-xs font-medium text-gray-900">
                      TK {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Top Controls */}
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
                  </SelectContent>
                </Select>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Sort by latest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-gray-900 mb-4">
                    TK {product.price.toFixed(2)}
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    অর্ডার করুন
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
