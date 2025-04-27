import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* 전체 기본 세팅 */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${({ theme }) => theme.colors.palette.white};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  ul, ol, li {
    list-style: none;
  }

  input {
    all: unset;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.subtitle};
      font-weight:${({ theme }) => theme.typography.caption.fontWeight};
      font-size:${({ theme }) => theme.typography.caption.fontSize};
      line-height:${({ theme }) => theme.typography.caption.lineHeight};
      letter-spacing:${({ theme }) => theme.typography.caption.letterSpacing};

    }
  }

  
`;
