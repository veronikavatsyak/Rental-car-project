import { Link } from 'react-router-dom';
import css from './ViewCatalogLink.module.css';
const ViewCatalogLink = () => {
  return (
    <div>
      <Link className={css.catalogLink} to="/catalog">
        View Catalog
      </Link>
    </div>
  );
};

export default ViewCatalogLink;
