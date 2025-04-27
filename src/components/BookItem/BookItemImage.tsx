import styled from 'styled-components';
import { LikeIcon, UnlikeIcon } from '../../assets/image';
import { Book } from '../../services/book/book.type';
import { Image } from '../common/Image';
import { useBookItemContext } from './BookItemContext';

interface BookItemImageProps {
  toggleLikeBook: (item: Book) => void;
  isFavoriteBook: (itemId: string) => boolean;
}

export const BookItemImage = ({ toggleLikeBook, isFavoriteBook }: BookItemImageProps) => {
  const { expanded, data } = useBookItemContext();

  return (
    <StyledBookItemImage $expanded={expanded}>
      <Image src={data.thumbnail} alt={'book-image'} />
      <button className="like-button" onClick={() => toggleLikeBook(data)}>
        <Image src={isFavoriteBook(data.isbn) ? LikeIcon : UnlikeIcon} alt="like-button" />
      </button>
    </StyledBookItemImage>
  );
};

const StyledBookItemImage = styled.div<{ $expanded: boolean }>`
  width: ${({ $expanded }) => ($expanded ? '210px' : '46px')};
  height: ${({ $expanded }) => ($expanded ? '280px' : '68px')};
  position: relative;

  .like-button {
    width: ${({ $expanded }) => ($expanded ? '24px' : '16px')};
    height: ${({ $expanded }) => ($expanded ? '24px' : '16px')};

    position: absolute;
    top: ${({ $expanded }) => ($expanded ? '8.23px' : '0px')};
    right: ${({ $expanded }) => ($expanded ? '8.23px' : '0px')};
  }
`;
