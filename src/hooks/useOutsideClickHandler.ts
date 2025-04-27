import { useEffect } from 'react';

export const useOutsideClickHandler = (selector: string, onOutsideClick: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(selector)) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [selector, onOutsideClick]);
};
