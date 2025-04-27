import { createContext, useContext } from 'react';
import { Book } from '../../services/book/book.type';

interface BookItemContextValue {
  data: Book;
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
