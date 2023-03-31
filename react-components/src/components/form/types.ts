import { CardInfo } from './userInfoCard/types';

export type FormState = {
  errors: {
    userName: string;
    birthdayDate: string;
    catImage: string;
    gender: string;
    dessert: string;
    additives: string;
  };
  submitMessage: string;
};

export type FormProps = {
  setCardsInfo: (cardInfo: CardInfo) => void;
};
