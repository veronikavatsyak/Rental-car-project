import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
