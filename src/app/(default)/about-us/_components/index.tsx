import React from 'react';
import AboutUs from './about-us';

export default function Page() {
  return (
    <>
      {/* <div className="pageBanner bg-[#f8f6f6] p-6 mb-6">
        <h1 className="text-3xl font-bold text-primary text-center">
          About Us
        </h1>
      </div> */}
      <div className="container mx-auto py-6">
        <AboutUs />
      </div>
    </>
  );
}
