import { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 80px 0px;
    display: flex;
    justify-content: center;
  }
`;
