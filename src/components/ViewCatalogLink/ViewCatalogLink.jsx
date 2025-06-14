import { Link } from 'react-router-dom';
const ViewCatalogLink = () => {
  return (
    <div>
      <Link className="link" to="/catalog">
        View Catalog
      </Link>
    </div>
  );
};

export default ViewCatalogLink;
