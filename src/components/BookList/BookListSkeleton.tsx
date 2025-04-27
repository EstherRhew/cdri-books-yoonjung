import styled from 'styled-components';
import { StyledBookItem } from '../BookItem/BookItem';
import { Skeleton } from '../common/Skeleton';

interface BookListSkeletonProps {
  count?: number;
}

export const BookListSkeleton = ({ count = 10 }: BookListSkeletonProps) => {
  return (
    <StyledBookList>
      {Array.from({ length: count }).map((_, index) => (
        <StyledBookItem key={index} $expanded={false}>
          <Skeleton width="46px" height="68px" />

          <div className="book-info-layout">
            <Skeleton width="50%" height="20px" />
            <Skeleton width="20%" height="20px" />
          </div>

          <div className="book-purchase-layout">
            <Skeleton width="60px" height="20px" />
            <Skeleton width="80px" height="32px" />
            <Skeleton width="80px" height="32px" />
          </div>
        </StyledBookItem>
      ))}
    </StyledBookList>
  );
};

const StyledBookList = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;
