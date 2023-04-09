import '@testing-library/jest-dom';
import { expect } from 'vitest';
import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import server from './mocks/server';
import App from './App';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('renders react app', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const appElement = screen.getByText(/About us/i);
  expect(appElement).toBeInTheDocument();
});
