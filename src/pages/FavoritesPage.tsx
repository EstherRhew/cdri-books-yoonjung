import styled from 'styled-components';
import { BookList } from '../components/BookList/BookList';
import { EmptyList } from '../components/EmptyList';
import { Text } from '../components/Text';
import { useBookFavorites } from '../hooks/useBookFavorites';

export default function FavoritesPage() {
  const { favoriteBooks } = useBookFavorites();

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
            {favoriteBooks.length}
          </Text>
          건
        </div>
      </div>

      {favoriteBooks.length > 0 ? <BookList list={favoriteBooks} /> : <EmptyList desc="찜한 책이 없습니다." />}
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
