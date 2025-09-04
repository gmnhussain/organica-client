'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/stores/useCartStore';
import { getStoragePath } from '@/lib/helpers';
import { Product } from '@/types/product';
import SafeImage from '@/components/shared/image';
import { ViewMode } from '@/stores/useViewPreferencesStore';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
// import placeholder from '@/data/placeholder';

const ProductCard = ({
  product,
  viewMode,
}: {
  product: Product;
  viewMode: ViewMode;
}) => {
  const { addToCart, toggleDrawer } = useCartStore();

  return (
    <div
      className={cn(
        'p-5 rounded-sm hover:shadow-md transition-shadow duration-300 bg-white border',
        viewMode === 'grid' ? 'text-center' : 'flex gap-4 p-4 items-center'
      )}
    >
      <div
        className={
          viewMode === 'grid'
            ? 'w-full h-70 mb-3 flex items-center justify-center'
            : 'w-32 h-32 flex-shrink-0'
        }
      >
        <Link href={`/products/${product?.id}`} className="h-full w-full">
          {product?.photo ? (
            <SafeImage
              src={getStoragePath(product?.photo)}
              alt={product?.name || ''}
              width={viewMode === 'grid' ? 150 : 150}
              height={viewMode === 'grid' ? 150 : 150}
              className="!w-full !h-full object-contain"
            />
          ) : (
            <div className="w-full h-full bg-gray-200"></div>
          )}
        </Link>
      </div>

      <div className={viewMode === 'grid' ? '' : 'flex-1 text-left'}>
        <h3>
          <Link
            className="text-sm font-semibold hover:underline"
            href={`/products/${product?.id}`}
          >
            {product?.name || ''}
          </Link>
        </h3>
        <p className="text-lg font-bold text-green-800 mb-2">
          TK {product?.mrpprice ? product.mrpprice.toFixed(2) : '0.00'}
        </p>
        <button
          type="button"
          onClick={() => {
            addToCart(product);
            toggleDrawer(true);
          }}
          className={`bg-primary hover:bg-primary/80 w-full flex items-center justify-center transition duration-300 text-white px-5 py-2 rounded text-sm hover:cursor-pointer`}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          অর্ডার করুন
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
