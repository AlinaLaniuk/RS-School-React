import { Component } from 'react';
import { InputState } from '../../../types';

class DateInput extends Component<unknown, InputState> {
  constructor(props: unknown) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const { value } = this.state;
    return (
      <label htmlFor="date-input">
        Your birthday:
        <div className="input-wrapper date-input-wrapper">
          <input id="date-input" type="date" value={value} />
        </div>
      </label>
    );
  }
}

export default DateInput;
