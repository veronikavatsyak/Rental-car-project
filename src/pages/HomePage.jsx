import Hero from '../components/Hero/Hero';
import css from '../pages/HomePage.module.css';
const HomePage = () => {
  return (
    <main className={css.home}>
      <Hero />
    </main>
  );
};

export default HomePage;
