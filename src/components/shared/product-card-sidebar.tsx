'use client';

import React from 'react';
import Link from 'next/link';
import { getStoragePath } from '@/lib/helpers';
import { Product } from '@/types/product';
import SafeImage from '@/components/shared/image';
// import placeholder from '@/data/placeholder';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12">
          <Link href={`/products/${product?.id}`}>
            {product?.photo ? (
              <SafeImage
                src={getStoragePath(product?.photo)}
                alt={product?.name || ''}
                width={100}
                height={100}
                className="!w-full !h-full object-cover rounded"
                // placeholder={'/placeholder.png'}
              />
            ) : (
              <div className="w-12 h-12 bg-gray-200"></div>
            )}
          </Link>
        </div>

        <div className="flex-1">
          <p className="text-xs text-gray-700 leading-tight">
            <Link className="" href={`/products/${product?.id}`}>
              {product?.name || ''}
            </Link>
          </p>
          <p className="text-xs font-medium text-gray-900">
            TK {product?.mrpprice ? product.mrpprice.toFixed(2) : '0.00'}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
