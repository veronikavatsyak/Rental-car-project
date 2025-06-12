import ViewCatalogLink from '../ViewCatalogLink/ViewCatalogLink';
import css from './Hero.module.css';
const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.heroContent}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <ViewCatalogLink />
      </div>
    </section>
  );
};

export default Hero;
