import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { Header } from './components/Header';
import BookSearchPage from './pages/BookSearchPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BookSearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
