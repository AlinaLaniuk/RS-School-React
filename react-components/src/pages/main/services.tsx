const baseURL = 'https://rickandmortyapi.com/api';

export function getCharacters() {
  return fetch(`${baseURL}/character`).then((response) => {
    return response.json();
  });
}

export default getCharacters;
