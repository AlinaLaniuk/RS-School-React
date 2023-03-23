import React, { Component } from 'react';
import { validateTextInput, validateDate, validateFile } from './validation';
import { FormState, GenderType, FormProps } from '../../types';

const errorsTexts = {
  userName: 'Incorrect name value. Must be at least 5 characters',
  birthdayDate: 'Incorrect date',
  cuteCatPicture: 'Incorrect file. It must be jpg or png file',
};

const genderValue: GenderType = {
  true: 'female',
  false: 'male',
};

class Form extends Component<FormProps, FormState> {
  inputsRefs: {
    nameInput: React.RefObject<HTMLInputElement>;
    birthDateInput: React.RefObject<HTMLInputElement>;
    dessertSelector: React.RefObject<HTMLSelectElement>;
    genderSelector: React.RefObject<HTMLInputElement>;
    fileUploader: React.RefObject<HTMLInputElement>;
    chocolateInput: React.RefObject<HTMLInputElement>;
    caramelInput: React.RefObject<HTMLInputElement>;
    nutsInput: React.RefObject<HTMLInputElement>;
    vanillaInput: React.RefObject<HTMLInputElement>;
    berriesInput: React.RefObject<HTMLInputElement>;
  };

  constructor(props: FormProps) {
    super(props);
    this.state = {
      inputsValue: {
        userName: '',
        birthdayDate: '',
        gender: '',
        favoriteDessert: '',
        favoriteAdditives: [],
        cuteCatPicture: undefined,
      },
      errors: {
        userName: '',
        birthdayDate: '',
        cuteCatPicture: '',
      },
    };
    this.inputsRefs = {
      nameInput: React.createRef(),
      birthDateInput: React.createRef(),
      chocolateInput: React.createRef(),
      caramelInput: React.createRef(),
      nutsInput: React.createRef(),
      berriesInput: React.createRef(),
      vanillaInput: React.createRef(),
      dessertSelector: React.createRef(),
      genderSelector: React.createRef(),
      fileUploader: React.createRef(),
    };
  }

  collectStateInfo = () => {
    const cardInfo = {
      userName: this.inputsRefs.nameInput.current?.value as string,
      birthdayDate: this.inputsRefs.birthDateInput.current?.value as string,
      gender: genderValue[`${this.inputsRefs.genderSelector.current?.value}`] as string,
      favoriteDessert: this.inputsRefs.dessertSelector.current?.value as string,
      favoriteAdditives: [
        this.inputsRefs.chocolateInput.current?.value as string,
        this.inputsRefs.caramelInput.current?.value as string,
        this.inputsRefs.nutsInput.current?.value as string,
        this.inputsRefs.berriesInput.current?.value as string,
        this.inputsRefs.vanillaInput.current?.value as string,
      ],
      cuteCatPicture: (this.inputsRefs.fileUploader.current?.files as FileList)[0] as File,
    };
    return cardInfo;
  };

  submitForm = () => {
    if (this.validateInputsValues()) {
      const cardInfo = this.collectStateInfo();
      const { setCardsInfo } = this.props;
      setCardsInfo(cardInfo);
    }
  };

  validateInputsValues() {
    const isTextInputValueCorrect = validateTextInput(
      this.inputsRefs.nameInput.current?.value as string,
      5
    );
    const isBirthdayDateInputValueCorrect = validateDate(
      this.inputsRefs.birthDateInput.current?.value as string
    );
    const isFileInputValueCorrect = validateFile(
      (this.inputsRefs.fileUploader.current?.files as FileList)[0] as File,
      ['image/jpeg', 'image/png']
    );
    const newErrorsState = {
      userName: isTextInputValueCorrect ? '' : errorsTexts.userName,
      birthdayDate: isBirthdayDateInputValueCorrect ? '' : errorsTexts.birthdayDate,
      cuteCatPicture: isFileInputValueCorrect ? '' : errorsTexts.cuteCatPicture,
    };
    const { inputsValue } = this.state;
    this.setState({ inputsValue, errors: newErrorsState });
    return isTextInputValueCorrect && isBirthdayDateInputValueCorrect && isFileInputValueCorrect;
  }

  render() {
    const { errors } = this.state;
    const { userName, birthdayDate, cuteCatPicture } = errors;
    return (
      <form className="form">
        <label className="text-input" htmlFor="text-input">
          Your name:
          <div className="input-wrapper form-text-input">
            <input ref={this.inputsRefs.nameInput} id="text-input" type="text" />
          </div>
          <div className="separator error">{userName}</div>
        </label>

        <label htmlFor="date-input">
          Your birthday:
          <div className="input-wrapper date-input-wrapper">
            <input ref={this.inputsRefs.birthDateInput} id="date-input" type="date" />
          </div>
          <div className="separator error">{birthdayDate}</div>
        </label>

        <label htmlFor="switcher">
          Choose your gender:
          <input
            ref={this.inputsRefs.genderSelector}
            className="switcher-input"
            id="switcher"
            type="checkbox"
          />
          <div className="switcher-container">
            <span className="switcher-button" />
          </div>
          <div className="separator" />
        </label>

        <label htmlFor="select">
          Select your favorite dessert:
          <div className="input-wrapper">
            <select ref={this.inputsRefs.dessertSelector} className="select" id="select">
              <option value="cake">Cake</option>
              <option value="candies">Candies</option>
              <option value="donuts">Donuts</option>
              <option value="cookies">Cookies</option>
              <option value="iceCream">Ice-cream</option>
            </select>
          </div>
          <div className="separator" />
        </label>

        <fieldset className="checkbox">
          <legend>Your favorite additive: </legend>
          <div>
            <label htmlFor="chocolate">
              Chocolate
              <input ref={this.inputsRefs.chocolateInput} type="checkbox" id="chocolate" />
            </label>
          </div>
          <div>
            <label htmlFor="caramel">
              Caramel
              <input ref={this.inputsRefs.caramelInput} type="checkbox" id="caramel" />
            </label>
          </div>
          <div>
            <label htmlFor="nuts">
              Nuts
              <input ref={this.inputsRefs.nutsInput} type="checkbox" id="nuts" />
            </label>
          </div>
          <div>
            <label htmlFor="berries">
              Berries
              <input ref={this.inputsRefs.berriesInput} type="checkbox" id="berries" />
            </label>
          </div>
          <div>
            <label htmlFor="vanilla">
              Vanilla
              <input ref={this.inputsRefs.vanillaInput} type="checkbox" id="vanilla" />
            </label>
          </div>
        </fieldset>
        <div className="separator" />

        <label className="file-uploader-label" htmlFor="file-uploader-input">
          Add picture with cute cat:
          <input
            ref={this.inputsRefs.fileUploader}
            className="file-uploader-input"
            id="file-uploader-input"
            type="file"
          />
          <div className="separator error">{cuteCatPicture}</div>
        </label>
        <button onClick={this.submitForm} type="button">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
