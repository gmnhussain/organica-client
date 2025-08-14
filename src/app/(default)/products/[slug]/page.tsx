import { getProducts } from '@/services/products';
import React from 'react';
import PageDetails from './_components/index';
import RelatedProducts from './_components/related-products';
import DetailFallback from './_components/product-detail-fallback';
import RelatedProductsFallback from './_components/related-products-fallback';
import { Suspense } from 'react';

export const revalidate = 1000;

export async function generateStaticParams() {
  const data = await getProducts({
    page: 1,
    type: 'external',
    lang: 'bn',
    pageSize: 10,
    columnAccessor: '-id',
    search: '',
  });

  const products = await data?.data?.results;

  return products.map((product: any) => {
    return { slug: String(product.id) };
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<DetailFallback />}>
          <PageDetails slug={Number(params.slug)} />
        </Suspense>
        {/* Related Products */}
        <div className="mt-22">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Suspense fallback={<RelatedProductsFallback />}>
              <RelatedProducts slug={Number(params.slug)} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
