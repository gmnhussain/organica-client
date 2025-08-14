'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/stores/useCartStore';
import { getStoragePath } from '@/lib/helpers';
import { Product } from '@/types/product';
import SafeImage from '@/components/shared/image';
// import placeholder from '@/data/placeholder';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, toggleDrawer } = useCartStore();

  return (
    <div className="bg-white text-center p-4">
      <div className="w-full h-48 mb-3 flex items-center justify-center">
        <Link href={`/products/${product?.id}`}>
          {product?.photo ? (
            <SafeImage
              src={getStoragePath(product?.photo)}
              alt={product?.name || ''}
              width={100}
              height={100}
              className="!w-full !h-full object-contain"
              // placeholder={'/placeholder.png'}
            />
          ) : (
            <div className="w-full h-full bg-gray-200"></div>
          )}
        </Link>
      </div>

      <h3>
        <Link
          className="text-sm font-semibold"
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
        className="bg-green-800 text-white px-4 py-1 rounded text-sm"
      >
        অর্ডার করুন
      </button>
    </div>
  );
};

export default ProductCard;
