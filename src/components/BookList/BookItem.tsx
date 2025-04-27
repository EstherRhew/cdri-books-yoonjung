import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { BookItemProvider } from './BookItemContext';
import { mockFiles } from './BookList';

interface BookItemProps {
  data: (typeof mockFiles.documents)[number];
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
  ${({ theme, $expanded }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${theme.colors.palette.gray};
    padding: 26px 15px;
    gap: ${$expanded ? '32px' : '48px'};
    position: relative;

    .book-info-layout {
      display: flex;
      flex-direction: ${$expanded ? 'column' : 'row'};
      flex: 1;
      height: 100%;
      gap: 20px;
      padding-top: ${$expanded ? '20px' : '0'};
    }

    .book-purchase-layout {
      display: flex;
      flex-direction: ${$expanded ? 'column' : 'row'};
      align-items: ${$expanded ? 'flex-end' : 'center'};
      justify-content: flex-end;
      height: 100%;
      gap: 28px;
    }
  `}
`;
