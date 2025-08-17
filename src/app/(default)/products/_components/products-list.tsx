import { getProducts } from '@/services/products';
import ProductData from './product-data';

const Products = async () => {
  const data = await getProducts({
    // page: currentPage,
    page: 1,
    type: 'external',
    lang: 'bn',
    // limit: limit,
    pageSize: 10,
    columnAccessor: '-id',
    search: '',
    // query: query,
    // query: '',
  });

  const productsData = await data?.data?.results;

  return <ProductData productsData={productsData} />;
};

export default Products;
