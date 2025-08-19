import { Suspense } from 'react';
import { RelatedProducts } from './related-products';
import ProductsList from './products-list';
import ProductsFilter from './products-filter';
import { TopControls } from './top-controls';
import ProductsListFallback from './products-list-fallback';
import RelatedProductsFallback from './related-products-fallback';

export default function ProductListingPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-80">
          <div className="">
            <ProductsFilter />

            {/* Top Rated Products */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Top Rated Products
              </h3>
              <div className="space-y-3">
                <Suspense fallback={<RelatedProductsFallback />}>
                  <RelatedProducts />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Controls */}
          <TopControls />

          {/* Product Grid */}
          <Suspense fallback={<ProductsListFallback />}>
            <ProductsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
