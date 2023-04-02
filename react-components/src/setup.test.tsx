import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders react app', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const appElement = screen.getByText(/About us/i);
  expect(appElement).toBeInTheDocument();
});

expect.extend(matchers);
afterEach(() => {
  cleanup();
});
