import { rest } from 'msw';

const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (request, response, context) => {
    return response(
      context.status(200),
      context.json({
        info: {
          count: 826,
          next: 'https://rickandmortyapi.com/api/character/?page=2',
          pages: 42,
          prev: null,
        },
        results: [
          {
            created: '2017-11-04T18:48:46.250Z',
            episode: ['https://rickandmortyapi.com/api/episode/1'],
            gender: 'Male',
            id: 1,
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            location: {
              name: 'Citadel of Ricks',
              url: 'https://rickandmortyapi.com/api/location/3',
            },
            name: 'Rick',
            origin: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1',
            },
            species: 'Human',
            status: 'Alive',
            type: '',
            url: 'https://rickandmortyapi.com/api/character/1',
          },
        ],
      })
    );
  }),
  rest.get('https://rickandmortyapi.com/api/character/1', (request, response, context) => {
    return response(
      context.status(200),
      context.json({
        created: '2017-11-04T18:48:46.250Z',
        episode: ['https://rickandmortyapi.com/api/episode/1'],
        gender: 'Male',
        id: 1,
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        location: {
          name: 'Citadel of Ricks',
          url: 'https://rickandmortyapi.com/api/location/3',
        },
        name: 'Rick',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        species: 'Human',
        status: 'Alive',
        type: '',
        url: 'https://rickandmortyapi.com/api/character/1',
      })
    );
  }),
];

export default handlers;
