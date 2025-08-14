'use client';

import { useRef, useState, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '@/validations/checkout';
import { toast } from 'sonner';

interface OTPPanelProps {
  mobile: string;
  onBack: () => void;
  onVerify: (otp: string) => Promise<void>;
  isPending: boolean;
  onResend?: () => Promise<void>;
  resendCooldown?: number;
}

const OTPPanel = ({
  mobile,
  onBack,
  onVerify,
  isPending,
  onResend,
  resendCooldown = 0,
}: OTPPanelProps) => {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [otp, setOtp] = useState<string[]>(['', '', '', '']);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ otp: string }>({
    resolver: zodResolver(checkoutSchema.pick({ otp: true })),
  });

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setValue('otp', newOtp.join(''));

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    if (!/^\d{4}$/.test(pastedData)) return;

    const newOtp = pastedData.split('').slice(0, 4);
    setOtp(newOtp);
    setValue('otp', newOtp.join(''));
    inputRefs[3].current?.focus();
  };

  const onSubmit = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 4) {
      toast.error('Please enter a 4-digit OTP code');
      return;
    }

    try {
      await onVerify(otpString);
    } catch (error) {
      toast.error('Verification failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-1">Enter Your OTP Code</h1>
        <p className="text-[15px] text-slate-500">
          We've sent a 4-digit code to {mobile}
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="•"
              ref={inputRefs[index]}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
              onPaste={index === 0 ? handleOtpPaste : undefined}
              className="w-14 h-14 text-center text-2xl font-bold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              maxLength={1}
              disabled={isPending}
            />
          ))}
        </div>

        {errors.otp && (
          <p className="text-red-500 text-sm text-center mb-4">
            {errors.otp.message}
          </p>
        )}

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isPending}
            type="button"
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={isPending || otp.join('').length !== 4}
            className=""
          >
            {isPending ? 'Verifying...' : 'Confirm Order'}
          </Button>
        </div>
      </form>

      <div className="text-sm text-slate-500 mt-4 text-center">
        Didn't receive code?{' '}
        <button
          type="button"
          onClick={onResend}
          disabled={resendCooldown > 0 || isPending}
          className="font-medium hover:text-goldDark-500 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend'}
        </button>
      </div>
    </div>
  );
};

export default OTPPanel;
