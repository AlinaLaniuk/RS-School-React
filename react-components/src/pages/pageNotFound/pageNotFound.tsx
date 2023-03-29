import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { HeaderBoundProps } from '../../types';

function PageNotFound(props: HeaderBoundProps) {
  useEffect(() => {
    const { setPage } = props;
    setPage('Page not found');
  });

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
