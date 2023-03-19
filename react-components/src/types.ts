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
  data: CardProps[];
  searchValue: string;
}

type PassPageName = (pageName: string) => void;
export type HeaderBoundProps = { setPageName: PassPageName };
