import { render, screen, waitFor } from '@testing-library/react';
import MainPage from './main';

test('render searchBar and cards', async () => {
  render(<MainPage />);
  await waitFor(() => expect(screen.getByText('Rick')).toBeInTheDocument());
  expect(screen.getByText('Rick')).toBeInTheDocument();
  const searchBar = screen.getByPlaceholderText('Type to search...');
  expect(searchBar).toBeInTheDocument();
});

test('load the last search value from local storage during mounting stage if it exists', () => {
  localStorage.setItem('lastSearchValue', 'test');
  render(<MainPage />);
  const searchInput = screen.getByRole('textbox') as HTMLInputElement;
  expect(searchInput.value).toBe('test');
});

test('open modal window', async () => {
  render(<MainPage />);
  await waitFor(() => expect(screen.getByText('Rick')).toBeInTheDocument());
  const card = screen.getByText('Rick');
  card.click();
  await waitFor(() => expect(screen.getByText('Rick')).toBeInTheDocument());
  expect(screen.getByText('Gender: Male')).toBeInTheDocument();
  expect(screen.getByText('Species: Human')).toBeInTheDocument();
  expect(screen.getByText('Status: Alive')).toBeInTheDocument();
  expect(screen.getByText('Location: Citadel of Ricks')).toBeInTheDocument();
});
