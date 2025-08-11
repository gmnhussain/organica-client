import type React from 'react';
import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="bg-white">
        <main className="min-h-screen">{children}</main>
      </div>
      <Footer />
    </>
  );
}
