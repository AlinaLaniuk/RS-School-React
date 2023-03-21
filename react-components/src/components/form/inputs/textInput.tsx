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
      <label className="text-input" htmlFor="text-input">
        Your name:
        <div className="input-wrapper form-text-input">
          <input id="text-input" type="text" value={value} />
        </div>
      </label>
    );
  }
}

export default TextInput;
