import css from './LoadMore.module.css';
const LoadMore = ({ handleLoadMore }) => {
  return (
    <div className={css.loadWrap}>
      <button onClick={handleLoadMore} className={css.loadBtn} type="button">
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
