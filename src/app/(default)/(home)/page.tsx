import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Hero from './_components/hero-section';
import Products from './_components/products';
import HealthBenefits from './_components/health-benefits';
import PeanutButterFeatures from './_components/peanut-butter-features';
import PeanutButterComparison from './_components/peanut-butter-comparison';
import Testimonials from './_components/testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Products />
      {/* <HealthBenefits /> */}
      <PeanutButterFeatures />
      {/* <PeanutButterComparison /> */}
      <Testimonials />
    </>
  );
};

export default HomePage;
