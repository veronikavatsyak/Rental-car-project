import CarItem from '../CarItem/CarItem';
import css from './CarList.module.css';
const CarList = ({ cars }) => {
  return (
    <ul className={css.carList}>
      {cars.map(car => {
        return (
          <li key={car.id}>
            <CarItem car={car} />
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
