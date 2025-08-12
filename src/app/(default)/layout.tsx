import type React from 'react';
import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import CartDrawer from '@/components/shared/cart-drawer';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="">
        <main className="min-h-screen">{children}</main>
      </div>
      <Footer />
      <CartDrawer />
    </>
  );
}
