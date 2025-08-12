import React, { Suspense } from 'react';
import ProductsList from './products-list';
import ProductsListFallback from './products-list-fallback';

export default function Products() {
  return (
    <div>
      <section className="px-4 py-10 bg-gray-100">
        <Suspense key={'products-list'} fallback={<ProductsListFallback />}>
          <ProductsList />
        </Suspense>
      </section>
    </div>
  );
}
