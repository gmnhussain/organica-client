import { z } from 'zod';
import { FieldValues } from 'react-hook-form';

export const brandSchema = z.object({
  logo: z
    .custom<FileList | string | null>((val) => val !== null)
    .transform((val) => {
      if (typeof val === 'string') return val;
      if (val instanceof FileList) return val.item(0) ?? null;
      return null;
    })
    .refine((val) => !val || val instanceof File || typeof val === 'string', {
      message: 'Logo must be a file or URL',
    })
    .optional(),
  name: z.string().min(1, 'Name is required'),
  code: z.string().min(1, 'Code is required'),
  summary: z.string().min(1, 'Summary is required'),
  is_active: z.boolean().default(true),
});

// export type BrandFormValues = z.infer<typeof brandSchema>;

export type BrandFormValues = FieldValues & {
  logo?: File | string | null;
  name: string;
  code: string;
  summary: string;
  is_active: boolean;
};
