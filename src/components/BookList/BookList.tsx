import { useState } from 'react';
import { Book } from '../../services/book/book.type';
import { BookItem } from './BookItem';
import { BookItemButtons } from './BookItemButtons';
import { BookItemDescription } from './BookItemDescription';
import { BookItemImage } from './BookItemImage';
import { BookItemInfo } from './BookItemInfo';
import { BookItemPrice } from './BookItemPrice';

interface BookListProps {
  list: Book[];
}

export const BookList = ({ list }: BookListProps) => {
  const [expandedList, setExpandedList] = useState<string[]>([]);

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
            <BookItemImage />

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
