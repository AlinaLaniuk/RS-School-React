const baseURL = 'https://rickandmortyapi.com/api';

export function getCharacters(searchValue: string) {
  return fetch(`${baseURL}/character/?name=${searchValue}`)
    .then((response) => {
      return response.ok ? response.json() : undefined;
    })
    .catch((error) => {
      throw new Error('The Promise is rejected!', error);
    });
}

export function getCharacter(id: number) {
  return fetch(`${baseURL}/character/${id}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw new Error('The Promise is rejected!', error);
    });
}
