import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectFilter,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from '../redux/selectors';
import { useEffect } from 'react';
import { getCars } from '../redux/operations';
import CarList from '../components/CarList/CarList';
import css from './CatalogPage.module.css';
import Loader from '../components/Loader/Loader';
import LoadMore from '../components/LoadMore/LoadMore';
import { resetCars } from '../redux/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilter);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    if (filters) {
      dispatch(resetCars());
      dispatch(getCars({ params: { ...filters, page: 1, limit: 12 } }));
    }
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(getCars({ params: { ...filters, page: page + 1, limit: 12 } }));
  };
  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      <CarList cars={cars} />
      {!isLoading && page < totalPages && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
};

export default CatalogPage;
