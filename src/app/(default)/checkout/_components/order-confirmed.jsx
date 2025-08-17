'use cilient';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { getPDF } from '@/services/pdf';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const OrderConfirmed = ({ orderSummary }) => {
  const {
    id,
    invoiceNo,
    products,
    deliveryCharge,
    totalCost,
    deliveryInfo: { name, contact_no, address },
  } = orderSummary;

  const [isDownloading, setIsDownloading] = useState(false);

  const nameInitials = name.split(' ')?.[0] || '';

  const handleDownload = async (e) => {
    e.preventDefault();

    setIsDownloading(true);

    // const url = getPDFDataUrl();
    const response = await getPDF(
      `/pdf/get-invoice-pdf/${id}/`,
      `invoice-${invoiceNo}`
    );

    if (response?.success) {
      setIsDownloading(false);
    } else {
      console.error(response.message);
      setIsDownloading(false);
      toast.error('Failed to export!');
    }

    // console.log("handleDownload: ", orderSummary);
    return;
  };

  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-center">
        <div className="max-w-md w-full bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center mb-2">
              <Check className="h-6 w-6 text-white bg-green-600 rounded-full p-1 me-2" />
              <h1 className={`text-2xl font-bold`}>Order Confirmed!</h1>
            </div>

            <p className={`text-[16px]`}>
              Thank you for your purchase, {nameInitials}!
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  className="flex justify-between pb-3 border-b border-gray-200"
                  key={index}
                >
                  <p className={`text-[16px]`}>
                    {index + 1}. {product?.product_name || ''} x{' '}
                    {product.quantity || 1}
                  </p>
                  <p className={`text-[16px]`}>
                    Tk {Number(product?.unit_mrp * product.quantity) || 0}
                  </p>
                </div>
              ))}

              {/* <div className="flex justify-between pb-3 border-b border-gray-200">
                <p className="text-[16px]">
                  2. Wildflower Honey x 2
                </p>
                <p className="text-[16px]">Tk 600</p>
              </div> */}

              <div className="flex justify-between pb-3 border-b border-gray-200">
                <p className={`text-[16px]`}>Delivery:</p>
                <p className={`text-[16px]`}>Tk {deliveryCharge || 0}</p>
              </div>
              <div className="flex justify-between font-bold">
                <p className={`text-[16px]`}>Total:</p>
                <p className={`text-[16px]`}>Tk {totalCost || 0}</p>
              </div>
            </div>
          </div>

          <h2 className={`text-lg font-bold !text-center mb-4`}>
            Delivery Information
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
            <div className="space-y-2">
              <div className="flex">
                <p className={`text-[16px] font-semibold w-24 !text-left`}>
                  Name:
                </p>
                <p className={`text-[16px]`}>{name || ''}</p>
              </div>
              <div className="flex">
                <p className={`text-[16px] font-semibold w-24 !text-left`}>
                  Address:
                </p>
                <p className={`text-[16px]`}>{address || ''}</p>
              </div>
              <div className="flex">
                <p className={`text-[16px] font-semibold w-24 !text-left`}>
                  Phone:
                </p>
                <p className={`text-[16px]`}>{contact_no || ''}</p>
              </div>
              <div className="pt-3 border-t border-gray-200 mt-2">
                <p className={`text-[16px] !text-left`}>
                  Expected Delivery: Within 5 Days
                </p>
              </div>
            </div>
          </div>

          <p className={`text-center mb-6 text-[16px] !text-center`}>
            You'll get a confirmation message soon.
          </p>

          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              type="button"
              className={`text-[15px] flex justify-center rounded-md py-2 px-4 transition duration-300`}
              onClick={(e) => handleDownload(e)}
              disabled={isDownloading}
            >
              {isDownloading ? 'Downloading' : 'Download Invoice'}
            </Button>
            <Button
              variant="outline"
              type="button"
              className={`text-[15px] flex justify-center rounded-md py-2 px-4 transition duration-300`}
              onClick={() => (window.location.href = '/')}
            >
              Order Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
