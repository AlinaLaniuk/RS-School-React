import { render, screen } from '@testing-library/react';
import Forms from './formPage';

test('render form', () => {
  render(<Forms />);
  const formContainer = screen.getByTestId('form-container');
  expect(formContainer).toBeInTheDocument();
});
