// @ts-nocheck

'use client';

import type React from 'react';
import Image from 'next/image';

import {
  useState,
  startTransition,
  useActionState,
  useEffect,
  useCallback,
} from 'react';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Minus, Plus, Trash2, Tag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

import SafeImage from '@/components/shared/image';

import { useCartStore, useCartSubtotal } from '@/stores/useCartStore';
import { getStoragePath } from '@/lib/helpers';
import { cn } from '@/lib/utils';

import {
  DeliveryZone,
  PaymentMethod,
  CheckoutFormState,
  // CheckoutFormValues,
} from '@/types/checkout';
import { checkoutSchema, CheckoutFormValues } from '@/validations/checkout';
import { createCheckout, confirmOrder } from '@/services/checkout';

import OTPPanel from './otp-panel';
import OrderConfirmed from './order-confirmed';

// Constants
const DELIVERY_ZONES: DeliveryZone[] = [
  {
    // value: 'inside',
    value: 1,
    label: 'Inside Dhaka',
    deliveryCharge: 100,
  },
  {
    value: 3,
    label: 'Outside Dhaka',
    deliveryCharge: 200,
  },
];

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    value: 'cash',
    label: 'Cash On Delivery',
    icon: '/taka-1.png',
  },
  {
    value: 'bkash',
    label: 'bKash',
    icon: '/bkash.svg',
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, updateQty, clearCart } = useCartStore();
  const subtotal = useCartSubtotal();

  const [paymentMethod, setPaymentMethod] = useState<string>('cash');
  const [deliveryZone, setDeliveryZone] = useState<number>(1);
  const [couponCode, setCouponCode] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [shippingCharge, setShippingCharge] = useState<number>(
    DELIVERY_ZONES[0].deliveryCharge
  );

  const [isMounted, setIsMounted] = useState(false);
  const [step, setStep] = useState<'form' | 'otp' | 'confirmed'>('form');

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  const [otpRequestState, otpRequestAction, isOtpPending] = useActionState<
    CheckoutFormState,
    FormData
  >(createCheckout, { success: null });

  const [otpVerifyState, otpVerifyAction, isVerifyPending] = useActionState<
    CheckoutFormState,
    FormData
  >(confirmOrder, { success: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
    getValues,
    setError,
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      mobile: '',
      address: '',
      orderNote: '',
      paymentMethod: '',
      deliveryZone: '',
      terms: false,
      otp: '',
    },
  });

  // Calculate shipping charge when delivery zone changes
  useEffect(() => {
    const selectedZone = DELIVERY_ZONES.find(
      (zone) => zone.value === deliveryZone
    );
    if (selectedZone) {
      setShippingCharge(selectedZone.deliveryCharge);
    }
  }, [deliveryZone]);

  // Calculate total
  const total = (subtotal || 0) + shippingCharge - discount;

  // Handle coupon application
  const handleApplyCoupon = useCallback(() => {
    // In a real app, you would validate the coupon with your backend
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10);
      toast.success('Coupon applied successfully!');
    } else {
      toast.error('Invalid coupon code');
    }
  }, [couponCode]);

  // Handle quantity update
  const handleUpdateQty = useCallback((id: number, newQty: number) => {
    if (newQty < 1) {
      if (confirm('Remove this item from your cart?')) {
        updateQty(id, 0);
      }
      return;
    }
    updateQty(id, newQty);
  }, []);

  // Handle form submission
  const requestOtp = async (data: CheckoutFormValues) => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    // console.log('Submit data:', data);

    const requestOtpPayload = {
      contact_no: data.mobile,
    };

    try {
      startTransition(() => {
        otpRequestAction(requestOtpPayload);
      });

      // router.push('/order-confirmation');
    } catch (error) {
      console.error('Order submission error:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
    }
  };

  useEffect(() => {
    if (!otpRequestState || otpRequestState.success === null) return;

    if (otpRequestState.success) {
      setStep('otp');

      toast.success('Success', {
        description: 'OTP sent to your mobile number.',
      });
      // router.refresh();
    } else if (otpRequestState.error) {
      toast.error('Failed', {
        description: 'Failed to send OTP.',
      });
    }
  }, [otpRequestState, reset]);

  const verifyAndSubmit = async () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const data = getValues();

    // console.log('Submit data:', data);

    try {
      const orderPayload = {
        // ...data,
        products: cart.map((item) => ({
          id: item.id,
          order_quantity: item.qty,
        })),
        // paymentMethod,
        deliveryzone: deliveryZone,
        // couponCode: couponCode || null,
        // items: cart,
        product_cost: subtotal,
        // shippingCharge,
        // discount,
        grand_total: total,
        name: data.fullName,
        contact_no: data.mobile,
        address: data.address,
        order_note: data.orderNote,
        otp: data.otp,
        is_combo: false,
      };

      // console.log('Paylaod', orderPayload);

      startTransition(() => {
        otpVerifyAction(orderPayload);
      });

      // router.push('/order-confirmation');
    } catch (error) {
      console.error('Order submission error:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
    }
  };

  useEffect(() => {
    if (!otpVerifyState || otpVerifyState.success === null) return;

    if (otpVerifyState.success) {
      const data = getValues();

      // console.log('OtpVerifyState', otpVerifyState);

      setOrderSummary({
        // response: result,
        invoiceNo: otpVerifyState?.data?.invoice_no,
        id: otpVerifyState?.data?.id,
        products: otpVerifyState?.data?.order_items || [],
        deliveryCharge: otpVerifyState?.data?.delivery_cost || 0,
        totalCost: otpVerifyState?.data?.grand_total || 0,
        deliveryInfo: {
          name: data?.fullName,
          contact_no: data?.mobile,
          address: data?.address,
        },
      });
      reset();
      clearCart();
      toast.success('Success', {
        description: 'Purchase placed successfully.',
      });
      setIsOrderConfirmed(true);
      setStep('confirmed');

      // router.refresh();
    } else {
      toast.error('Failed', {
        description: otpVerifyState?.error || 'Failed to place order.',
      });
    }
    // }, [formState, reset, router]);
  }, [otpVerifyState, reset]);

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (cart.length === 0 && !isOrderConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-sm max-w-md">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-6">
            Add some products to your cart before checking out.
          </p>
          <Button onClick={() => router.push('/products')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        {step === 'otp' ? (
          <OTPPanel
            mobile={watch('mobile')}
            onBack={() => setStep('form')}
            onVerify={async (otp) => {
              console.log(otp);
              setValue('otp', otp);
              await verifyAndSubmit();
            }}
            isPending={isVerifyPending}
            // onResend={handleResendOtp}
            // resendCooldown={resendCooldown}
            onResend={handleSubmit(requestOtp)}
            // resendCooldown={() => {}}
          />
        ) : step === 'form' ? (
          <form onSubmit={handleSubmit(requestOtp)}>
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Customer Information Section */}
              <div className="bg-white border rounded-md md:px-12 py-8 lg:col-span-3">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                    Checkout
                  </h1>

                  <div className="space-y-8">
                    {/* Customer Information */}
                    <div>
                      <h2 className="text-md font-medium text-gray-900 mb-4">
                        Customer Information
                      </h2>

                      <div className="space-y-4">
                        <div>
                          <Label
                            htmlFor="fullName"
                            className="text-sm font-medium text-gray-700"
                          >
                            Full Name
                          </Label>
                          <Input
                            id="fullName"
                            placeholder="Enter full name"
                            className="mt-1 shadow-none"
                            {...register('fullName')}
                          />
                          {errors.fullName && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.fullName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="mobile"
                            className="text-sm font-medium text-gray-700"
                          >
                            Mobile Number
                          </Label>
                          <Input
                            id="mobile"
                            placeholder="Enter mobile number"
                            className="mt-1 shadow-none"
                            {...register('mobile')}
                          />
                          {errors.mobile && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.mobile.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="address"
                            className="text-sm font-medium text-gray-700"
                          >
                            Your Address
                          </Label>
                          <Input
                            id="address"
                            placeholder="Enter your address"
                            className="mt-1 shadow-none"
                            {...register('address')}
                          />
                          {errors.address && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.address.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="orderNote"
                            className="text-sm font-medium text-gray-700"
                          >
                            Order Note
                          </Label>
                          <Textarea
                            id="orderNote"
                            placeholder="Enter Order Note"
                            className="mt-1 min-h-[80px] shadow-none"
                            {...register('orderNote')}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h2 className="text-md font-medium text-gray-900 mb-4">
                        Payment Method
                      </h2>
                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="grid grid-cols-2 gap-4"
                      >
                        {PAYMENT_METHODS.map((method) => (
                          <div
                            key={method.value}
                            className={cn(
                              'flex items-center space-x-3 p-3 border rounded-lg',
                              paymentMethod === method.value &&
                                'bg-blue-50 border-blue-200'
                            )}
                          >
                            <RadioGroupItem
                              value={method.value}
                              id={method.value}
                            />
                            <Label
                              htmlFor={method.value}
                              className="flex items-center space-x-2 cursor-pointer w-full"
                            >
                              <Image
                                src={method.icon}
                                alt={method.label}
                                width={70}
                                height={70}
                                className="w-10 h-6 object-contain"
                              />
                              <span>{method.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Delivery Zone */}
                    <div>
                      <h2 className="text-md font-medium text-gray-900 mb-4">
                        Delivery zone
                      </h2>
                      <RadioGroup
                        value={deliveryZone}
                        onValueChange={setDeliveryZone}
                        className="grid grid-cols-2 gap-4"
                      >
                        {DELIVERY_ZONES.map((zone) => (
                          <div
                            key={zone.value}
                            className={cn(
                              'flex items-center space-x-3 p-3 border rounded-lg',
                              deliveryZone === zone.value &&
                                'bg-blue-50 border-blue-200'
                            )}
                          >
                            <RadioGroupItem
                              value={zone.value}
                              id={zone.value}
                            />
                            <Label
                              htmlFor={zone.value}
                              className="cursor-pointer flex-1 w-full h-6"
                            >
                              <div className="flex justify-between items-center w-full">
                                <span>{zone.label}</span>
                                <span className="font-medium">
                                  TK {zone.deliveryCharge}
                                </span>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start space-x-2 mt-1">
                      <Checkbox
                        id="terms"
                        // checked={watch('terms')}
                        // {...register('terms')}
                        onCheckedChange={(checked) => {
                          setValue('terms', Boolean(checked));
                          setError('terms', { message: '' });
                        }}
                      />
                      <div>
                        <Label
                          htmlFor="terms"
                          className="text-sm text-gray-600 cursor-pointer"
                        >
                          I have read and agree to the Terms and Conditions.
                        </Label>
                        {errors.terms && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.terms.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="lg:col-span-2">
                <div className="bg-white p-10 border rounded-md">
                  <h2 className="text-md font-medium text-gray-900 mb-6">
                    Order Summary
                  </h2>

                  {/* Cart Items */}
                  <div className="space-y-6 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-20 h-20 border rounded-sm p-[1px] bg-white">
                          <SafeImage
                            src={getStoragePath(item?.photo)}
                            alt={item?.name || ''}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>

                        <div className="min-h-20 flex-1 flex justify-center flex-col">
                          <h3 className="text-sm font-medium text-gray-900">
                            {item?.name || ''}
                          </h3>
                          <p className="text-sm text-gray-500">
                            <span className="text-xs">&#10005;</span>{' '}
                            {item?.qty || 0}
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            TK{' '}
                            {item.mrpprice ? item.mrpprice.toFixed(2) : '0.00'}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/* Quantity Control */}
                          <div className="flex items-center border rounded-sm">
                            {/* Minus */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleUpdateQty(item.id, item.qty - 1)
                              }
                              className="h-8 w-8 p-0 hover:bg-gray-100 rounded-none border-r"
                              type="button"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>

                            {/* Qty */}
                            <span className="w-12 text-center text-sm font-medium py-1">
                              {item.qty}
                            </span>

                            {/* Plus */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleUpdateQty(item.id, item.qty + 1)
                              }
                              className="h-8 w-8 p-0 hover:bg-gray-100 rounded-none border-l"
                              type="button"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          {/* Remove */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleUpdateQty(item.id, 0)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-600 shadow-none"
                            type="button"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Coupon Code */}
                  <div className="mb-6">
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="pl-10 shadow-none bg-white"
                        />
                      </div>
                      <Button
                        variant="outline"
                        className="bg-white"
                        onClick={handleApplyCoupon}
                        type="button"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  {/* Order Totals */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">
                        TK {subtotal ? subtotal.toFixed(2) : '0.00'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        TK {shippingCharge.toFixed(2)}
                      </span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Discount</span>
                        <span className="font-medium text-green-600">
                          -TK {discount.toFixed(2)}
                        </span>
                      </div>
                    )}
                    <hr className="my-3" />
                    <div className="flex justify-between text-md font-semibold">
                      <span>Total</span>
                      <span>TK {total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    className="w-full bg-[#6a8042] hover:bg-[#6a8042]/90 text-white py-3"
                    type="submit"
                    disabled={isOtpPending}
                  >
                    {isOtpPending ? 'Processing...' : 'Confirm Your Order'}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        ) : step === 'confirmed' ? (
          <OrderConfirmed orderSummary={orderSummary} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
