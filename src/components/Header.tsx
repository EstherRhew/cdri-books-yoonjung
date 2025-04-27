import { NavLink } from 'react-router';
import styled from 'styled-components';
import { Text } from './Text';

export const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/" className="logo">
        <Text variant="title1">CERTICOS BOOKS</Text>
      </NavLink>

      <nav>
        <NavLink to="/">
          <Text variant="body1">도서 검색</Text>
        </NavLink>
        <NavLink to="/favorites">
          <Text variant="body1">내가 찜한 책</Text>
        </NavLink>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 24px 160px;
  display: flex;
  justify-content: center;
  position: relative;

  .logo {
    position: absolute;
    left: 160px;
    top: 24px;
  }

  nav {
    display: flex;
    gap: 135px;

    a {
      height: 27px;
      &.active {
        border-bottom: ${({ theme }) => `1px solid ${theme.colors.palette.primary}`};
        font-weight: 700;
      }
    }
  }
`;
