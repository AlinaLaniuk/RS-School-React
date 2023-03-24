import { render, screen } from '@testing-library/react';
import Forms from './forms';

const setPageName = () => undefined;

test('render form', () => {
  render(<Forms setPageName={setPageName} />);
  const formContainer = screen.getByTestId('form-container');
  expect(formContainer).toBeInTheDocument();
});
