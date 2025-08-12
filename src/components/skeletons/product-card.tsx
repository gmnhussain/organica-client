import { Skeleton } from '@/components/ui/skeleton';

// export default function ProductCardSkeleton() {
//   return (
//     <div className="bg-white text-center p-4 animate-pulse">
//       {/* Image Skeleton */}
//       <div className="w-full h-48 mb-3 flex items-center justify-center bg-gray-200 rounded"></div>

//       {/* Title Skeleton */}
//       <div className="h-4 w-3/4 bg-gray-200 mx-auto rounded mb-2"></div>

//       {/* Price Skeleton */}
//       <div className="h-5 w-1/2 bg-gray-200 mx-auto rounded mb-3"></div>

//       {/* Button Skeleton */}
//       <div className="h-8 w-24 bg-gray-200 mx-auto rounded"></div>
//     </div>
//   );
// }

// export default function ProductCardSkeleton() {
//   return (
//     <div className="bg-white text-center p-4">
//       {/* Image Skeleton */}
//       <div className="w-full h-48 mb-3 flex items-center justify-center">
//         <Skeleton className="w-full h-full rounded" />
//       </div>

//       {/* Title Skeleton */}
//       <Skeleton className="h-4 w-3/4 mx-auto mb-2" />

//       {/* Price Skeleton */}
//       <Skeleton className="h-5 w-1/2 mx-auto mb-3" />

//       {/* Button Skeleton */}
//       <Skeleton className="h-8 w-24 mx-auto" />
//     </div>
//   );
// }

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white text-center p-4">
      {/* Image Skeleton */}
      <div className="w-full h-48 mb-3 flex items-center justify-center animate-pulse">
        <Skeleton className="w-full h-full rounded" />
      </div>

      {/* Title Skeleton */}
      <Skeleton className="h-4 w-3/4 mx-auto mb-2 animate-pulse" />

      {/* Price Skeleton */}
      <Skeleton className="h-5 w-1/2 mx-auto mb-3 animate-pulse" />

      {/* Button Skeleton */}
      <Skeleton className="h-8 w-24 mx-auto animate-pulse" />
    </div>
  );
}
