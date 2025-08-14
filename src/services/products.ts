'use server';

import { revalidateTag } from 'next/cache';
import { sleep } from '@/lib/utils';
import { API_BASE_URL } from '@/lib/config';
// import { getTokenFromSession } from '@/lib/session';
// import { BrandFormData, BrandFormState } from '@/types/brand';

export async function getProducts({
  page = 1,
  type = 'external',
  lang = 'bn',
  pageSize = 10,
  columnAccessor = '-id',
  search = '',
}) {
  await sleep(500); // Simulate delay

  // throw new Error('User is not authenticated');

  // return {
  //   data: [],
  // };

  // Get session data
  //   const token = await getTokenFromSession();

  //   if (!token) {
  //     throw new Error('User is not authenticated');
  //   }

  const response = await fetch(
    `${API_BASE_URL}/api/product/get-product/?type=${type}&page=${page}&page_size=${pageSize}&column_accessor=${columnAccessor}&lang=${lang}&search=${search}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`, // Attach JWT token
      },
      next: { tags: ['products'] },
    }
  );

  const data = await response.json();

  // console.log('Response:', data);

  if (!response.ok) {
    throw new Error('Failed to fetch brands');
  }

  // console.log(data);

  return data; // Returns { brands, pagination }
}

export async function getProductById({ id = 1 }) {
  await sleep(500); // Simulate delay

  const response = await fetch(
    `${API_BASE_URL}/api/product/get-product/?id=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`, // Attach JWT token
      },
      next: { tags: ['products'] },
    }
  );

  const data = await response.json();

  // console.log('Response:', data);

  if (!response.ok) {
    throw new Error('Failed to fetch brands');
  }

  // console.log(data);

  return data; // Returns { brands, pagination }
}
