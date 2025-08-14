import { getProductById } from '@/services/products';
import ProductDetailsPage from './product-detail';

export default async function ProductView({ slug }: { slug: number }) {
  const data = await getProductById({
    id: slug,
  });

  const products = await data?.data?.results;
  const product = products.find((p) => p.id === slug);

  return <ProductDetailsPage product={product} />;
}
