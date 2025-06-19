import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrands } from '../../redux/selectors';
import { getCarBrands } from '../../redux/operations';
import { useOutsideClick } from '../../utils/useOutsideClick';

const BrandSwitcher = ({ value, onChange }) => {
  const brands = useSelector(selectBrands);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    dispatch(getCarBrands());
  }, [dispatch]);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const handleSelect = brand => {
    onChange(brand);
    setIsOpen(false);
  };

  return (
    <div className="dropdownWrap" ref={dropdownRef}>
      <p className="filtersText">Car brand</p>
      <button
        className="filtersBtn"
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {value || 'Choose a brand'}
        <svg
          className={clsx('arrow', isOpen && 'open')}
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="dropdown">
          {brands.map(brand => (
            <li
              key={brand}
              className="option"
              onClick={() => handleSelect(brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BrandSwitcher;
