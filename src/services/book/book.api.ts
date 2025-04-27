import { queryOptions } from '@tanstack/react-query';
import { api } from '../api';
import { BookResponse, BookSearchTarget } from './book.type';

export const bookSearchQuery = (query: string, target?: BookSearchTarget) =>
  queryOptions({
    queryKey: ['books', query, target],
    queryFn: async () => await getBookSearch(query, target),
    enabled: !!query,
  });

const getBookSearch = async (query: string, target?: BookSearchTarget): Promise<BookResponse> => {
  const response = await api.get<BookResponse>(`/search/book?query=${query}${target ? `&target=${target}` : ''}`);
  return response.data;
};
