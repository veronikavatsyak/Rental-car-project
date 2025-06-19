import css from './Search.module.css';
import { useDispatch } from 'react-redux';

import { setFilters } from '../../redux/slice';

const Search = ({ filters }) => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setFilters(filters));
  };

  return (
    <button type="button" className={css.searchBtn} onClick={handleSearch}>
      Search
    </button>
  );
};

export default Search;
