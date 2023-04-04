import React, { Component } from 'react';
import {
  validateTextInput,
  validateDate,
  validateFile,
  validateIsSomeOptionsWasChosen,
  validateSelectInput,
} from './validation/validation';
import { FormState, FormProps } from './types';

const errorsTexts = {
  userName:
    'At least 5 characters in each word, at least 2 words, each word starts with uppercased letter. Only English',
  birthdayDate: 'Incorrect date. Cannot be greater than current date',
  gender: 'You need to choose gender',
  dessert: 'You need to choose dessert',
  additives: 'You need to choose some additives',
  catImage: 'Incorrect file. It must be jpg or png file',
};

const selectDefaultValue = 'chooseDessert';

const genderValues = ['male', 'female'];
const additivesIds = ['chocolate', 'caramel', 'nuts', 'vanilla', 'berries'];

class Form extends Component<FormProps, FormState> {
  inputsRefs = {
    form: React.createRef<HTMLFormElement>(),
    nameInput: React.createRef<HTMLInputElement>(),
    birthDateInput: React.createRef<HTMLInputElement>(),
    dessertSelector: React.createRef<HTMLSelectElement>(),
    maleInput: React.createRef<HTMLInputElement>(),
    femaleInput: React.createRef<HTMLInputElement>(),
    fileUploader: React.createRef<HTMLInputElement>(),
    chocolateInput: React.createRef<HTMLInputElement>(),
    caramelInput: React.createRef<HTMLInputElement>(),
    nutsInput: React.createRef<HTMLInputElement>(),
    vanillaInput: React.createRef<HTMLInputElement>(),
    berriesInput: React.createRef<HTMLInputElement>(),
  };

  constructor(props: FormProps) {
    super(props);
    this.state = {
      errors: {
        userName: '',
        birthdayDate: '',
        catImage: '',
        gender: '',
        dessert: '',
        additives: '',
      },
      submitMessage: '',
    };
  }

  collectInputsInfo = () => {
    function collectAdditives(input: HTMLInputElement) {
      return input.checked ? input.value : '';
    }

    const favoriteAdditivesValues = [
      collectAdditives(this.inputsRefs.chocolateInput.current!),
      collectAdditives(this.inputsRefs.caramelInput.current!),
      collectAdditives(this.inputsRefs.nutsInput.current!),
      collectAdditives(this.inputsRefs.berriesInput.current!),
      collectAdditives(this.inputsRefs.vanillaInput.current!),
    ].filter((additive) => {
      return additive;
    });
    const cardInfo = {
      userName: this.inputsRefs.nameInput.current?.value as string,
      birthdayDate: this.inputsRefs.birthDateInput.current?.value as string,
      gender: this.inputsRefs.maleInput.current?.checked
        ? (this.inputsRefs.maleInput.current?.value as string)
        : (this.inputsRefs.femaleInput.current?.value as string),
      favoriteDessert: this.inputsRefs.dessertSelector.current?.value as string,
      favoriteAdditives: favoriteAdditivesValues,
      catImage: (this.inputsRefs.fileUploader.current?.files as FileList)[0] as File,
    };
    return cardInfo;
  };

  submitForm = () => {
    if (this.validateInputsValues()) {
      const cardInfo = this.collectInputsInfo();
      const { onNewCard } = this.props;
      onNewCard(cardInfo);
      (this.inputsRefs.form.current as HTMLFormElement).reset();
      this.showSubmitMessage();
    }
  };

  showSubmitMessage() {
    this.setState({ submitMessage: 'Submit successfully' });
    setTimeout(() => {
      this.setState({ submitMessage: '' });
    }, 2000);
  }

