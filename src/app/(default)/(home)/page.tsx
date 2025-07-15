import React from 'react';
import { Star, CheckCircle, Leaf, Award, Heart } from 'lucide-react';
import HeroSection from './_components/hero-section';
import ProductsSection from './_components/products-section';

const OrganicHoneyWebsite = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: 'হৃদয়ের জন্য উপকারী',
      desc: 'প্রাকৃতিক মধু হৃদয়ের স্বাস্থ্য উন্নতি করে',
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'প্রাকৃতিক অ্যান্টিঅক্সিডেন্ট',
      desc: 'শরীরের রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে',
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'পুষ্টিগুণ সমৃদ্ধ',
      desc: 'ভিটামিন ও মিনারেল সমৃদ্ধ প্রাকৃতিক খাবার',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: 'বিশুদ্ধ ও নিরাপদ',
      desc: 'রাসায়নিক মুক্ত ১০০% খাঁটি প্রাকৃতিক মধু',
    },
  ];

  const ingredients = [
    { name: 'লিচু', image: '/api/placeholder/80/80' },
    { name: 'সরিষা', image: '/api/placeholder/80/80' },
    { name: 'খেজুর', image: '/api/placeholder/80/80' },
    { name: 'কালোজিরা', image: '/api/placeholder/80/80' },
    { name: 'বন ফুল', image: '/api/placeholder/80/80' },
    { name: 'সুন্দরবন', image: '/api/placeholder/80/80' },
  ];

  const features = [
    'প্রাকৃতিক ও বিশুদ্ধ মধু',
    'রাসায়নিক মুক্ত',
    'পুষ্টিগুণ সমৃদ্ধ',
    'স্বাস্থ্যকর ও নিরাপদ',
    'সরাসরি মৌচাক থেকে সংগ্রহ',
    'কোন কৃত্রিম উপাদান নেই',
  ];

  const testimonials = [
    {
      name: 'আহমেদ আলী',
      role: 'গৃহিণী',
      image: '/api/placeholder/80/80',
      comment:
        'অরগানিক মধুর গুণমান অসাধারণ। আমার পরিবারের সবাই এই মধু খেয়ে খুশি।',
    },
    {
      name: 'ফাতেমা খাতুন',
      role: 'শিক্ষক',
      image: '/api/placeholder/80/80',
      comment:
        'এই মধু খেয়ে আমার স্বাস্থ্যের উন্নতি হয়েছে। সবাইকে সুপারিশ করি।',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            মধুর উপকারিতা ও বৈশিষ্ট্য
          </h2>
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-b from-yellow-300 to-amber-500 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-b from-yellow-200 to-amber-400 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            মধুর উপাদান ও উৎস
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-b from-green-200 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-10 h-10 text-green-700" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {ingredient.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-8">
                কেন আমাদের মধু বেছে নেবেন?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                আরো জানুন
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-b from-yellow-300 to-amber-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-12">
            মানের নিশ্চয়তা এবং বিশেষত্ব
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                গুণমান নিয়ন্ত্রণ
              </h3>
              <p className="text-gray-600">
                প্রতিটি পণ্যের গুণমান যাচাই করা হয়
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                প্রাকৃতিক উৎস
              </h3>
              <p className="text-gray-600">সরাসরি প্রকৃতি থেকে সংগ্রহ</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                পুরস্কার প্রাপ্ত
              </h3>
              <p className="text-gray-600">বিভিন্ন পুরস্কার ও স্বীকৃতি</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                স্বাস্থ্যকর
              </h3>
              <p className="text-gray-600">পুষ্টিগুণ ও স্বাস্থ্য উপকারিতা</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            গ্রাহকদের মতামত
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganicHoneyWebsite;
