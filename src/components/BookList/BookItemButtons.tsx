import { Link } from 'react-router';
import styled from 'styled-components';
import { ArrowIcon } from '../../assets/image';
import { Button } from '../Button';
import { Image } from '../Image';
import { Text } from '../Text';
import { useBookItemContext } from './BookItemContext';

interface BookItemButtonsProps {
  toggleExpand: (isbn: string) => void;
}

export const BookItemButtons = ({ toggleExpand }: BookItemButtonsProps) => {
  const { expanded, data } = useBookItemContext();

  return (
    <StyledBookItemButtons $expanded={expanded}>
      <Button variant="primary" size={expanded ? 'large' : 'medium'}>
        <Link to={data.url} target="_blank">
          <Text variant="caption">구매하기</Text>
        </Link>
      </Button>
      <Button variant="secondary" onClick={() => toggleExpand(data.isbn)} className="button-accordion">
        <Text variant="caption">상세보기</Text>
        <Image src={ArrowIcon} alt="arrow" width="8px" height="14px" className="arrow-icon" />
      </Button>
    </StyledBookItemButtons>
  );
};

const StyledBookItemButtons = styled.div<{ $expanded: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;

  .button-accordion {
    position: ${({ $expanded }) => ($expanded ? 'absolute' : 'static')};
    top: 26px;
    right: 15px;
    gap: 4px;

    .arrow-icon {
      transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.3s ease;
    }
  }
`;
