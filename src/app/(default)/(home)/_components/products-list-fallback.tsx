import ProductsCardSkeleton from '@/components/skeletons/product-card';

export default function ProductsListFallback() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductsCardSkeleton key={index} />
      ))}
    </div>
  );
}
