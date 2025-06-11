import { formatMileage } from '../../utils/formatMileage';
import { formatLocation } from '../../utils/formatLocation';
import css from './CarItem.module.css';
import ReadMoreLink from '../ReadMoreLink/ReadMoreLink';
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
  return (
    <div className={css.carContainer}>
      <img src={img} alt={`${brand} ${model}`} />
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
      <ReadMoreLink />
    </div>
  );
};

export default CarItem;
