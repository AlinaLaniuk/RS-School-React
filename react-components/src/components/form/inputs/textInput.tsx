import { Component } from 'react';
import { InputState } from '../../../types';

class TextInput extends Component<unknown, InputState> {
  constructor(props: unknown) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const { value } = this.state;
    return (
      <label htmlFor="text-input">
        Your name:
        <input id="text-input" type="text" value={value} />
      </label>
    );
  }
}

export default TextInput;
