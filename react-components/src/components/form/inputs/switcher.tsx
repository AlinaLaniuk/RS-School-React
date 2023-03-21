import { Component } from 'react';
import { RadioInputState } from '../../../types';

class Switcher extends Component<unknown, RadioInputState> {
  constructor(props: unknown) {
    super(props);
    this.state = { selectedOption: '' };
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <label htmlFor="yes">
          <input type="radio" id="yes" value="Yes" checked={selectedOption === 'Yes'} />
          Male
        </label>
      </div>
    );
  }
}

export default Switcher;
