import { formatMileage } from '../../utils/formatMileage';
import { formatLocation } from '../../utils/formatLocation';
import css from './CarItem.module.css';
import ReadMoreLink from '../ReadMoreLink/ReadMoreLink';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFavourite } from '../../redux/selectors';
import { toggleFavourite } from '../../redux/favouritesSlice';
const CarItem = ({ car }) => {
  const {
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;
  const [city, country] = formatLocation(address);
  const dispatch = useDispatch();
  const favourites = useSelector(selectIsFavourite);
  const isFavourite = favourites.includes(car.id);
  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(car.id));
  };
  return (
    <div className={css.carContainer}>
      <div className={css.imageWrapper}>
        <img src={img} alt={`${brand} ${model}`} />
        <button className={css.favButton} onClick={handleToggleFavourite}>
          {isFavourite ? (
            <svg className={css.filledHeart} viewBox="0 0 16 15">
              <use href="/icons/sprite.svg#icon-favorite-checked"></use>
            </svg>
          ) : (
            <svg
              className={css.heart}
              width="16"
              height="15"
              viewBox="0 0 16 15"
            >
              <use href="/icons/sprite.svg#icon-favorite" />
            </svg>
          )}
        </button>
      </div>
      <div className={css.header}>
        <h3 className={css.carName}>
          {brand} <span className={css.carModel}>{model}</span>, {year}
        </h3>
        <span className={css.price}>{`$${rentalPrice}`}</span>
      </div>
      <ul className={css.details}>
        <li className={css.line}>
          <span>{city}</span>
          <span>{country}</span>
          <span>{rentalCompany}</span>
        </li>
        <li className={css.line}>
          <span>{type}</span>
          <span>{formatMileage(mileage)}</span>
        </li>
      </ul>
      <ReadMoreLink id={car.id} />
    </div>
  );
};

export default CarItem;
