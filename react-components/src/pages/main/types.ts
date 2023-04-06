import { CardProps } from '../../components/card/types';

export type AllCharactersResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: CardProps[];
};
