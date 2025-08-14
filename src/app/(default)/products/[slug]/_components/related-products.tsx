import { getProducts } from '@/services/products';
import ProductCard from '@/app/(default)/(home)/_components/product-card';

export default async function RelatedProducts({ slug }: { slug: number }) {
  const data = await getProducts({
    page: 1,
    type: 'external',
    lang: 'bn',
    pageSize: 10,
    columnAccessor: '-id',
    search: '',
  });

  const products = await data?.data?.results;
  const relatedProducts = products.filter((product) => product.id !== slug);
  const randomProducts = relatedProducts.sort(() => Math.random() - 0.5);
  const viewdProducts = randomProducts.slice(0, 4);

  if (viewdProducts.length === 0) return null;

  if (viewdProducts.length > 4) viewdProducts.length = 4;

  return (
    <>
      {viewdProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
