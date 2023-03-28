import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from './pageNotFound';

test('render PageNotFound', () => {
  const setPageName = () => undefined;
  render(
    <BrowserRouter>
      <PageNotFound setPageName={setPageName} />
    </BrowserRouter>
  );
  const pageNotFoundElement = screen.getByText(/Page Not Found/i);
  expect(pageNotFoundElement).toBeInTheDocument();
});
