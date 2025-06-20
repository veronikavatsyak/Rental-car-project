import { Link } from 'react-router-dom';
import css from './ReadMoreLink.module.css';

const ReadMoreLink = ({ id }) => {
  console.log('ReadMoreLink id:', id);
  return (
    <div className={css.linkWrap}>
      <Link className="link" to={`/catalog/${id}`}>
        Read More
      </Link>
    </div>
  );
};

export default ReadMoreLink;
