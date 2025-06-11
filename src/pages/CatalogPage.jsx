import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { getCars } from '../redux/operations';
import CarList from '../components/CarList/CarList';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCars({ page: 1, limit: 12 }));
  }, [dispatch]);
  return (
    <div className={css.container}>
      {isLoading && <p>Loading ...</p>}
      <CarList cars={cars} />
    </div>
  );
};

export default CatalogPage;
