import styled from 'styled-components';
import { BookList } from '../components/BookList/BookList';
import { Text } from '../components/Text';

export default function FavoritesPage() {
  return (
    <StyledFavoritesPage>
      <Text variant="title2" as="h2" color="title">
        내가 찜한 책
      </Text>

      <div className="search-count">
        <Text variant="caption" color="primary">
          찜한 책
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
    </StyledFavoritesPage>
  );
}

const StyledFavoritesPage = styled.div`
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
