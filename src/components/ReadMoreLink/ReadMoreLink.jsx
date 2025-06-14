import { Link } from 'react-router-dom';

const ReadMoreLink = () => {
  return (
    <div>
      <Link className="link" to="/catalog/:id">
        Read More
      </Link>
    </div>
  );
};

export default ReadMoreLink;
