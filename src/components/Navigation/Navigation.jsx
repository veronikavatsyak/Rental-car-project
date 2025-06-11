import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, isActive && css.activeLink);

const Navigation = () => {
  return (
    <div className={css.navWrapper}>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </div>
  );
};

export default Navigation;
