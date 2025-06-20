import { formatLocation } from '../../utils/formatLocation';
import { formatMileage } from '../../utils/formatMileage';
import css from './Car.module.css';

const Car = ({ car }) => {
  const [city, country] = formatLocation(car.address);
  const formattedMilleage = formatMileage(car.mileage);
  return (
    <div className={css.carCard}>
      <h2 className={css.car}>
        {car.brand} {car.model}, {car.year}
      </h2>
      <div className={css.addressWrap}>
        <h3 className={css.carAddress}>
          {city}, {country}
        </h3>
        <h3 className={css.carMileage}>Mileage: {formattedMilleage}</h3>
      </div>
      <span>${car.rentalPrice}</span>
      <p className={css.carDesc}>{car.description}</p>
    </div>
  );
};

export default Car;
