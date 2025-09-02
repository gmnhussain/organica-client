'use client';
import React from 'react';
import data from './health-benefits-data.json';
import Image from 'next/image';

const HealthBenefits = () => {
  return (
    <>
      <section className="py-20 container mx-auto">
        {/* Health Benefits */}
        <div className="">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-14">
            {data.healthBenefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {/* Left */}
            <div className="space-y-10">
              {data.healthBenefits.left.map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="flex items-center justify-center text-2xl bg-[#fbe4cf] w-[60px] h-[60px] rounded-full flex-shrink-0">
                    <Image
                      width={30}
                      height={30}
                      src={item.icon}
                      alt="Icon"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center bg_circle">
              <div className="centerImage flex justify-center items-center">
                <Image
                  width={150}
                  height={150}
                  src={data.healthBenefits.centerImage}
                  alt="Center Image"
                  className="w-46 h-46 object-contain"
                />
              </div>
            </div>

            {/* Right (Reversed only on desktop) */}
            <div className="space-y-10">
              {data.healthBenefits.right.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 md:flex-row-reverse md:text-right"
                >
                  <div className="flex items-center justify-center text-2xl bg-[#fbe4cf] w-[60px] h-[60px] rounded-full flex-shrink-0">
                    <Image
                      width={30}
                      height={30}
                      src={item.icon}
                      alt="Icon"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
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
