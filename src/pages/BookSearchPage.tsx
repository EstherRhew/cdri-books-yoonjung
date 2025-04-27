import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { BookList } from '../components/BookList/BookList';
import { Button } from '../components/Button';
import { EmptyList } from '../components/EmptyList';
import { Search } from '../components/Search';
import { Text } from '../components/Text';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useSearch } from '../hooks/useSearch';
import { bookSearchQuery } from '../services/book/book.api';

export default function BookSearchPage() {
  const { searchKeyword, search, inputValue, setInputValue } = useSearch();

  const {
    items: searchHistory,
    addItem: addSearchHistory,
    removeItem: removeSearchHistory,
  } = useLocalStorage<string>('book-search-history', 8);

  const { data: bookSearchData } = useQuery(bookSearchQuery(searchKeyword));
  const list = bookSearchData?.documents || [];
  const totalCount = bookSearchData?.meta.total_count || 0;

  const onSearch = (item: string) => {
    addSearchHistory(item);
    search(item);
  };

  return (
    <StyledBookSearchPage>
      <Text variant="title2" as="h2" color="title">
        도서 검색
      </Text>

      <div className="search-box">
        <Search
          search={onSearch}
          history={[...searchHistory].reverse()}
          onDeleteHistoryItem={removeSearchHistory}
          value={inputValue}
          onChange={e => setInputValue(e.currentTarget.value)}
        />
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
