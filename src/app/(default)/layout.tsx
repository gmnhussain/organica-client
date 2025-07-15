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
      <div className="flex min-h-screen bg-background">
        <div className="flex-1 flex flex-col">
          <main className="flex-1 bg-muted">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
