import React, { useEffect } from 'react';
import { HeaderBoundProps } from '../../types';

function AboutUs(props: HeaderBoundProps) {
  useEffect(() => {
    const { setPage } = props;
    setPage('About');
  });

  return (
    <div className="about-us-container">
      <h1>About us</h1>
      <p>Some text about us.</p>
    </div>
  );
}

export default AboutUs;
