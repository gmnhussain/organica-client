'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import placeholderImage from '@/data/placeholder';

type SafeImageProps = {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
};

const SafeImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder = placeholderImage,
}: SafeImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only set the real source after hydration
    if (src) {
      setImageSrc(src);
    }
  }, [src]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center`}>
      {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}

      <Image
        src={imageSrc || placeholder}
        alt={alt}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setImageSrc(placeholder);
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default SafeImage;
