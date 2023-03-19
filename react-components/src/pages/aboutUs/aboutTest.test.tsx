import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './aboutUs';

test('render PageNotFound', () => {
  render(
    <BrowserRouter>
      <AboutUs />
    </BrowserRouter>
  );
  const aboutUsElement = screen.getByText(/Some text about us./i);
  expect(aboutUsElement).toBeInTheDocument();
});
