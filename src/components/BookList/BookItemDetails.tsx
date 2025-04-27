// import { ReactNode } from 'react';
// import styled, { css } from 'styled-components';
// import { BookItemProvider } from './BookItemContext';

// interface BookItemProps {
//   isbn: string;
//   expanded?: boolean;
//   children: ReactNode;
// }

// export const BookItemDetails = ({ isbn, expanded = false, children }: BookItemProps) => {
//   return (
//     <BookItemProvider value={{ isbn, expanded }}>
//       <StyledBookItemDetails $expanded={expanded}>{children}</StyledBookItemDetails>
//     </BookItemProvider>
//   );
// };

// export const StyledBookItemDetails = styled.div<{ $expanded: boolean }>`
//   ${({ theme, $expanded }) => css`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-bottom: 1px solid ${theme.colors.palette.gray};
//     padding: 26px 15px;
//     gap: ${$expanded ? '32px' : '48px'};
//     position: relative;
//   `}
// `;
