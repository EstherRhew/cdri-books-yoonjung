import { queryOptions } from '@tanstack/react-query';
import { api } from '../api';
import { BookResponse, BookSearchTarget, SearchBookParams } from './book.type';

const getBookSearch = async ({ query, target, page = 1 }: SearchBookParams): Promise<BookResponse> => {
  const response = await api.get<BookResponse>('/search/book', {
    query,
    page,
    size: 10,
    target,
  });

  return response.data;
};

export const bookSearchQuery = (query: string, page: number, target?: BookSearchTarget) =>
  queryOptions({
    queryKey: ['books', query, target, page],
    queryFn: async () => await getBookSearch({ query, target, page }),
    enabled: !!query,
  });
