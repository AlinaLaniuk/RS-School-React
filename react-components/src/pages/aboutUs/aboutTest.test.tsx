import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './aboutUs';

test('render AboutUsPage', () => {
  const setPageName = () => undefined;
  render(
    <BrowserRouter>
      <AboutUs setPageName={setPageName} />
    </BrowserRouter>
  );
  const aboutUsElement = screen.getByText(/Some text about us./i);
  expect(aboutUsElement).toBeInTheDocument();
});
