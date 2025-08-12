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

// export async function createBrand(
//   prevState: BrandFormState | null,
//   formData: FormData
// ): Promise<BrandFormState> {
//   // await sleep(1000); // Simulate delay

//   console.log(formData);

//   try {
//     const token = await getTokenFromSession();

//     if (!token) {
//       throw new Error('User is not authenticated');
//     }

//     const response = await fetch(`${API_BASE_URL}/brands`, {
//       method: 'POST',
//       headers: {
//         // 'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`, // Attach JWT token
//       },
//       // body: JSON.stringify(formData),
//       body: formData,
//     });

//     console.log('Response:', response);

//     const data = await response.json();

//     console.log('Response:', data);

//     if (!response.ok) {
//       return {
//         success: false,
//         error: data.message || 'Failed to create brand',
//         errors: data.errors || null,
//         fields: Object.fromEntries(formData) as Partial<BrandFormData>,
//       };
//     }

//     // 2. Revalidate the cache
//     revalidateTag('brands'); // This triggers refetch of getBrands()
//     // Or revalidatePath('/brands')

//     return {
//       success: true,
//       message: 'Brand created successfully!',
//       data,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error:
//         error instanceof Error ? error.message : 'An unknown error occurred',
//       fields: Object.fromEntries(formData) as Partial<BrandFormData>,
//     };
//   }
// }

// // services/brands.ts
// export async function updateBrand(
//   prevState: BrandFormState | null,
//   formData: FormData
// ): Promise<BrandFormState> {
//   // await sleep(100); // Simulate delay

//   console.log(formData);

//   try {
//     const token = await getTokenFromSession();
//     if (!token) throw new Error('User is not authenticated');

//     const response = await fetch(
//       `${API_BASE_URL}/brands/${formData.get('id')}`,
//       {
//         // method: 'PUT',
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       }
//     );

//     console.log('Response:', response);

//     const data = await response.json();

//     if (!response.ok) {
//       return {
//         success: false,
//         error: data.message || 'Failed to update brand',
//         errors: data.errors || null,
//         fields: Object.fromEntries(formData) as Partial<BrandFormData>,
//       };
//     }

//     revalidateTag('brands');

//     return {
//       success: true,
//       message: 'Brand updated successfully!',
//       data,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error:
//         error instanceof Error ? error.message : 'An unknown error occurred',
//       fields: Object.fromEntries(formData) as Partial<BrandFormData>,
//     };
//   }
// }

// export async function deleteBrand(
//   id: string
// ): Promise<{ success: boolean; message?: string; errors?: object }> {
//   // await sleep(100); // Simulate delay

//   try {
//     const token = await getTokenFromSession();
//     if (!token) throw new Error('User is not authenticated');

//     const response = await fetch(`${API_BASE_URL}/brands/${id}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     console.log('Response:', response);

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Failed to delete brand');
//     }

//     // const data = await response.json();

//     // if (!response.ok) {
//     //   return {
//     //     success: false,
//     //     error: data.message || 'Failed to update brand',
//     //     errors: data.errors || null,
//     //     // fields: Object.fromEntries(id) as Partial<BrandFormData>,
//     //   };
//     // }

//     revalidateTag('brands');

//     return {
//       success: true,
//       message: 'Brand deleted successfully!',
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message:
//         error instanceof Error ? error.message : 'An unknown error occurred',
//       // fields: Object.fromEntries(formData) as Partial<BrandFormData>,
//     };
//   }
// }
