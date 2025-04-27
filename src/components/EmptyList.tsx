import styled from 'styled-components';
import { BookIcon } from '../assets/image';
import { Image } from './Image';
import { Text } from './Text';

interface EmptyListProps {
  desc?: string;
}

export const EmptyList = ({ desc }: EmptyListProps) => {
  return (
    <StyledEmptyList>
      <Image src={BookIcon} alt="book" width="80px" height="80px" />
      {desc && (
        <Text variant="caption" as="p" color="secondary">
          {desc}
        </Text>
      )}
    </StyledEmptyList>
  );
};

const StyledEmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 120px;
`;
