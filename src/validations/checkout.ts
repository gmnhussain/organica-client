import { z } from 'zod';

export const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .max(100, 'Full name must not exceed 100 characters'),

  mobile: z.string().regex(/^01[3-9]\d{8}$/, 'Invalid mobile number'), // 11 digits only, starts with 013-019

  address: z
    .string()
    .min(1, 'Address is required')
    .max(500, 'Address must not exceed 500 characters'),

  orderNote: z
    .string()
    .max(500, 'Order note must not exceed 500 characters')
    .optional(),

  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),

  otp: z
    .string()
    .length(4, 'OTP must be exactly 4 digits')
    .regex(/^\d{4}$/, 'OTP must be a 4-digit number')
    .or(z.literal(''))
    .optional(),
});

export type CheckoutFormValues = z.output<typeof checkoutSchema>;
