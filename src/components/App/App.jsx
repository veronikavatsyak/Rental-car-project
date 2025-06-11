import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import CatalogPage from '../../pages/CatalogPage';
import NotFoundPage from '../../pages/NotFoundPage';
import CarPage from '../../pages/CarPage';
const App = () => {
  return (
    <div>
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
