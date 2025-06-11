import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className={css.logo}>
        Rental<span className={css.highlight}>Car</span>
      </NavLink>
    </div>
  );
};

export default Logo;
