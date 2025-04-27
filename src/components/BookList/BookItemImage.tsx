import styled from 'styled-components';
import { UnlikeIcon } from '../../assets/image';
import { Image } from '../Image';
import { useBookItemContext } from './BookItemContext';

export const BookItemImage = () => {
  const { expanded, data } = useBookItemContext();

  return (
    <StyledBookItemImage $expanded={expanded}>
      <Image src={data.thumbnail} alt={'book-image'} />
      <button className="like-button">
        <Image src={UnlikeIcon} alt="like-button" />
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
