import React from 'react';
import ContactUs from './contact';

export default function Page() {
  return (
    <>
      <div className="pageBanner bg-[#f8f6f6] p-6">
        <h1 className="text-3xl font-bold text-primary text-center">
          Contact Us
        </h1>
      </div>
      <div className="container mx-auto py-6">
        <ContactUs />
      </div>
    </>
  );
}
