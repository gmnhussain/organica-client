const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-green-800 mb-6">
          প্রাকৃতিক খাঁটি মধু
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          সুন্দরবন ও বিভিন্ন প্রাকৃতিক উৎস থেকে সংগ্রহ করা বিশুদ্ধ মধু
        </p>
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-20 h-32 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              ></div>
            ))}
          </div>
        </div>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
          অর্ডার করুন
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
