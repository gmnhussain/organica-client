import { useState, memo } from 'react';
import Image from 'next/image';
import { getStorageUrl } from '@/lib/helpers';

export const ImageWithFallback = memo(
  ({
    fallback,
    imagePath,
    name,
    width,
    height,
    alt,
    className,
  }: {
    fallback?: string;
    imagePath: string;
    name?: string;
    width: number;
    height: number;
    alt?: string;
    className?: string;
  }) => {
    const [imgSrc, setImgSrc] = useState(
      imagePath
        ? getStorageUrl(imagePath, 'image')
        : fallback || '/images/placeholder.png'
    );

    return (
      <Image
        {...{ className }}
        src={imgSrc ?? '/images/placeholder.png'}
        alt={alt || name || 'Fallback Image'}
        width={width || 40}
        height={height || 40}
        onError={() => setImgSrc('/images/placeholder.png')}
      />
    );
  }
);

ImageWithFallback.displayName = 'ImageWithFallback'; // For debugging
