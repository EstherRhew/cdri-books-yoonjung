import { createContext, useContext } from 'react';
import { mockFiles } from './BookList';

interface BookItemContextValue {
  data: (typeof mockFiles.documents)[number];
  expanded: boolean;
}

const BookItemContext = createContext<BookItemContextValue | undefined>(undefined);

export const useBookItemContext = () => {
  const context = useContext(BookItemContext);
  if (!context) {
    throw new Error('BookItem.* components must be used inside <BookItem>');
  }
  return context;
};

export const BookItemProvider = BookItemContext.Provider;
