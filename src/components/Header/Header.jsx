import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {
  return (
    <section className={css.headerContainer}>
      <Logo />
      <Navigation />
    </section>
  );
};

export default Header;
