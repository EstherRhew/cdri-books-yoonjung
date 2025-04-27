import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/common/Layout';
import { BookSearchPage } from './pages/BookSearchPage/BookSearchPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<BookSearchPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
