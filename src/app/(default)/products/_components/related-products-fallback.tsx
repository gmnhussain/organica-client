import ProductsCardSkeleton from '@/components/skeletons/product-card-sidebar';

export default function ProductsListFallback() {
  return (
    <div className="grid gap-4 grid-cols-1">
      {Array.from({ length: 4 }).map((_, index) => (
        <ProductsCardSkeleton key={index} />
      ))}
    </div>
  );
}
