import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              আপনি পেতে পারেন সুস্বাদু তাজা
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              সাথে ফিটনেস এর সব রকার সেবা
            </p>
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-24 bg-orange-500 rounded-lg opacity-90"
                  ></div>
                ))}
              </div>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
              অর্ডার করুন
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-32 h-40 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-lg relative">
                  <div className="absolute top-2 left-2 right-2 h-6 bg-orange-600 rounded-sm"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="bg-white rounded px-2 py-1 text-xs font-bold">
                      Organic
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 mb-2">
                  লিচুর চাকলেট মাখন ক্রিমি
                </h3>
                <p className="text-lg font-bold text-gray-900 mb-3">
                  TK 900.00
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full rounded-md">
                  অর্ডার করুন
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            লিচুর মাখনের স্বাস্থ্য উপকারিতা
          </h2>

          <div className="relative">
            {/* Central honey jar */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-64 h-64 rounded-full border-4 border-green-500 bg-orange-100 flex items-center justify-center">
                  <div className="w-32 h-40 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-lg relative">
                    <div className="absolute top-2 left-2 right-2 h-6 bg-orange-600 rounded-sm"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <div className="bg-white rounded px-2 py-1 text-xs font-bold">
                        Organica
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits arranged in a circle */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'হৃদরোগের ঝুঁকি কমায়',
                  description:
                    'লিচুর মাখন হৃদরোগ প্রতিরোধে সাহায্য করে এবং হৃদযন্ত্রের স্বাস্থ্য ভালো রাখে।',
                },
                {
                  title: 'রোগ প্রতিরোধ ক্ষমতা',
                  description:
                    'প্রাকৃতিক অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ যা রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।',
                },
                {
                  title: 'পুষ্টিকর সংযোজন নেই',
                  description:
                    'কোনো কৃত্রিম রং বা সংরক্ষক নেই, সম্পূর্ণ প্রাকৃতিক এবং নিরাপদ।',
                },
                {
                  title: 'ওজন নিয়ন্ত্রণ করে',
                  description:
                    'লিচুর মাখন ওজন নিয়ন্ত্রণে সাহায্য করে এবং মেটাবলিজম বাড়ায়।',
                },
                {
                  title: 'ভিটামিন সি এর উৎস',
                  description:
                    'প্রচুর ভিটামিন সি রয়েছে যা ত্বক ও চুলের স্বাস্থ্য ভালো রাখে।',
                },
                {
                  title: 'হজমের উন্নতি ও অন্যান্য ব্যাপক সুবিধা',
                  description:
                    'হজমশক্তি বৃদ্ধি করে এবং পেটের সমস্যা সমাধানে সাহায্য করে।',
                },
              ].map((benefit, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
