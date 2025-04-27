import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BookListSkeleton } from '../../components/BookList/BookListSkeleton';
import { Text } from '../../components/common/Text';
import { advancedSearchOptions, PAGINATION_SIZE } from '../../configs/constants';
import { BookListResult } from './components/BookListResult';
import { BookSearch } from './components/BookSearch';

export const BookSearchPage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [advancedSearchOption, setAdvancedSearchOption] = useState(advancedSearchOptions[0].id);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchKeyword]);

  return (
    <StyledBookSearchPage>
      <Text variant="title2" as="h2" color="title">
        도서 검색
      </Text>

      <BookSearch setSearchKeyword={setSearchKeyword} setAdvancedSearchOption={setAdvancedSearchOption} />

      <Suspense fallback={<BookListSkeleton count={PAGINATION_SIZE} />}>
        <BookListResult
          searchKeyword={searchKeyword}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={PAGINATION_SIZE}
          target={advancedSearchOption}
        />
      </Suspense>
    </StyledBookSearchPage>
  );
};

const StyledBookSearchPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;

  .search-box {
    display: flex;
    align-items: center;
    gap: 10px;

    [data-radix-popper-content-wrapper] {
      z-index: 1 !important;
    }
  }

  .search-count {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
