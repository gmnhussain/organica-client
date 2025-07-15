import React from 'react';
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle,
  Leaf,
  Award,
  Heart,
} from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'খেজুর গুড়',
      price: '৳২৫০',
      image: '/api/placeholder/200/200',
      rating: 5,
    },
    {
      id: 2,
      name: 'মধু',
      price: '৳৩৫০',
      image: '/api/placeholder/200/200',
      rating: 5,
    },
    {
      id: 3,
      name: 'সরিষা মধু',
      price: '৳৪০০',
      image: '/api/placeholder/200/200',
      rating: 5,
    },
    {
      id: 4,
      name: 'লিচু মধু',
      price: '৳৪৫০',
      image: '/api/placeholder/200/200',
      rating: 5,
    },
    {
      id: 5,
      name: 'কালোজিরা মধু',
      price: '৳৫০০',
      image: '/api/placeholder/200/200',
      rating: 5,
    },
    {
      id: 6,
      name: 'বন মধু',
      price: '৳৬০০',
      image: '/api/placeholder/200/200',
      rating: 5,
    },
    {
      id: 7,
      name: 'সুন্দরবন মধু',
      price: '৳৭০০',
      image: '/api/placeholder/200/200',
      rating: 5,
    },
    {
      id: 8,
      name: 'মিশ্র মধু',
      price: '৳৩০০',
      image: '/api/placeholder/200/200',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          আমাদের পণ্যসমূহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-b from-yellow-200 to-amber-300 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-2xl font-bold text-green-600 mb-4">
                  {product.price}
                </p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  অর্ডার করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
