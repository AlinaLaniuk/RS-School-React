import { Component } from 'react';
import { HeaderBoundProps } from '../../types';
import Form from '../../components/form/form';

class Forms extends Component<HeaderBoundProps> {
  componentDidMount() {
    const { setPageName } = this.props;
    setPageName('Forms');
  }

  render() {
    return (
      <div className="form-container">
        <Form />
      </div>
    );
  }
}

export default Forms;
