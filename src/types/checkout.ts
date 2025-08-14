export type DeliveryZone = {
  //   value: string;
  value: number;
  label: string;
  deliveryCharge: number;
};

export type PaymentMethod = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

export interface Checkout {
  id: string;
  logo?: File | string | null;
  name: string;
  code: string;
  summary?: string;
  is_active: boolean;
}

export interface CheckoutFormValues {
  fullName: string;
  mobile: string;
  address: string;
  orderNote?: string;
  terms: boolean;
  paymentMethod: PaymentMethod['value'];
  deliveryZone: DeliveryZone['value'];
  otp: string;
}

export interface CheckoutFormData {
  fullName: string;
  mobile: string;
  address: string;
  orderNote?: string;
  terms: boolean;
}

export interface CheckoutFormState {
  success: boolean;
  data?: object;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
  fields?: Partial<CheckoutFormData>;
}
