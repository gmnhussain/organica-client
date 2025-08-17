// 'use server';

import { API_BASE_URL } from '@/lib/config';

export const getPDF = async (url: string, fileName: string) => {
  console.log(url);
  try {
    const response = await fetch(API_BASE_URL + url, {
      method: 'GET',
      //   headers: {
      //     Authorization: `Bearer ${token ? token : ""}`,
      //   },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const pdfBlob = await response.blob(); // Convert response to a blob
      const pdfUrl = URL.createObjectURL(pdfBlob); // Create a blob URL

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', `${fileName}.pdf`); // Specify the file name
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(pdfUrl);

      return {
        success: true,
      };
    } else {
      return {
        success: false,
        error: true,
        message: response?.statusText || 'Failed to download PDF',
      };
    }
  } catch (error) {
    console.error('Failed: ', error);
    return {
      success: false,
      error: true,
      message: 'An error occurred. Please try again later.',
    };
  }
};
