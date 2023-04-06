import { CardProps } from '../../components/card/types';

type Movies = {
  docs: CardProps[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
};

const host = 'https://the-one-api.dev/v2';

const headers = {
  Accept: 'application/json',
  Authorization: 'Bearer iaG5nhmABJcsGN6Z7BVM',
};

export function getBooks() {
  return fetch(`${host}/book`, {
    headers,
  }).then((response) => {
    response.json();
  });
}

export async function getMovies() {
  const moviesResponse = await fetch(`${host}/movie`, {
    headers,
  });
  const moviesData: Movies = await moviesResponse.json();
  return moviesData;
}
