import { Component } from 'react';
import { HeaderBoundProps } from '../../types';

class Forms extends Component<HeaderBoundProps> {
  componentDidMount() {
    const { setPageName } = this.props;
    setPageName('Froms');
  }

  render() {
    return (
      <div className="about-us-container">
        <h1>Forms</h1>
        <p>Forms.</p>
      </div>
    );
  }
}

export default Forms;
