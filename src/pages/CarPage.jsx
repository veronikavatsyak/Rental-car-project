import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../components/CarCard/CarCard';
import { selectCar } from '../redux/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCarById } from '../redux/operations';

const CarPage = () => {
  const car = useSelector(selectCar);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);
  if (!car) {
    return <div>Loading car details...</div>;
  }
  return (
    <div>
      <CarCard car={car} />
    </div>
  );
};

export default CarPage;
