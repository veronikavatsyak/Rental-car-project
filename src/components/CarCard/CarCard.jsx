import Car from '../Car/Car';
import AccAndFunc from '../CarDetails/AccAndFunc';
import CarSpecifications from '../CarDetails/CarSpecifications';
import RentalConditions from '../CarDetails/RentalConditions';
import RentForm from '../RentForm/RentForm';
import css from './CarCard.module.css';
const CarCard = ({ car }) => {
  if (!car) return <p>Loading...</p>; // або твій Spinner
  if (!car.address) return <p>Invalid car data</p>;

  return (
    <div className={css.cardContainer}>
      <div className={css.leftSide}>
        <img src={car.img} alt="car-card" className={css.carImg} />
        <RentForm />
      </div>
      <div className={css.detailsWrapper}>
        <Car car={car} />
        <RentalConditions car={car} />
        <CarSpecifications car={car} />
        <AccAndFunc car={car} />
      </div>
    </div>
  );
};

export default CarCard;
