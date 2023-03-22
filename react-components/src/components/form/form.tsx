import React, { Component } from 'react';
import Checkbox from './formComponents/checkbox';
import DateInput from './formComponents/dateInput';
import FileUploader from './formComponents/fileUploader';
import Select from './formComponents/select';
import Switcher from './formComponents/switcher';
import TextInput from './formComponents/textInput';

class Form extends Component<unknown> {
  componentsRefs: {
    textInput: React.RefObject<HTMLInputElement>;
    dateInput: React.RefObject<HTMLInputElement>;
    checkbox: React.RefObject<HTMLFieldSetElement>;
    select: React.RefObject<HTMLSelectElement>;
    switcher: React.RefObject<HTMLInputElement>;
    fileUploader: React.RefObject<HTMLInputElement>;
    submitButton: React.RefObject<HTMLButtonElement>;
  };

  constructor(props: unknown) {
    super(props);
    this.state = {};
    this.componentsRefs = {
      textInput: React.createRef(),
      dateInput: React.createRef(),
      checkbox: React.createRef(),
      select: React.createRef(),
      switcher: React.createRef(),
      fileUploader: React.createRef(),
      submitButton: React.createRef(),
    };
  }

  render() {
    return (
      <form className="form">
        <label className="text-input" htmlFor="text-input">
          Your name:
          <div className="input-wrapper form-text-input">
            <input ref={this.componentsRefs.textInput} id="text-input" type="text" />
          </div>
        </label>

        <label htmlFor="date-input">
          Your birthday:
          <div className="input-wrapper date-input-wrapper">
            <input ref={this.componentsRefs.dateInput} id="date-input" type="date" />
          </div>
        </label>

        {/* <label className="switcher-label" htmlFor="switcher-input">
          Choose your gender:
          <div className="switcher-input-container">
            <input
              ref={this.componentsRefs.switcher}
              className="switcher-input"
              id="react-switch-new"
              type="checkbox"
            />
            <span className="switcher-button" />
          </div>
        </label> */}
        <label htmlFor="switcher">
          Choose your gender:
          <input className="switcher-input" id="switcher" type="checkbox" />
          <div className="switcher-container">
            <span className="switcher-button" />
          </div>
        </label>

        <label htmlFor="select">
          Select your favorite dessert:
          <div className="input-wrapper">
            <select ref={this.componentsRefs.select} className="select" id="select">
              <option value="cake">Cake</option>
              <option value="candies">Candies</option>
              <option value="donuts">Donuts</option>
              <option value="cookies">Cookies</option>
              <option value="iceCream">Ice-cream</option>
            </select>
          </div>
        </label>

        <fieldset ref={this.componentsRefs.checkbox} className="checkbox">
          <legend>Your favorite additive: </legend>
          <div>
            <label htmlFor="chocolate">
              Chocolate
              <input type="checkbox" id="chocolate" />
            </label>
          </div>
          <div>
            <label htmlFor="caramel">
              Caramel
              <input type="checkbox" id="caramel" />
            </label>
          </div>
          <div>
            <label htmlFor="nuts">
              Nuts
              <input type="checkbox" id="nuts" />
            </label>
          </div>
          <div>
            <label htmlFor="berries">
              Berries
              <input type="checkbox" id="berries" />
            </label>
          </div>
          <div>
            <label htmlFor="vanilla">
              Vanilla
              <input type="checkbox" id="vanilla" />
            </label>
          </div>
        </fieldset>

        <label className="file-uploader-label" htmlFor="file-uploader-input">
          Add picture with cute cat:
          <input
            ref={this.componentsRefs.fileUploader}
            className="file-uploader-input"
            id="file-uploader-input"
            type="file"
            placeholder="fff"
          />
        </label>
        <button type="button" ref={this.componentsRefs.submitButton}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
