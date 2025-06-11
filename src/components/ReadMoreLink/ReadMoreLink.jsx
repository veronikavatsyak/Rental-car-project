import { Link } from 'react-router-dom';
import css from './ReadMoreLink.module.css';

const ReadMoreLink = () => {
  return (
    <div>
      <Link className={css.link} to="/catalog/:id">
        Read More
      </Link>
    </div>
  );
};

export default ReadMoreLink;
