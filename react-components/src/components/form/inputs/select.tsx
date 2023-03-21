import { Component } from 'react';
import { InputState } from '../../../types';

class Select extends Component<unknown, InputState> {
  constructor(props: unknown) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const { value } = this.state;
    return (
      <label htmlFor="select">
        Select your favorite dessert:
        <div className="input-wrapper">
          <select className="select" id="select" value={value}>
            <option value="cake">Cake</option>
            <option value="candies">Candies</option>
            <option value="donuts">Donuts</option>
            <option value="cookies">Cookies</option>
            <option value="iceCream">Ice-cream</option>
          </select>
        </div>
      </label>
    );
  }
}

export default Select;