  validateInputsValues() {
    const inputsValue = this.collectInputsInfo();
    const isTextInputValueCorrect = validateTextInput(inputsValue.userName, 5, 2);
    const isBirthdayDateInputValueCorrect = validateDate(inputsValue.birthdayDate);
    const isFileInputValueCorrect = validateFile(inputsValue.catImage, ['image/jpeg', 'image/png']);
    const genderSet = [this.inputsRefs.maleInput.current!, this.inputsRefs.femaleInput.current!];
    const isUserChooseGender = validateIsSomeOptionsWasChosen(genderSet, genderValues);
    const isUserChooseDessert = validateSelectInput(
      inputsValue.favoriteDessert,
      selectDefaultValue
    );
    const additivesSet = [
      this.inputsRefs.chocolateInput.current!,
      this.inputsRefs.caramelInput.current!,
      this.inputsRefs.nutsInput.current!,
      this.inputsRefs.berriesInput.current!,
      this.inputsRefs.vanillaInput.current!,
    ];
    const isUserChooseAdditives = validateIsSomeOptionsWasChosen(additivesSet, additivesIds);
    const newErrorsState = {
      userName: isTextInputValueCorrect ? '' : errorsTexts.userName,
      birthdayDate: isBirthdayDateInputValueCorrect ? '' : errorsTexts.birthdayDate,
      catImage: isFileInputValueCorrect ? '' : errorsTexts.catImage,
      gender: isUserChooseGender ? '' : errorsTexts.gender,
      dessert: isUserChooseDessert ? '' : errorsTexts.dessert,
      additives: isUserChooseAdditives ? '' : errorsTexts.additives,
    };
    this.setState({ errors: newErrorsState });
    return (
      isTextInputValueCorrect &&
      isBirthdayDateInputValueCorrect &&
      isFileInputValueCorrect &&
      isUserChooseGender
    );
  }

  render() {
    const { errors, submitMessage } = this.state;
    const { userName, birthdayDate, catImage, gender, dessert, additives } = errors;
    return (
      <form data-testid="form-container" ref={this.inputsRefs.form} className="form">
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

        <div className="gender-selector-container">
          Your gender:
          <label className="gender-label" htmlFor="male">
            Male
            <input
              ref={this.inputsRefs.maleInput}
              id="male"
              type="radio"
              className="radio-input"
              value="male"
              name="gender"
            />
            <span />
          </label>
          <label className="gender-label" htmlFor="female">
            Female
            <input
              ref={this.inputsRefs.femaleInput}
              id="female"
              type="radio"
              className="radio-input"
              value="female"
              name="gender"
            />
            <span />
          </label>
          <div className="separator error">{gender}</div>
        </div>

        <label htmlFor="select">
          Select your favorite dessert:
          <div className="input-wrapper select-input-container">
            <select ref={this.inputsRefs.dessertSelector} className="select" id="select">
              <option value={selectDefaultValue}>Choose dessert</option>
              <option value="cake">Cake</option>
              <option value="candies">Candies</option>
              <option value="donuts">Donuts</option>
              <option value="cookies">Cookies</option>
              <option value="ice-cream">Ice-cream</option>
            </select>
          </div>
          <div className="separator error">{dessert}</div>
        </label>

        <fieldset className="checkbox">
          <legend>Your favorite additive: </legend>
          <div>
            <label htmlFor="chocolate">
              Chocolate
              <input
                ref={this.inputsRefs.chocolateInput}
                type="checkbox"
                id="chocolate"
                value="chocolate"
              />
            </label>
          </div>
          <div>
            <label htmlFor="caramel">
              Caramel
              <input
                ref={this.inputsRefs.caramelInput}
                type="checkbox"
                id="caramel"
                value="caramel"
              />
            </label>
          </div>
          <div>
            <label htmlFor="nuts">
              Nuts
              <input ref={this.inputsRefs.nutsInput} type="checkbox" id="nuts" value="nuts" />
            </label>
          </div>
          <div>
            <label htmlFor="berries">
              Berries
              <input
                ref={this.inputsRefs.berriesInput}
                type="checkbox"
                id="berries"
                value="berries"
              />
            </label>
          </div>
          <div>
            <label htmlFor="vanilla">
              Vanilla
              <input
                ref={this.inputsRefs.vanillaInput}
                type="checkbox"
                id="vanilla"
                value="vanilla"
              />
            </label>
          </div>
        </fieldset>
        <div className="separator error">{additives}</div>

        <label className="file-uploader-label" htmlFor="file-uploader-input">
          Add picture with cute cat:
          <input
            ref={this.inputsRefs.fileUploader}
            className="file-uploader-input"
            id="file-uploader-input"
            type="file"
          />
          <div className="separator error">{catImage}</div>
        </label>
        <button className="submit-button" onClick={this.submitForm} type="button">
          Submit
        </button>
        <div className="submit-message">{submitMessage}</div>
      </form>
    );
  }
}

export default Form;
