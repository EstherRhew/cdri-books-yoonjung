import { useEffect, useState } from 'react';

const DEFAULT_DEBOUNCE_DELAY = 300;

export const useDebouncedValue = <T>(value: T, delay = DEFAULT_DEBOUNCE_DELAY): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
