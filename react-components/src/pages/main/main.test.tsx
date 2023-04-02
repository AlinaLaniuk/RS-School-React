import { render, screen } from '@testing-library/react';
import MainPage from './main';

test('render searchBar and cards', () => {
  render(<MainPage />);
  const searchBar = screen.getByRole('textbox');
  const cardsContainer = screen.getByTestId('cards-container');
  expect(searchBar).toBeInTheDocument();
  expect(cardsContainer).toBeInTheDocument();
});

test('load the last search value from local storage during mounting stage if it exists', () => {
  localStorage.setItem('lastSearchValue', 'test');
  render(<MainPage />);
  const searchInput = screen.getByRole('textbox') as HTMLInputElement;
  expect(searchInput.value).toBe('test');
});
