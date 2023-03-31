export type CardProps = {
  id?: string;
  header?: string;
  src?: string;
  description?: string;
  rating?: number;
  price: number;
  popular?: boolean;
  discount: number;
};

export type IState = {
  searchValue: string;
};

type PassPageName = (pageName: string) => void;
export type HeaderBoundProps = { setPageName: PassPageName };

export type InputState = {
  inputValue: string;
};

export type CheckboxInputState = {
  value: {
    chocolate: boolean;
    caramel: boolean;
    nuts: boolean;
    berries: boolean;
    vanilla: boolean;
  };
};

export type RadioInputState = {
  male: boolean;
  female: boolean;
};

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

export type CardInfo = {
  userName: string;
  birthdayDate: string;
  gender: string;
  favoriteDessert: string;
  favoriteAdditives: string[];
  catImage: File;
};

export type FormProps = {
  setCardsInfo: (cardInfo: CardInfo) => void;
};
