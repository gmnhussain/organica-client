'use client';
import React from 'react';
import data from './health-benefits-data.json';

const HealthBenefits = () => {
  return (
    <>
      <section className="px-4 py-10">
        {/* Health Benefits */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center mb-10">
            {data.healthBenefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {/* Left */}
            <div className="space-y-6">
              {data.healthBenefits.left.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img
                src={data.healthBenefits.centerImage}
                alt="Center"
                className="w-60 h-60 object-contain rounded-full border-4 border-orange-200 p-4 bg-white"
              />
            </div>

            {/* Right (Reversed only on desktop) */}
            <div className="space-y-6">
              {data.healthBenefits.right.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 md:flex-row-reverse md:text-right"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthBenefits;
