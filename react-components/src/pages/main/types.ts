import { FullCardProps } from '../../components/modal/types';

export type AllCharactersResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: FullCardProps[];
};
