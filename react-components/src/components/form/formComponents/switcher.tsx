import { Component } from 'react';
import { RadioInputState } from '../../../types';

class Switcher extends Component<unknown, RadioInputState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      male: true,
      female: false,
    };
  }

  handleCheckbox = (event: React.ChangeEvent) => {
    const eventTarget = event.target as HTMLInputElement;
    const { value } = eventTarget;
    const stateCopy = Object.assign(this.state);
    const stateCopyKeys = Object.keys(stateCopy);
    stateCopyKeys.forEach((key) => {
      stateCopy[key] = false;
    });
    stateCopy[value] = true;
    this.setState(stateCopy);
  };

  render() {
    const { male, female } = this.state;
    return (
      <div className="select-gender-container">
        Your gender:
        <div className="select-gender-options-container">
          <label htmlFor="male">
            <input
              onChange={this.handleCheckbox}
              type="radio"
              id="male"
              value="male"
              checked={male}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              onChange={this.handleCheckbox}
              type="radio"
              id="female"
              value="female"
              checked={female}
            />
            Female
          </label>
        </div>
      </div>
    );
  }
}

export default Switcher;
