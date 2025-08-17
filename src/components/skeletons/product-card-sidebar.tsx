import { Skeleton } from '@/components/ui/skeleton';

export default function ProductListItemSkeleton() {
  return (
    <div className="flex items-center space-x-3">
      {/* Image Skeleton */}
      <div className="w-12 h-12 animate-pulse">
        <Skeleton className="w-full h-full rounded" />
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 space-y-2">
        {/* Product Name Skeleton */}
        <Skeleton className="h-3 w-[80%] animate-pulse" />
        {/* Price Skeleton */}
        <Skeleton className="h-3 w-[40%] animate-pulse" />
      </div>
    </div>
  );
}
