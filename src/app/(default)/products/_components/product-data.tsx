'use client';

import ProductCard from '@/components/shared/product-card';
import { useViewPreferencesStore } from '@/stores/useViewPreferencesStore';

const ProductData = ({ productsData }: any) => {
  const viewMode = useViewPreferencesStore((state) => state.viewMode);

  return (
    <div
      className={`grid gap-6 ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}`}
    >
      {productsData.map((product: any, index: number) => (
        <ProductCard key={index} product={product} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default ProductData;
