import { Component } from 'react';
import { HeaderBoundProps } from '../../types';
import Form from '../../components/form/form';

class Forms extends Component<HeaderBoundProps> {
  componentDidMount() {
    const { setPageName } = this.props;
    setPageName('Froms');
  }

  render() {
    return (
      <div className="about-us-container">
        <Form />
      </div>
    );
  }
}

export default Forms;
