import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
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

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // inputsRefs: {
  //   form: React.RefObject<HTMLFormElement>;
  //   nameInput: React.RefObject<HTMLInputElement>;
  //   birthDateInput: React.RefObject<HTMLInputElement>;
  //   dessertSelector: React.RefObject<HTMLSelectElement>;
  //   maleInput: React.RefObject<HTMLInputElement>;
  //   femaleInput: React.RefObject<HTMLInputElement>;
  //   fileUploader: React.RefObject<HTMLInputElement>;
  //   chocolateInput: React.RefObject<HTMLInputElement>;
  //   caramelInput: React.RefObject<HTMLInputElement>;
  //   nutsInput: React.RefObject<HTMLInputElement>;
  //   vanillaInput: React.RefObject<HTMLInputElement>;
  //   berriesInput: React.RefObject<HTMLInputElement>;
  // };

  // constructor(props: FormProps) {
  //   super(props);
  //   this.state = {
  //     errors: {
  //       userName: '',
  //       birthdayDate: '',
  //       catImage: '',
  //       gender: '',
  //       dessert: '',
  //       additives: '',
  //     },
  //     submitMessage: '',
  //   };
  //   this.inputsRefs = {
  //     form: React.createRef(),
  //     nameInput: React.createRef(),
  //     birthDateInput: React.createRef(),
  //     chocolateInput: React.createRef(),
  //     caramelInput: React.createRef(),
  //     nutsInput: React.createRef(),
  //     berriesInput: React.createRef(),
  //     vanillaInput: React.createRef(),
  //     dessertSelector: React.createRef(),
  //     maleInput: React.createRef(),
  //     femaleInput: React.createRef(),
  //     fileUploader: React.createRef(),
  //   };
  // }

  // collectStateInfo = () => {
  //   const favoriteAdditivesArr = [
  //     this.inputsRefs.chocolateInput.current?.checked
  //       ? (this.inputsRefs.chocolateInput.current?.id as string)
  //       : '',
  //     this.inputsRefs.caramelInput.current?.checked
  //       ? (this.inputsRefs.caramelInput.current?.id as string)
  //       : '',
  //     this.inputsRefs.nutsInput.current?.checked
  //       ? (this.inputsRefs.nutsInput.current?.id as string)
  //       : '',
  //     this.inputsRefs.berriesInput.current?.checked
  //       ? (this.inputsRefs.berriesInput.current?.id as string)
  //       : '',
  //     this.inputsRefs.vanillaInput.current?.checked
  //       ? (this.inputsRefs.vanillaInput.current?.id as string)
  //       : '',
  //   ];
  //   const favoriteAdditivesValues = favoriteAdditivesArr.filter((additive) => {
  //     return additive;
  //   });
  //   const cardInfo = {
  //     userName: this.inputsRefs.nameInput.current?.value as string,
  //     birthdayDate: this.inputsRefs.birthDateInput.current?.value as string,
  //     gender: this.inputsRefs.maleInput.current?.checked
  //       ? (this.inputsRefs.maleInput.current?.value as string)
  //       : (this.inputsRefs.femaleInput.current?.value as string),
  //     favoriteDessert: this.inputsRefs.dessertSelector.current?.value as string,
  //     favoriteAdditives: favoriteAdditivesValues,
  //     catImage: (this.inputsRefs.fileUploader.current?.files as FileList)[0] as File,
  //   };
  //   return cardInfo;
  // };

  // submitForm = () => {
  //   if (this.validateInputsValues()) {
  //     const cardInfo = this.collectStateInfo();
  //     const { setCardsInfo } = this.props;
  //     setCardsInfo(cardInfo);
  //     (this.inputsRefs.form.current as HTMLFormElement).reset();
  //     this.showSubmitMessage();
  //   }
  // };

  // showSubmitMessage() {
  //   this.setState({ submitMessage: 'Submit successfully' });
  //   setTimeout(() => {
  //     this.setState({ submitMessage: '' });
  //   }, 2000);
  // }

  // validateInputsValues() {
  //   const isTextInputValueCorrect = validateTextInput(
  //     this.inputsRefs.nameInput.current?.value as string,
  //     5,
  //     2
  //   );
  //   const isBirthdayDateInputValueCorrect = validateDate(
  //     this.inputsRefs.birthDateInput.current?.value as string
  //   );
  //   const isFileInputValueCorrect = validateFile(
  //     (this.inputsRefs.fileUploader.current?.files as FileList)[0] as File,
  //     ['image/jpeg', 'image/png']
  //   );
  //   const isUserChooseGender = validateIsSomeOptionsWasChosen(
  //     this.inputsRefs.maleInput.current?.checked as boolean,
  //     this.inputsRefs.femaleInput.current?.checked as boolean
  //   );
  //   const isUserChooseDessert = validateSelectInput(
  //     this.inputsRefs.dessertSelector.current?.value as string,
  //     selectDefaultValue
  //   );
  //   const isUserChooseAdditives = validateIsSomeOptionsWasChosen(
  //     this.inputsRefs.chocolateInput.current?.checked as boolean,
  //     this.inputsRefs.caramelInput.current?.checked as boolean,
  //     this.inputsRefs.nutsInput.current?.checked as boolean,
  //     this.inputsRefs.berriesInput.current?.checked as boolean,
  //     this.inputsRefs.vanillaInput.current?.checked as boolean
  //   );
  //   const newErrorsState = {
  //     userName: isTextInputValueCorrect ? '' : errorsTexts.userName,
  //     birthdayDate: isBirthdayDateInputValueCorrect ? '' : errorsTexts.birthdayDate,
  //     catImage: isFileInputValueCorrect ? '' : errorsTexts.catImage,
  //     gender: isUserChooseGender ? '' : errorsTexts.gender,
  //     dessert: isUserChooseDessert ? '' : errorsTexts.dessert,
  //     additives: isUserChooseAdditives ? '' : errorsTexts.additives,
  //   };
  //   this.setState({ errors: newErrorsState });
  //   return (
  //     isTextInputValueCorrect &&
  //     isBirthdayDateInputValueCorrect &&
  //     isFileInputValueCorrect &&
  //     isUserChooseGender
  //   );
  // }

  return (
    <form data-testid="form-container" onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="text-input" htmlFor="text-input">
        Your name:
        <div className="input-wrapper form-text-input">
          <input
            {...register('name', {
              required: 'This is required',
              minLength: {
                value: 5,
                message: 'Min length is 5 characters',
              },
              pattern: {
                value: /^[А-ЯЁA-Z][а-яёa-z]+$/,
                message: 'Each word must be started with uppercased letter',
              },
            })}
            id="text-input"
            type="text"
          />
        </div>
        <div className="separator error">{errors.name?.message}</div>
      </label>

      <label htmlFor="date-input">
        Your birthday:
        <div className="input-wrapper date-input-wrapper">
          <input
            {...register('birthdayDate', {
              required: 'This is required',
              validate: (value: string) => {
                return validateDate(value) || 'Incorrect date';
              },
            })}
            id="date-input"
            type="date"
          />
        </div>
        <div className="separator error">{errors.birthdayDate?.message}</div>
      </label>

      <div className="gender-selector-container">
        Your gender:
        <label className="gender-label" htmlFor="male">
          Male
          <input
            {...register('gender', { required: 'This is required' })}
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
            {...register('gender', { required: 'This is required' })}
            id="female"
            type="radio"
            className="radio-input"
            value="female"
            name="gender"
          />
          <span />
        </label>
        <div className="separator error">{errors.gender?.message}</div>
      </div>

      <label htmlFor="select">
        Select your favorite dessert:
        <div className="input-wrapper select-input-container">
          <select
            {...register('dessert', { required: 'This is required' })}
            className="select"
            id="select"
            defaultValue=""
          >
            <option value="" disabled>
              Choose dessert
            </option>
            <option value="cake">Cake</option>
            <option value="candies">Candies</option>
            <option value="donuts">Donuts</option>
            <option value="cookies">Cookies</option>
            <option value="ice-cream">Ice-cream</option>
          </select>
        </div>
        <div className="separator error">{errors.dessert?.message}</div>
      </label>

      <fieldset className="checkbox">
        <legend>Your favorite additive: </legend>
        <div>
          <label htmlFor="chocolate">
            Chocolate
            <input
              {...register('additives', { required: 'This is required' })}
              type="checkbox"
              id="chocolate"
            />
          </label>
        </div>
        <div>
          <label htmlFor="caramel">
            Caramel
            <input
              {...register('additives', { required: 'This is required' })}
              type="checkbox"
              id="caramel"
            />
          </label>
        </div>
        <div>
          <label htmlFor="nuts">
            Nuts
            <input
              {...register('additives', { required: 'This is required' })}
              type="checkbox"
              id="nuts"
            />
          </label>
        </div>
        <div>
          <label htmlFor="berries">
            Berries
            <input
              {...register('additives', { required: 'This is required' })}
              type="checkbox"
              id="berries"
            />
          </label>
        </div>
        <div>
          <label htmlFor="vanilla">
            Vanilla
            <input
              {...register('additives', { required: 'This is required' })}
              type="checkbox"
              id="vanilla"
            />
          </label>
        </div>
      </fieldset>
      <div className="separator error">{errors.additives?.message}</div>

      {/* <label className="file-uploader-label" htmlFor="file-uploader-input">
        Add picture with cute cat:
        <input
          {...register('fileUploader')}
          className="file-uploader-input"
          id="file-uploader-input"
          type="file"
        />
        <div className="separator error">{catImage}</div>
      </label> */}
      <input className="submit-button" type="submit" />

      {/* <div className="submit-message">{submitMessage}</div> */}
    </form>
  );
}

export default Form;
