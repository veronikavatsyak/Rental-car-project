import clsx from 'clsx';
import css from './MileageSwitcher.module.css';

const MileageSwitcher = ({ minValue, maxValue, onChangeMin, onChangeMax }) => {
  const handleInput = (value, setter) => {
    const raw = value.replace(/\D/g, '');
    setter(raw);
  };

  const format = value => {
    return value ? Number(value).toLocaleString('en-US') : '';
  };

  return (
    <div className="dropdownWrap">
      <p className="filtersText">Car mileage / km</p>
      <div className={css.filtersInputs}>
        <input
          type="text"
          inputMode="numeric"
          placeholder="From"
          value={format(minValue)}
          onChange={e => handleInput(e.target.value, onChangeMin)}
          className={clsx(css.mileageInput, css.rightInput)}
        />
        <input
          type="text"
          inputMode="numeric"
          placeholder="To"
          value={format(maxValue)}
          onChange={e => handleInput(e.target.value, onChangeMax)}
          className={clsx(css.mileageInput, css.leftInput)}
        />
      </div>
    </div>
  );
};

export default MileageSwitcher;
