const baseURL = 'https://rickandmortyapi.com/api';

export function getCharacters(searchValue: string) {
  return fetch(`${baseURL}/character/?name=${searchValue}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return undefined;
    })
    .catch((error) => {
      console.error('The Promise is rejected!', error);
    });
}

export function getCharacter(id: number) {
  return fetch(`${baseURL}/character/${id}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error('The Promise is rejected!', error);
    });
}
