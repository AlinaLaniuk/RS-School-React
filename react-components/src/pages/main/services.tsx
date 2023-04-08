const baseURL = 'https://rickandmortyapi.com/api';

export function getCharacters(searchValue: string) {
  return fetch(`${baseURL}/character/?name=${searchValue}`).then((response) => {
    return response.json();
  });
}

export function getCharacter(id: number) {
  return fetch(`${baseURL}/character/${id}`).then((response) => {
    return response.json();
  });
}
