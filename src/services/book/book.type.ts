export interface BookResponse {
  documents: Book[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
}

export interface Book {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: string;
  thumbnail: string;
  status: string;

  authors: string[];
  publisher: string;
  translators: string[];

  price: number;
  sale_price: number;
}

export type BookSearchTarget = 'title' | 'isbn' | 'publisher' | 'person';
