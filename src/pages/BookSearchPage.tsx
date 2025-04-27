import styled from 'styled-components';
import { BookList } from '../components/BookList/BookList';
import { Button } from '../components/Button';
import { Search } from '../components/Search';
import { Text } from '../components/Text';

export default function BookSearchPage() {
  return (
    <StyledBookSearchPage>
      <Text variant="title2" as="h2" color="title">
        도서 검색
      </Text>

      <div className="search-box">
        <Search />
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
            0
          </Text>
          건
        </div>
      </div>

      {/* TODO: conditional rendering */}
      <BookList />
      {/* <EmptyList desc="검색된 결과가 없습니다." /> */}
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
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .search-count {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
