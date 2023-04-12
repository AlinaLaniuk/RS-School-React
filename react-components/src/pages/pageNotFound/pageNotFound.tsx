import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <h1>Page Not Found</h1>
      <p>
        This page doesn`t exist. Go{' '}
        <Link className="go-home-link" to="/">
          home
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;
