import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { BookList } from '../components/BookList/BookList';
import { Button } from '../components/Button';
import { EmptyList } from '../components/EmptyList';
import { Search } from '../components/Search';
import { Text } from '../components/Text';
import { useDebouncedValue } from '../hooks/useDebouncedSearch';
import { bookSearchQuery } from '../services/book/book.api';

export default function BookSearchPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedKeyword = useDebouncedValue(searchKeyword);

  const { data: bookSearchData } = useQuery(bookSearchQuery(debouncedKeyword));

  const list = bookSearchData?.documents || [];
  const totalCount = bookSearchData?.meta.total_count || 0;

  return (
    <StyledBookSearchPage>
      <Text variant="title2" as="h2" color="title">
        도서 검색
      </Text>

      <div className="search-box">
        <Search value={searchKeyword} setValue={setSearchKeyword} />
        <Button variant="tertiary" size="small">
          <Text variant="body2" color="subtitle">
            상세검색
          </Text>
        </Button>
      </div>

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

      {totalCount > 0 ? <BookList list={list} /> : <EmptyList desc="검색된 결과가 없습니다." />}
    </StyledBookSearchPage>
  );
}

const StyledBookSearchPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;

  .search-box {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .search-count {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
