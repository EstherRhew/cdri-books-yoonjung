import { NavLink } from 'react-router';

export const Header = () => {
  return (
    <nav>
      <div>CERTICOS BOOKS</div>
      <NavLink to="/">도서 검색</NavLink>
      <NavLink to="/favorites">내가 찜한 책</NavLink>
    </nav>
  );
};
