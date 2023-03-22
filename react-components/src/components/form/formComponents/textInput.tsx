import { Component, createRef } from 'react';
import { InputState } from '../../../types';

class TextInput extends Component<unknown, InputState> {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);
    this.state = { inputValue: '' };
    this.inputRef = createRef();
  }

  handleInput = () => {
    const currentValue = this.inputRef.current?.value as string;
    this.setState({ inputValue: currentValue });
  };

  validateInput() {
    const { inputValue } = this.state;
    return inputValue.length > 5;
  }

  render() {
    return (
      <label className="text-input" htmlFor="text-input">
        Your name:
        <div className="input-wrapper form-text-input">
          <input ref={this.inputRef} onChange={this.handleInput} id="text-input" type="text" />
        </div>
      </label>
    );
  }
}

export default TextInput;
