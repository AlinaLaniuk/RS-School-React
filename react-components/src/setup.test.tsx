import '@testing-library/jest-dom';
import { expect } from 'vitest';
import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import server from './mocks/mockServer';
import App from './App';
import store from './store';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('renders react app', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const appElement = screen.getByText(/About us/i);
  expect(appElement).toBeInTheDocument();
});
