import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/Layout';
import BookSearchPage from './pages/BookSearchPage';
import FavoritesPage from './pages/FavoritesPage';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App() {
  return (
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
  );
}

export default App;
