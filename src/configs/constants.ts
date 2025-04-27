import { BookSearchTarget } from '../services/book/book.type';

export const advancedSearchOptions: { id: BookSearchTarget; text: string }[] = [
  { id: 'title', text: '제목' },
  { id: 'person', text: '저자명' },
  { id: 'publisher', text: '출판사' },
];

export const PAGINATION_SIZE = 10;
