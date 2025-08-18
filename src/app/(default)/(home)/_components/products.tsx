import React, { Suspense } from 'react';
import ProductsList from './products-list';
import ProductsListFallback from './products-list-fallback';

export default function Products() {
  return (
    <section className="py-6">
      <Suspense key={'products-list'} fallback={<ProductsListFallback />}>
        <ProductsList />
      </Suspense>
    </section>
  );
}
