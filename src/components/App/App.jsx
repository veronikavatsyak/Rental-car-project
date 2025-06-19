import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import CatalogPage from '../../pages/CatalogPage';
import NotFoundPage from '../../pages/NotFoundPage';
import CarPage from '../../pages/CarPage';
import css from './App.module.css';
import Header from '../Header/Header';

const App = () => {
  return (
    <div className={css.appContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
