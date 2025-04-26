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
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
    line-height: ${({ theme }) => theme.typography.body1.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.body1.letterSpacing};
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
`;
