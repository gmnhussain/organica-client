import React from 'react';
import ReturnRefundFaqs from './returnRefundFaqs';

export default function Page() {
  return (
    <>
      <div className="pageBanner bg-[#f8f6f6] p-6 mb-6">
        <h1 className="text-3xl font-bold text-primary text-center">
          Return, Refund Policy & FAQs
        </h1>
      </div>
      <div className="container mx-auto py-6">
        <ReturnRefundFaqs />
      </div>
    </>
  );
}
