import React from 'react';
import { getProducts } from '@/services/products';
import ProductCard from '@/components/shared/product-card';
import { Product } from '@/types/product';
import Link from 'next/link';

export default async function Products() {
  const data = await getProducts({
    // page: currentPage,
    page: 1,
    type: 'external',
    lang: 'bn',
    // limit: limit,
    pageSize: 40,
    columnAccessor: '-id',
    search: '',
    // query: query,
    // query: '',
  });

  const productsData = await data?.data?.results;

  // console.log('Products Data:', productsData, data);

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.map((product: Product) => (
            <div key={product.id}>
              <ProductCard product={product} viewMode="grid" />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
            href="/products"
          >
            Load More
          </Link>
        </div>
      </div>
    </>
  );
}
