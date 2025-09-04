import React, { Suspense } from 'react';
import ProductsList from './products-list';
import ProductsListFallback from './products-list-fallback';

export default function Products() {
  return (
    <section className="py-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center pb-14 pt-12">
        আমাদের পণ্য সমূহ
      </h2>
      <Suspense key={'products-list'} fallback={<ProductsListFallback />}>
        <ProductsList />
      </Suspense>
    </section>
  );
}
