import ProductsCardSkeleton from '@/components/skeletons/product-card';

export default function ProductsListFallback() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <ProductsCardSkeleton key={index} />
      ))}
    </>
  );
}
