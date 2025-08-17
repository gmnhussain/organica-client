import React from 'react';
import { getProducts } from '@/services/products';
import ProductCard from '@/components/shared/product-card';
import { Product } from '@/types/product';

export default async function Products() {
  const data = await getProducts({
    // page: currentPage,
    page: 1,
    type: 'external',
    lang: 'bn',
    // limit: limit,
    pageSize: 10,
    columnAccessor: '-id',
    search: '',
    // query: query,
    // query: '',
  });

  const productsData = await data?.data?.results;

  // console.log('Products Data:', productsData, data);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {productsData.map((product: Product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
