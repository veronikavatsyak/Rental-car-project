import { useState } from 'react';
import BrandSwitcher from '../BrandSwitcher/BrandSwitcher';
import PriceSwitcher from '../PriceSwitcher/PriceSwitcher';
import MileageSwitcher from '../MileageSwitcher/MileageSwitcher';
import Search from '../Search/Search';
import css from './Filters.module.css';

const Filters = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const filters = {
    brand,
    rentalPrice: price,
    minMileage,
    maxMileage,
  };

  return (
    <div className={css.filtersContainer}>
      <BrandSwitcher value={brand} onChange={setBrand} />
      <PriceSwitcher value={price} onChange={setPrice} />
      <MileageSwitcher
        minValue={minMileage}
        maxValue={maxMileage}
        onChangeMin={setMinMileage}
        onChangeMax={setMaxMileage}
      />
      <Search filters={filters} />
    </div>
  );
};

export default Filters;
