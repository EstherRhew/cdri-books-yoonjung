import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { AdvancedSearch } from '../components/AdvancedSearch';
import { BookList } from '../components/BookList/BookList';
import { Button } from '../components/Button';
import { EmptyList } from '../components/EmptyList';
import { PopoverWrapper } from '../components/Popover';
import { Search } from '../components/Search';
import { Text } from '../components/Text';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useSearch } from '../hooks/useSearch';
import { bookSearchQuery } from '../services/book/book.api';
import { BookSearchTarget } from '../services/book/book.type';

export default function BookSearchPage() {
  // 전체검색
  const { searchKeyword, search, inputValue, setInputValue } = useSearch();
  //상세검색
  const { inputValue: advancedInputValue, setInputValue: setAdvancedInputValue } = useSearch();

  const advancedOptions: { id: BookSearchTarget; text: string }[] = [
    { id: 'title', text: '제목' },
    { id: 'person', text: '저자명' },
    { id: 'publisher', text: '출판사' },
  ];

  const [advancedSearchOption, setAdvancedSearchOption] = useState(advancedOptions[0].id);

  const {
    items: searchHistory,
    addItem: addSearchHistory,
    removeItem: removeSearchHistory,
  } = useLocalStorage<string>('book-search-history', 8);

  const { data: bookSearchData } = useQuery(bookSearchQuery(searchKeyword, advancedSearchOption));
  const list = bookSearchData?.documents || [];
  const totalCount = bookSearchData?.meta.total_count || 0;

  const onSearch = (item: string) => {
    addSearchHistory(item);
    search(item);
    setInputValue(item);
  };

  const onSearchAdvanced = (item: string, targetOption: { id: BookSearchTarget; text: string }) => {
    search(item);
    setAdvancedSearchOption(targetOption.id);
    setInputValue('');
    setAdvancedSearchOpen(false);
  };

  const [advancedSearchOpen, setAdvancedSearchOpen] = useState(false);

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

        <PopoverWrapper
          open={advancedSearchOpen}
          onOpenChange={setAdvancedSearchOpen}
          sideOffset={16}
          trigger={
            <Button variant="tertiary" size="small">
              <Text variant="body2" color="subtitle">
                상세검색
              </Text>
            </Button>
          }
        >
          <AdvancedSearch
            options={advancedOptions}
            value={advancedInputValue}
            onChange={e => setAdvancedInputValue(e.currentTarget.value)}
            search={onSearchAdvanced}
          />
        </PopoverWrapper>
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
