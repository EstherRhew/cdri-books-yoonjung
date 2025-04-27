import { useEffect, useState } from 'react';

type ItemType = string | { id: string };

export const useLocalStorage = <T extends ItemType>(key: string, maxItems?: number) => {
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        setItems([]);
        console.error('Failed to parse localStorage data');
      }
    }
  }, [key]);

  const saveToStorage = (newItems: T[]) => {
    localStorage.setItem(key, JSON.stringify(newItems));
  };

  const isEqual = (a: T, b: T) => {
    if (typeof a === 'string' && typeof b === 'string') {
      return a === b;
    }
    if (typeof a === 'object' && typeof b === 'object') {
      return a.id === b.id;
    }
    return false;
  };

  const addItem = (item: T) => {
    setItems(prev => {
      const withoutDuplicate = prev.filter(existing => !isEqual(existing, item));
      const updated = [...withoutDuplicate, item];
      const limited = maxItems ? updated.slice(-maxItems) : updated;
      saveToStorage(limited);
      return limited;
    });
  };

  const removeItem = (item: T) => {
    setItems(prev => {
      const removed = prev.filter(existing => !isEqual(existing, item));
      saveToStorage(removed);
      return removed;
    });
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem(key);
  };

  return {
    items,
    addItem,
    removeItem,
    clearItems,
  };
};
