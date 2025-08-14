import { z } from 'zod';
// import { FieldValues } from 'react-hook-form';

export const checkoutSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobile: z.string().min(11, 'Mobile number must be at least 11 digits'),
  address: z.string().min(1, 'Address is required'),
  orderNote: z.string().optional(),
  terms: z
    .boolean()
    .refine((val) => val, 'You must accept the terms and conditions'),
  otp: z.string().optional(),
});
