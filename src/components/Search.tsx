import styled from 'styled-components';
import { SearchIcon } from '../assets/image';
import { Image } from './Image';

export const Search = () => {
  return (
    <StyledSearch>
      <Image src={SearchIcon} alt="search" width="30px" height="30px" />
      <input type="text" placeholder="검색어를 입력하세요" />
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  width: 480px;
  height: 50px;
  border-radius: 100px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.palette.lightGray};

  input {
    flex: 1;
    &::placeholder {
      color: ${({ theme }) => theme.colors.text.subtitle};
    }
  }
`;
