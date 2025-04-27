import styled from 'styled-components';
import { formatPrice } from '../../utils/formatString';
import { Text } from '../common/Text';
import { useBookItemContext } from './BookItemContext';

export const BookItemPrice = () => {
  const { expanded, data } = useBookItemContext();

  return (
    <StyledBookItemPrice>
      {expanded ? (
        <>
          <div className="price">
            <Text variant="small" color="subtitle">
              원가
            </Text>
            <Text
              variant="title3"
              style={{ textDecoration: data.sale_price ? 'line-through' : 'none', fontWeight: 350 }}
            >
              {formatPrice(data.price)}
            </Text>
          </div>

          <div className="price">
            {data.sale_price && (
              <>
                <Text variant="small" color="subtitle">
                  할인가
                </Text>
                <Text variant="title3">{formatPrice(data.sale_price)}</Text>
              </>
            )}
          </div>
        </>
      ) : (
        <Text variant="title3">{formatPrice(data.price)}</Text>
      )}
    </StyledBookItemPrice>
  );
};

const StyledBookItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .price {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }
`;
