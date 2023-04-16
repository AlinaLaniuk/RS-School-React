import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FullCardProps } from './collectModalDataSlice';

export type AllCharactersResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: FullCardProps[];
};

export const charactersApi = createApi({
  reducerPath: 'allCharacters',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  keepUnusedDataFor: 0,
  endpoints: (build) => ({
    getCharacters: build.query<AllCharactersResponse, string>({
      query: (characterName) => ({
        url: '/character',
        params: {
          name: characterName,
        },
      }),
    }),
    getCharacter: build.query<FullCardProps, number>({
      query: (id) => ({
        url: `/character/${id}`,
      }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery } = charactersApi;
