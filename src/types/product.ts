// export type ProductStatus = 'active' | 'draft' | 'archived';

// export interface Product {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   stock: number;
//   category: string;
//   status: ProductStatus;
// }

// export interface ProductCategory {
//   id: string;
//   name: string;
//   parentId: string | null;
//   status: 'active' | 'inactive';
//   description?: string;
// }

export interface Product {
  id: number;
  name: string;
  type: string;
  capacity: number;
  photo: string;
  // gallery: null,
  weight: string;
  // price: number;
  costprice: number;
  mrpprice: number;
  quantity: number;
  // stock: number;
  // category: string;
}
