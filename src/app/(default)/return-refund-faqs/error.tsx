'use client';

import { Button } from '@/components/ui/button';

export default function Error() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center text-center">
        <p className="mt-4 mb-8 text-muted-foreground">
          Something went wrong to fetch brands!
        </p>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <a href="/products">Reload</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
