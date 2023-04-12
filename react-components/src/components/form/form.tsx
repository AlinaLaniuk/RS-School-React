import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { validateTextInput, validateDate, validateFile } from './validation/validation';
import { CardInfo } from './userInfoCard/types';

const errorsTexts = {
  userName:
    'At least 5 characters in each word, at least 2 words, each word starts with uppercased letter. Only English',
  birthdayDate: 'Incorrect date. Cannot be greater than current date',
  gender: 'You need to choose gender',
  dessert: 'You need to choose dessert',
  additives: 'You need to choose some additives',
  catImage: 'Incorrect file. It must be jpg or png file',
};

type FormValues = {
  name: string;
  birthdayDate: string;
  gender: string;
  dessert: string;
  additives: string[];
  file: FileList;
};

function Form({ onNewCard }: { onNewCard: (cardsInfo: CardInfo) => void }) {
  const [submitMessage, updateSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit = (data: FormValues) => {
    const cardData = {
      name: data.name,
      birthdayDate: data.birthdayDate,
      gender: data.gender,
      dessert: data.dessert,
      additives: data.additives,
      file: URL.createObjectURL(data.file[0]),
    };
    onNewCard(cardData);
    reset();
    updateSubmitMessage('Submit successfully');
    setTimeout(() => {
      updateSubmitMessage('');
    }, 3000);
  };

  return (
    <form data-testid="form-container" onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="text-input" htmlFor="text-input">
        Your name:
        <div className="input-wrapper form-text-input">
          <input
            {...register('name', {
              required: errorsTexts.userName,
              validate: (value: string) => {
                return validateTextInput(value, 5, 2) || errors.name?.message;
              },
            })}
            id="text-input"
            type="text"
          />
        </div>
        {errors.name && (
          <div data-testid="error" className="separator error">
            {errors.name?.message}
          </div>
        )}
      </label>

      <label htmlFor="date-input">
        Your birthday:
        <div className="input-wrapper date-input-wrapper">
          <input
            {...register('birthdayDate', {
              required: 'This is required',
              validate: (value: string) => {
                return validateDate(value);
              },
            })}
            id="date-input"
            type="date"
          />
        </div>
        {errors.birthdayDate && (
          <div data-testid="error" className="separator error">
            {errors.birthdayDate?.message}
          </div>
        )}
      </label>

      <div className="gender-selector-container">
        Your gender:
        <label className="gender-label" htmlFor="male">
          Male
          <input
            {...register('gender', { required: errorsTexts.gender })}
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
            {...register('gender', { required: errorsTexts.gender })}
            id="female"
            type="radio"
            className="radio-input"
            value="female"
            name="gender"
          />
          <span />
        </label>
        {errors.gender && (
          <div data-testid="error" className="separator error">
            {errors.gender?.message}
          </div>
        )}
      </div>

      <label htmlFor="select">
        Select your favorite dessert:
        <div className="input-wrapper select-input-container">
          <select
            {...register('dessert', { required: errorsTexts.dessert })}
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
        {errors.dessert && (
          <div data-testid="error" className="separator error">
            {errors.dessert?.message}
          </div>
        )}
      </label>

      <fieldset className="checkbox">
        <legend>Your favorite additive: </legend>
        <div>
          <label htmlFor="chocolate">
            Chocolate
            <input
              {...register('additives', { required: errorsTexts.additives })}
              type="checkbox"
              value="chocolate"
              id="chocolate"
              name="additives"
            />
          </label>
        </div>
        <div>
          <label htmlFor="caramel">
            Caramel
            <input
              {...register('additives', { required: errorsTexts.additives })}
              type="checkbox"
              value="caramel"
              id="caramel"
              name="additives"
            />
          </label>
        </div>
        <div>
          <label htmlFor="nuts">
            Nuts
            <input
              {...register('additives', { required: errorsTexts.additives })}
              type="checkbox"
              value="nuts"
              id="nuts"
              name="additives"
            />
          </label>
        </div>
        <div>
          <label htmlFor="berries">
            Berries
            <input
              {...register('additives', { required: errorsTexts.additives })}
              type="checkbox"
              value="berries"
              id="berries"
              name="additives"
            />
          </label>
        </div>
        <div>
          <label htmlFor="vanilla">
            Vanilla
            <input
              {...register('additives', { required: errorsTexts.additives })}
              type="checkbox"
              value="vanilla"
              id="vanilla"
              name="additives"
            />
          </label>
        </div>
      </fieldset>
      {errors.additives && (
        <div data-testid="error" className="separator error">
          {errors.additives?.message}
        </div>
      )}

      <label className="file-uploader-label" htmlFor="file-uploader-input">
        Add picture with cute cat:
        <input
          {...register('file', {
            required: 'This is required',
            validate: (value: FileList) => {
              return validateFile(value[0], ['image/jpeg', 'image/png']);
            },
          })}
          className="file-uploader-input"
          id="file-uploader-input"
          type="file"
        />
        {errors.file && (
          <div data-testid="error" className="separator error">
            {errors.file?.message}
          </div>
        )}
      </label>
      <input value="Submit" className="submit-button" type="submit" />
      <div className="submit-message">{submitMessage}</div>
    </form>
  );
}

export default Form;
