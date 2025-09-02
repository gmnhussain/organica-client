'use client';

import type React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  X,
  ZoomIn,
  ChevronUp,
  ChevronDown,
  ShoppingBag,
  PhoneCall,
} from 'lucide-react';
import { getStoragePath } from '@/lib/helpers';
import { useCartStore } from '@/stores/useCartStore';
import { useRouter } from 'next/navigation';
import { SocialShare } from '../../_components/social-share';

const images = [
  '/products/img01.jpg',
  '/products/img02.jpg',
  '/products/img03.jpg',
  '/products/img02.jpg',
  '/products/img01.jpg',
];

export default function ProductDetailsPage({ product }: any) {
  const router = useRouter();
  const { addToCart, toggleDrawer } = useCartStore();
  console.log(product);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  const productImage = getStoragePath(product.photo);
  const productImages = [productImage, ...images];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  const nextThumbnails = () => {
    if (thumbnailStartIndex + 4 < productImages.length) {
      setThumbnailStartIndex((prev) => prev + 1);
    }
  };

  const previousThumbnails = () => {
    if (thumbnailStartIndex > 0) {
      setThumbnailStartIndex((prev) => prev - 1);
    }
  };

  const openFullscreen = () => {
    setIsFullscreenOpen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      previousImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'Escape') {
      closeFullscreen();
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex gap-4">
          {/* Vertical Thumbnail Gallery */}
          <div className="flex flex-col items-center justify-center space-y-2">
            {/* Previous thumbnails button */}
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 bg-transparent shadow-none border-0 bg-gray-200 hover:bg-gray-300 rounded-sm"
              onClick={previousThumbnails}
              disabled={thumbnailStartIndex === 0}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>

            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {productImages
                .slice(thumbnailStartIndex, thumbnailStartIndex + 4)
                .map((image, index) => {
                  const actualIndex = thumbnailStartIndex + index;
                  return (
                    <button
                      key={actualIndex}
                      onClick={() => setCurrentImageIndex(actualIndex)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 shadow-none ${
                        actualIndex === currentImageIndex
                          ? 'border-primary'
                          : 'border-border border-transparent hover:cursor-pointer hover:opacity-70'
                      }`}
                    >
                      <img
                        src={image || '/placeholder.svg'}
                        alt={`Thumbnail ${actualIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
            </div>

            {/* Next thumbnails button */}
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 bg-transparent shadow-none border-0 bg-gray-200 hover:bg-gray-300 rounded-sm"
              onClick={nextThumbnails}
              disabled={thumbnailStartIndex + 4 >= productImages.length}
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
              <img
                src={productImages[currentImageIndex] || '/placeholder.svg'}
                alt={`Product image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={openFullscreen}
              />

              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors cursor-pointer flex items-center justify-center"
                onClick={openFullscreen}
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn className="h-6 w-6 text-gray-800" />
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/40 backdrop-blur-sm border-none"
                onClick={previousImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/40 backdrop-blur-sm border-none"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {productImages.length}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product?.name || ''}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold text-green-600">
                ৳{product?.mrpprice}
              </span>
              <span className="text-lg text-gray-500 line-through">৳2,999</span>
              {/* <Badge variant="destructive">25% OFF</Badge> */}
              <span className="bg-green-200 text-green-700 text-sm font-semibold px-2 py-1 rounded">
                -20%
              </span>
              <span className="bg-red-100 text-red-700 text-sm font-semibold px-2 py-1 rounded">
                Hot
              </span>
            </div>
            <p className="text-gray-700">
              লিচু ফুলের মধুতে থাকা ঔষুধী গুণাগুণ সাধারণত কোষ্ঠকাঠিন্য দূর করতে,
              ফুসফুসের যাবতীয় রোগ ও শ্বাসকষ্ট নিরাময়ে, মুখগহ্বরের স্বাস্থ্য
              রক্ষায়, হজম শক্তি বৃদ্ধি সহ ত্বকের সৌন্দর্য বৃদ্ধিতে, ওজন কমাতে,
              এবং রক্তশূন্যতা দূর করতে কার্যকরী ভূমিকা রাখে। পুষ্টিগুণে অতুলনীয়
              সুস্বাদু এই লিচু ফুলের মধু।
            </p>
          </div>

          {/* <Separator /> */}

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button
              className="flex-1 w-full border border-primary py-6 text-white text-md hover:bg-primary hover:opacity-90"
              size="lg"
              onClick={() => {
                addToCart(product, quantity);
                toggleDrawer(true);
              }}
            >
              <ShoppingBag className="!h-5 !w-5 mr-2" />
              Add to Cart
            </Button>

            <Button
              variant="outline"
              className="flex-1 border-gray-500 text-gray-800 py-6 w-full text-md hover:opacity-70"
              size="lg"
              onClick={() => {
                addToCart(product, quantity);
                router.push('/cart');
              }}
            >
              <ShoppingCart className="!h-5 !w-5 mr-2" />
              Buy Now
            </Button>
          </div>

          <div className="flex gap-3 items-center">
            <a
              href="tel:+8809613821489"
              className="flex items-center gap-2 px-4 py-2 bg-[#0076ba] text-white rounded hover:bg-[#006aa7] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              কল করুন: +8809613821489
            </a>
            <a
              href="https://wa.me/8809613821489"
              className="flex items-center gap-2 px-4 py-2 bg-[#128c7e] text-white rounded hover:bg-[#107e71] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12.001 2.002c-5.519 0-10 4.478-10 10 0 1.766.467 3.482 1.352 4.991l-1.437 5.238 5.366-1.407c1.455.796 3.097 1.178 4.719 1.178h.001c5.521 0 10-4.479 10-10s-4.479-10-10.001-10zm5.479 14.365c-.228.642-1.326 1.242-1.837 1.322-.489.073-1.106.104-1.78-.112-.411-.131-.94-.305-1.625-.594-2.861-1.229-4.707-4.092-4.849-4.288-.141-.195-1.156-1.542-1.156-2.94 0-1.398.73-2.086.988-2.373.258-.287.564-.359.752-.359s.376.003.541.01c.174.008.409-.066.639.487.228.553.774 1.911.842 2.049.067.138.112.296.02.477-.09.181-.135.296-.263.455-.131.158-.277.354-.395.475-.131.131-.268.273-.116.535.152.263.678 1.117 1.455 1.807 1.003.895 1.848 1.173 2.112 1.304.263.131.416.116.57-.069.154-.184.658-.765.834-1.026.176-.26.351-.217.592-.131.241.087 1.523.718 1.782.849.258.131.429.195.491.307.064.112.064.652-.164 1.294z" />
              </svg>
              Whatsapp Us
            </a>
          </div>

          <div className="flex items-end space-x-12 mt-10">
            <div className="text-sm text-gray-600">
              <p>
                <strong>Category:</strong> Honey
              </p>
              <p className="mt-1">
                <strong>Tags:</strong> natural bee honey, natural honey
              </p>
            </div>
            <SocialShare />
          </div>
        </div>
      </div>

      {isFullscreenOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white z-10"
            onClick={closeFullscreen}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white z-10"
            onClick={previousImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white z-10"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Main Image */}
          <div className="relative flex items-center justify-center w-[100vw] h-[100vh]">
            <Image
              width={1200}
              height={1200}
              src={productImages[currentImageIndex] || '/placeholder.svg'}
              alt={`Product image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Image Counter */}
          {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
            {currentImageIndex + 1} / {productImages.length}
          </div> */}

          {/* Thumbnail Strip */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 max-w-[90vw] overflow-x-auto px-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentImageIndex
                    ? 'border-white'
                    : 'border-white/30'
                }`}
              >
                <img
                  src={image || '/placeholder.svg'}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover hover:cursor-pointer"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
