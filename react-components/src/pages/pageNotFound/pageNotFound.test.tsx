import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from './pageNotFound';

test('render PageNotFound', () => {
  render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );
  const pageNotFoundElement = screen.getByText(/Page Not Found/i);
  expect(pageNotFoundElement).toBeInTheDocument();
});
