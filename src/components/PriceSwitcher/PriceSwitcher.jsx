import { useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClick } from '../../utils/useOutsideClick';

const PriceSwitcher = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const priceOpt = [30, 40, 50, 60, 70, 80, 90, 100];

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const handleSelect = price => {
    onChange(price);
    setIsOpen(false);
  };

  return (
    <div className="dropdownWrap" ref={dropdownRef}>
      <p className="filtersText">Price / 1 hour</p>
      <button
        className="filtersBtn"
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {value ? `To $${value}` : 'Choose a price'}
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
          {priceOpt.map(price => (
            <li
              key={price}
              className="option"
              onClick={() => handleSelect(price)}
            >
              {price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PriceSwitcher;
