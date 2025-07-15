import type { Metadata } from 'next';

import { Suspense } from 'react';
import {
  Card,
  // CardContent,
  // CardDescription,
  // CardHeader,
  // CardTitle,
} from '@/components/ui/card';
// import { CreateBrandModal } from './_components/create-brand-modal';

// import TableSkeleton from '@/components/skeletons/basic-table-list';
// import PageComponent from './_components';

export const metadata: Metadata = {
  title: 'Product Brands',
  description: 'Manage your product brands',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    limit?: string;
  };
}) {
  const queryParams = await searchParams;

  const query: string = queryParams?.query || '';
  const currentPage = Number(queryParams?.page || 1);
  const limit = Number(queryParams?.limit || 10);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Product Brands</h1>
        </div>
        {/* <CreateBrandModal /> */}
      </div>

      <Card className="shadow-none rounded-sm gap-0">
        <Suspense
          key={`brands-query-${query}-page-${currentPage}-limit-${limit}`}
          // fallback={<TableSkeleton />}
        >
          {/* <PageComponent
            currentPage={currentPage}
            limit={limit}
            query={query}
          /> */}
        </Suspense>
      </Card>
    </div>
  );
}
