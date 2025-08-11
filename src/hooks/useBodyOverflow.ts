import { useEffect } from 'react';

export const useBodyOverflow = (isHidden: boolean) => {
  useEffect(() => {
    if (isHidden) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isHidden]);
};
