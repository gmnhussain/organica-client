'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center text-center">
        <p className="mt-4 mb-8 text-muted-foreground">
          Something went wrong to fetch!
        </p>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <a href="/brands">Reload</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
