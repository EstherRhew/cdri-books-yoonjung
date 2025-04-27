import styled from 'styled-components';
import { Text } from '../Text';
import { useBookItemContext } from './BookItemContext';

export const BookItemDescription = () => {
  const { data } = useBookItemContext();

  return (
    <StyledBookItemDescription>
      <Text variant="body2Bold">책 소개</Text>
      <Text variant="small" as="p" style={{ lineHeight: '16px' }}>
        {data.contents}
      </Text>
    </StyledBookItemDescription>
  );
};

const StyledBookItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
`;
