import { useSuspenseQuery } from '@tanstack/react-query';
import { BookList } from '../../../components/BookList/BookList';
import { EmptyList } from '../../../components/common/EmptyList';
import { PaginationWrapper } from '../../../components/common/Pagination';
import { Text } from '../../../components/common/Text';
import { bookSearchQuery } from '../../../services/book/book.api';
import { BookSearchTarget } from '../../../services/book/book.type';

interface BookSearchResultProps {
  searchKeyword: string;
  currentPage: number;
  pageSize: number;
  target: BookSearchTarget;
  setCurrentPage: (page: number) => void;
}

export const BookListResult = ({
  searchKeyword,
  currentPage,
  pageSize,
  target,
  setCurrentPage,
}: BookSearchResultProps) => {
  const { data } = useSuspenseQuery(bookSearchQuery(searchKeyword, currentPage, target));

  const list = data?.documents || [];
  const totalCount = data?.meta.total_count || 0;

  if (totalCount === 0) {
    return <EmptyList desc="검색된 결과가 없습니다." />;
  }

  return (
    <>
      <div className="search-count">
        <Text variant="caption" color="primary">
          도서 검색 결과
        </Text>
        <div className="count-text">
          총{' '}
          <Text variant="caption" color="emphasis">
            {totalCount}
          </Text>
          건
        </div>
      </div>

      <PaginationWrapper
        data={list}
        totalCount={totalCount}
        currentPage={currentPage}
        pageSize={pageSize}
        setCurrentPage={setCurrentPage}
      >
        {() => <BookList list={list} />}
      </PaginationWrapper>
    </>
  );
};
