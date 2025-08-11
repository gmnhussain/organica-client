import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Hero from './_components/hero-section';
import Products from './_components/products';
import HealthBenefits from './_components/health-benefits';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Products />
      <HealthBenefits />
    </>
  );
};

export default HomePage;
