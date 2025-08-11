import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Hero from './_components/hero-section';
import Products from './_components/products';
import HealthBenefits from './_components/health-benefits';
import PeanutButterFeatures from './_components/peanut-butter-features';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Products />
      <HealthBenefits />
      <PeanutButterFeatures />
    </>
  );
};

export default HomePage;
