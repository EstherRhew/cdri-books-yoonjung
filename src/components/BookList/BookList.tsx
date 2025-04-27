import { useState } from 'react';
import { useBookFavorites } from '../../hooks/useBookFavorites';
import { Book } from '../../services/book/book.type';
import { BookItem } from '../BookItem/BookItem';
import { BookItemButtons } from '../BookItem/BookItemButtons';
import { BookItemDescription } from '../BookItem/BookItemDescription';
import { BookItemImage } from '../BookItem/BookItemImage';
import { BookItemInfo } from '../BookItem/BookItemInfo';
import { BookItemPrice } from '../BookItem/BookItemPrice';

interface BookListProps {
  list: Book[];
}

export const BookList = ({ list }: BookListProps) => {
  const [expandedList, setExpandedList] = useState<string[]>([]);
  const { toggleLikeBook, isFavoriteBook } = useBookFavorites();

  const toggleExpand = (isbn: string) => {
    setExpandedList(prev => {
      if (prev.includes(isbn)) {
        return prev.filter(item => item !== isbn);
      }
      return [...prev, isbn];
    });
  };
  return (
    <>
      {list.map(book => {
        const isExpanded = expandedList.includes(book.isbn);
        return (
          <BookItem data={book} expanded={isExpanded} key={book.isbn}>
            <BookItemImage toggleLikeBook={toggleLikeBook} isFavoriteBook={isFavoriteBook} />

            <div className="book-info-layout">
              <BookItemInfo />
              {isExpanded && <BookItemDescription />}
            </div>

            <div className="book-purchase-layout">
              <BookItemPrice />
              <BookItemButtons toggleExpand={toggleExpand} />
            </div>
          </BookItem>
        );
      })}
    </>
  );
};
