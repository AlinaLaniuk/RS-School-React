import { Component } from 'react';
import { CheckboxInputState } from '../../../types';

class Checkbox extends Component<unknown, CheckboxInputState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      value: {
        chocolate: false,
        caramel: false,
        nuts: false,
        berries: false,
        vanilla: false,
      },
    };
  }

  render() {
    const { value } = this.state;
    const { chocolate, caramel, nuts, berries, vanilla } = value;
    return (
      <fieldset className="checkbox">
        <legend>Your favorite additive: </legend>
        <div>
          <label htmlFor="chocolate">
            Chocolate
            <input type="checkbox" id="chocolate" checked={chocolate} />
          </label>
        </div>
        <div>
          <label htmlFor="caramel">
            Caramel
            <input type="checkbox" id="caramel" checked={caramel} />
          </label>
        </div>
        <div>
          <label htmlFor="nuts">
            Nuts
            <input type="checkbox" id="nuts" checked={nuts} />
          </label>
        </div>
        <div>
          <label htmlFor="berries">
            Berries
            <input type="checkbox" id="berries" checked={berries} />
          </label>
        </div>
        <div>
          <label htmlFor="vanilla">
            Vanilla
            <input type="checkbox" id="vanilla" checked={vanilla} />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default Checkbox;
