'use server';

import { revalidateTag } from 'next/cache';
import { sleep } from '@/lib/utils';
import { API_BASE_URL } from '@/lib/config';
import { CheckoutFormData, CheckoutFormState } from '@/types/checkout';

export async function createCheckout(
  prevState: CheckoutFormState | null,
  formData: FormData
): Promise<CheckoutFormState> {
  await sleep(1000); // Simulate delay

  console.log(formData);

  try {
    const response = await fetch(`${API_BASE_URL}/api/otp/generate-otp/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      //   body: formData,
    });

    console.log('Response:', response);

    const data = await response.json();

    console.log('Response:', data);

    if (!response.ok) {
      return {
        success: false,
        error: data.message || 'Failed to send OTP',
        errors: data.errors || null,
        // fields: Object.fromEntries(formData) as Partial<CheckoutFormData>,
        data,
      };
    }

    // 2. Revalidate the cache
    // revalidateTag('brands'); // This triggers refetch of getBrands()
    // Or revalidatePath('/brands')

    return {
      success: true,
      message: 'OTP sent successfully',
      data,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unknown error occurred',
      //   fields: Object.fromEntries(formData) as Partial<CheckoutFormData>,
      //   data,
    };
  }
}

export async function confirmOrder(
  prevState: CheckoutFormState | null,
  formData: FormData
): Promise<CheckoutFormState> {
  await sleep(1000); // Simulate delay

  console.log(formData);

  try {
    const response = await fetch(`${API_BASE_URL}/api/order/add-order/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      //   body: formData,
    });

    console.log('Response:', response);

    const data = await response.json();

    console.log('Response:', data);

    if (!response.ok) {
      return {
        success: false,
        error: data.message || 'Failed to create brand',
        errors: data.errors || null,
        // fields: Object.fromEntries(formData) as Partial<CheckoutFormData>,
      };
    }

    // 2. Revalidate the cache
    // revalidateTag('brands'); // This triggers refetch of getBrands()
    // Or revalidatePath('/brands')

    return {
      success: true,
      message: 'Brand created successfully!',
      data,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unknown error occurred',
      //   fields: Object.fromEntries(formData) as Partial<CheckoutFormData>,
    };
  }
}
