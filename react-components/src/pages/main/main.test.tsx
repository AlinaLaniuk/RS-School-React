import { act, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import MainPage from './main';
import store from '../../store';

test('render searchBar and cards', async () => {
  render(
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
  await waitFor(() => expect(screen.getByText('Rick')).toBeInTheDocument());
  expect(screen.getByText('Rick')).toBeInTheDocument();
  const searchBar = screen.getByPlaceholderText('Type to search...');
  expect(searchBar).toBeInTheDocument();
  await userEvent.type(searchBar, 'Rick{enter}');
  await waitFor(() => expect(screen.getByText('Rick')).toBeInTheDocument());
});

test('open and close modal window', async () => {
  render(
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
  await waitFor(() => expect(screen.getByText('Rick')).toBeInTheDocument());
  const card = screen.getByText('Rick');
  act(() => {
    card.click();
  });

  await waitFor(() => expect(screen.getByText('Rick Test')).toBeInTheDocument());
  expect(screen.getByText('Created: 2017-11-04T18:48:46.250Z')).toBeInTheDocument();
  expect(screen.getByText('Gender: Male')).toBeInTheDocument();
  expect(screen.getByText('Species: Human')).toBeInTheDocument();
  expect(screen.getByText('Status: Alive')).toBeInTheDocument();
  expect(screen.getByText('Location: Citadel of Ricks')).toBeInTheDocument();
  const closeButton = screen.getByTestId('close-button');
  await userEvent.click(closeButton);
  const modal = screen.getByTestId('modal-container');
  expect(modal.classList.contains('modal-active')).toEqual(false);
});
