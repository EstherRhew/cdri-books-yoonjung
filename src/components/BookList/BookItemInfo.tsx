import styled from 'styled-components';
import { ellipsis } from '../../styles/mixins';
import { Text } from '../Text';
import { useBookItemContext } from './BookItemContext';

export const BookItemInfo = () => {
  const { expanded, data } = useBookItemContext();

  return (
    <StyledBookItemInfo $expanded={expanded}>
      <div className="book-title">
        <Text variant="title3" as="h3" className="title">
          {data.title}
        </Text>

        <div className="authors">
          {data.authors.map((author, index) => {
            const addComma = index !== data.authors.length - 1;
            return (
              // TODO: find better way
              <div className="author" key={author}>
                <Text variant="body2" color={expanded ? 'subtitle' : 'secondary'} className="name">
                  {author}
                </Text>
                {addComma && (
                  <Text variant="body2" color={expanded ? 'subtitle' : 'secondary'}>
                    ,
                  </Text>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </StyledBookItemInfo>
  );
};

const StyledBookItemInfo = styled.div<{ $expanded: boolean }>`
  display: flex;
  flex-direction: ${({ $expanded }) => ($expanded ? 'column' : 'row')};
  gap: 20px;

  .book-title {
    display: flex;
    align-items: center;
    gap: 16px;

    .title {
      ${ellipsis}
      max-width: 300px;
    }

    .authors {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-width: 110px;
      .author {
        display: flex;
      }
      .name {
        ${ellipsis}
      }
    }
  }
`;
