import ProductCard from '@/components/shared/product-card-sidebar';
import { getProducts } from '@/services/products';

export const RelatedProducts = async () => {
  const data = await getProducts({
    page: 1,
    type: 'external',
    lang: 'bn',
    pageSize: 10,
    columnAccessor: '-id',
    search: '',
  });

  const products = await data?.data?.results;

  const topRatedProducts = products
    .sort((a: any, b: any) => {
      return b.rating - a.rating;
    })
    .slice(0, 4);

  return (
    <>
      {topRatedProducts.map((product: any, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </>
  );
};
