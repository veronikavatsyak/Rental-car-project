import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <ClipLoader
        color="#3470ff"
        loading={true}
        size={60}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loader;
