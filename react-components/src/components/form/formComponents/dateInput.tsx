import { Component, createRef } from 'react';
import { InputState } from '../../../types';

class DateInput extends Component<unknown, InputState> {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);
    this.state = { inputValue: '' };
    this.inputRef = createRef();
  }

  handleInput = () => {
    const currentValue = this.inputRef.current?.value as string;
    this.setState({ inputValue: currentValue });
    this.validateInput();
  };

  // eslint-disable-next-line react/no-unused-class-component-methods
  validateInput() {
    const { inputValue } = this.state;
    const date = new Date(inputValue);
    const day = date.getDay();
    console.log(date, day);
  }

  render() {
    return (
      <label htmlFor="date-input">
        Your birthday:
        <div className="input-wrapper date-input-wrapper">
          <input ref={this.inputRef} onChange={this.handleInput} id="date-input" type="date" />
        </div>
      </label>
    );
  }
}

export default DateInput;
