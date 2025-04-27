import { ReactNode } from 'react';
import styled from 'styled-components';
import { Book } from '../../services/book/book.type';
import { BookItemProvider } from './BookItemContext';

interface BookItemProps {
  data: Book;
  expanded?: boolean;
  children: ReactNode;
}

export const BookItem = ({ data, expanded = false, children }: BookItemProps) => {
  return (
    <BookItemProvider value={{ data, expanded }}>
      <StyledBookItem $expanded={expanded}>{children}</StyledBookItem>
    </BookItemProvider>
  );
};

export const StyledBookItem = styled.div<{ $expanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.gray};
  padding: 26px 15px;
  gap: ${({ $expanded }) => ($expanded ? '32px' : '48px')};
  position: relative;

  .book-info-layout {
    display: flex;
    flex-direction: ${({ $expanded }) => ($expanded ? 'column' : 'row')};
    flex: 1;
    height: 100%;
    gap: 20px;
    padding-top: ${({ $expanded }) => ($expanded ? '20px' : '0')};
  }

  .book-purchase-layout {
    display: flex;
    flex-direction: ${({ $expanded }) => ($expanded ? 'column' : 'row')};
    align-items: ${({ $expanded }) => ($expanded ? 'flex-end' : 'center')};
    justify-content: flex-end;
    height: 100%;
    gap: 28px;
  }
`;
