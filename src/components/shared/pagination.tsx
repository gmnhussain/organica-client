'use client';

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];

    // Always show first page
    pageNumbers.push(1);

    // Calculate range around current page
    let rangeStart = Math.max(2, currentPage - 1);
    let rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    // Adjust range to always show 3 pages if possible
    if (rangeEnd - rangeStart < 2) {
      if (rangeStart === 2) {
        rangeEnd = Math.min(totalPages - 1, rangeStart + 2);
      } else if (rangeEnd === totalPages - 1) {
        rangeStart = Math.max(2, rangeEnd - 2);
      }
    }

    // Add ellipsis before range if needed
    if (rangeStart > 2) {
      pageNumbers.push('ellipsis-start');
    }

    // Add range pages
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis after range if needed
    if (rangeEnd < totalPages - 1) {
      pageNumbers.push('ellipsis-end');
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      {getPageNumbers().map((page, index) => {
        if (page === 'ellipsis-start' || page === 'ellipsis-end') {
          return (
            <Button
              key={`ellipsis-${index}`}
              variant="outline"
              size="icon"
              disabled
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More pages</span>
            </Button>
          );
        }

        return (
          <Button
            key={page}
            variant={currentPage === page ? 'default' : 'outline'}
            size="icon"
            onClick={() => onPageChange(page as number)}
          >
            {page}
            <span className="sr-only">Page {page}</span>
          </Button>
        );
      })}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  );
}
