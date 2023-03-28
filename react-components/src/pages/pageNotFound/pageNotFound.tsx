import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { HeaderBoundProps } from '../types';

class PageNotFound extends Component<HeaderBoundProps> {
  componentDidMount() {
    const { setPageName } = this.props;
    setPageName('NotFound');
  }

  render() {
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
}

export default PageNotFound;
