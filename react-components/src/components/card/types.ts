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

export interface IState {
  searchValue: string;
}

type PassPageName = (pageName: string) => void;
export type HeaderBoundProps = { setPageName: PassPageName };

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
  inputsValue: {
    userName: string;
    birthdayDate: string;
    gender: string;
    favoriteDessert: string;
    favoriteAdditives: string[];
    catImage: File | undefined;
  };
  errors: {
    userName: string;
    birthdayDate: string;
    catImage: string;
  };
}

export interface CardInfo {
  userName: string;
  birthdayDate: string;
  gender: string;
  favoriteDessert: string;
  favoriteAdditives: string[];
  catImage: File;
}

export interface GenderType {
  [key: string]: string;
}

export interface FormProps {
  setCardsInfo: (cardInfo: CardInfo) => void;
}
