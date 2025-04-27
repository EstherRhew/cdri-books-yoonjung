import { Book } from '../services/book/book.type';
import { useLocalStorage } from './useLocalStorage';

export const useBookFavorites = () => {
  const { items, addItem, removeItem } = useLocalStorage<Book & { id: string }>('book-favorites');

  const refineItemWithId = (item: Book) => {
    return {
      ...item,
      id: item.isbn,
    };
  };

  const isFavoriteBook = (itemId: string) => {
    return items.some(book => book.id === itemId);
  };

  const toggleLikeBook = (item: Book) => {
    if (isFavoriteBook(item.isbn)) {
      removeItem(refineItemWithId(item));
    } else {
      addItem(refineItemWithId(item));
    }
  };

  return {
    toggleLikeBook,
    favoriteBooks: items,
    isFavoriteBook,
  };
};
