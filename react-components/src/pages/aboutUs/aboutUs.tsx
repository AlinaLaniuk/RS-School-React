import React, { Component } from 'react';
import { HeaderBoundProps } from '../types';

class AboutUs extends Component<HeaderBoundProps> {
  componentDidMount() {
    const { setPageName } = this.props;
    setPageName('About');
  }

  render() {
    return (
      <div className="about-us-container">
        <h1>About us</h1>
        <p>Some text about us.</p>
      </div>
    );
  }
}

export default AboutUs;
