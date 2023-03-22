import React, { Component } from 'react';

class Form extends Component<unknown> {
  componentsRefs: {
    textInput: React.RefObject<HTMLInputElement>;
    dateInput: React.RefObject<HTMLInputElement>;
    select: React.RefObject<HTMLSelectElement>;
    switcher: React.RefObject<HTMLInputElement>;
    fileUploader: React.RefObject<HTMLInputElement>;
    submitButton: React.RefObject<HTMLButtonElement>;
    chocolateInput: React.RefObject<HTMLInputElement>;
    caramelInput: React.RefObject<HTMLInputElement>;
    nutsInput: React.RefObject<HTMLInputElement>;
    vanillaInput: React.RefObject<HTMLInputElement>;
    berriesInput: React.RefObject<HTMLInputElement>;
  };

  constructor(props: unknown) {
    super(props);
    this.state = {};
    this.componentsRefs = {
      textInput: React.createRef(),
      dateInput: React.createRef(),
      chocolateInput: React.createRef(),
      caramelInput: React.createRef(),
      nutsInput: React.createRef(),
      berriesInput: React.createRef(),
      vanillaInput: React.createRef(),
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

        <fieldset className="checkbox">
          <legend>Your favorite additive: </legend>
          <div>
            <label htmlFor="chocolate">
              Chocolate
              <input ref={this.componentsRefs.chocolateInput} type="checkbox" id="chocolate" />
            </label>
          </div>
          <div>
            <label htmlFor="caramel">
              Caramel
              <input ref={this.componentsRefs.caramelInput} type="checkbox" id="caramel" />
            </label>
          </div>
          <div>
            <label htmlFor="nuts">
              Nuts
              <input ref={this.componentsRefs.nutsInput} type="checkbox" id="nuts" />
            </label>
          </div>
          <div>
            <label htmlFor="berries">
              Berries
              <input ref={this.componentsRefs.berriesInput} type="checkbox" id="berries" />
            </label>
          </div>
          <div>
            <label htmlFor="vanilla">
              Vanilla
              <input ref={this.componentsRefs.vanillaInput} type="checkbox" id="vanilla" />
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
