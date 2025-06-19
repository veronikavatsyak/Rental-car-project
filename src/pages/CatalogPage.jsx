import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectFilter,
  selectIsLoading,
  selectPage,
  selectTotalPages,
  selectWasFiltered,
} from '../redux/selectors';
import { useEffect, useRef } from 'react';
import { getCars } from '../redux/operations';
import CarList from '../components/CarList/CarList';
import css from './CatalogPage.module.css';
import Loader from '../components/Loader/Loader';
import LoadMore from '../components/LoadMore/LoadMore';
import { resetCars, resetFilters } from '../redux/slice';
import Filters from '../components/Filters/Filters';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilter);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const wasFiltered = useSelector(selectWasFiltered);

  const initialLoad = useRef(true);

  // ✅ Перший вхід на сторінку — без фільтрів
  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;

      const fetchInitial = async () => {
        dispatch(resetFilters());
        dispatch(resetCars());
        await dispatch(getCars({ params: { page: 1, limit: 12 } }));
      };

      fetchInitial();
    }
  }, [dispatch]);

  // ✅ Якщо користувач натиснув "Search" — запускаємо фільтрацію
  useEffect(() => {
    const fetchFiltered = async () => {
      dispatch(resetCars());
      await dispatch(getCars({ params: { ...filters, page: 1, limit: 12 } }));
    };

    if (wasFiltered) {
      fetchFiltered();
    }
  }, [dispatch, filters, wasFiltered]);

  const handleLoadMore = () => {
    if (page >= totalPages) return;
    dispatch(getCars({ params: { ...filters, page: page + 1, limit: 12 } }));
  };

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      <Filters />
      {cars.length === 0 && wasFiltered && !isLoading ? (
        <p className={css.noResults}>No cars match your filters.</p>
      ) : (
        <>
          <CarList cars={cars} />
          {!isLoading && page < totalPages && cars.length > 0 && (
            <LoadMore handleLoadMore={handleLoadMore} />
          )}
        </>
      )}
    </div>
  );
};

export default CatalogPage;
