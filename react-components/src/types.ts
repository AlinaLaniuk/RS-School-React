export interface CardProps {
  id?: string;
  header?: string;
  src?: string;
  description?: string;
  rating?: number;
  price: number;
  popular?: boolean;
  discount: number;
}

type PassPageName = (pageName: string) => void;
export type HeaderBoundProps = { setPage: PassPageName };

export interface InputState {
  inputValue: string;
}

export interface CheckboxInputState {
  value: {
    chocolate: boolean;
    caramel: boolean;
    nuts: boolean;
    berries: boolean;
    vanilla: boolean;
  };
}

export interface RadioInputState {
  male: boolean;
  female: boolean;
}

export interface FormState {
  errors: {
    userName: string;
    birthdayDate: string;
    catImage: string;
    gender: string;
    dessert: string;
    additives: string;
  };
  submitMessage: string;
}

export interface CardInfo {
  name: string;
  birthdayDate: string;
  gender: string;
  dessert: string;
  additives: string[];
  file: string;
}

export interface GenderType {
  [key: string]: string;
}

export interface FormProps {
  setCardsInfo: (cardInfo: CardInfo) => void;
}
