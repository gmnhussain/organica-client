export default function Fallback() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Gallery Section */}
      <div className="flex gap-4">
        {/* Thumbnail Gallery */}
        <div className="flex flex-col items-center space-y-2">
          {/* Thumbnail Navigation Buttons */}
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>

          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>

          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        {/* Main Image */}
        <div className="flex-1">
          <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden animate-pulse">
            {/* Navigation Buttons */}
            <div className="absolute left-4 top-1/2 w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="absolute right-4 top-1/2 w-8 h-8 bg-gray-300 rounded-full"></div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 w-20 h-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="space-y-6">
        {/* Product Title */}
        <div className="pt-2">
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-6"></div>

          {/* Price Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Quantity Selector */}
        <div>
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-3"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-12 h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-10">
          <div className="flex-1 h-14 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex-1 h-14 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Contact Buttons */}
        <div className="flex gap-3 items-center">
          <div className="w-40 h-10 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-40 h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Meta Info */}
        <div className="space-y-2 mt-10">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
