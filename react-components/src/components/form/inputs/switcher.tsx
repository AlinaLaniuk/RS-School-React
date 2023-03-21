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
      <div className="select-gender-container">
        Your gender:
        <div className="select-gender-options-container">
          <label htmlFor="male">
            <input type="radio" id="yes" value="Yes" checked={selectedOption === 'Yes'} />
            Male
          </label>
          <label htmlFor="female">
            <input type="radio" id="yes" value="Yes" checked={selectedOption === 'Yes'} />
            Female
          </label>
        </div>
      </div>
    );
  }
}

export default Switcher;
