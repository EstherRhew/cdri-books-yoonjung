import { NavLink } from 'react-router';
import styled from 'styled-components';
import { Typography } from './Typography';

export const Header = () => {
  return (
    <StyledHeader>
      <Typography variant="title1">CERTICOS BOOKS</Typography>

      <nav>
        <NavLink to="/">도서 검색</NavLink>
        <NavLink to="/favorites">내가 찜한 책</NavLink>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header``;
