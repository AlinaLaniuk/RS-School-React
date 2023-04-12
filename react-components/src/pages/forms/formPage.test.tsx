import { vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from './formPage';

test('filling form', async () => {
  vi.stubGlobal('URL', {
    createObjectURL: () => {},
  });
  render(<FormPage />);

  const card = screen.queryByText(/User birthday/i);
  expect(card).toBeNull();
  const name = screen.getByLabelText<HTMLInputElement>(/name/i);
  await userEvent.type(name, 'Alina Laniuk');
  expect(name.value).toEqual('Alina Laniuk');

  const birthdayDate = screen.getByLabelText<HTMLInputElement>(/birthday/i);
  await userEvent.type(birthdayDate, '2000-02-20');
  expect(birthdayDate.value).toEqual('2000-02-20');

  const femaleInput = screen.getByLabelText<HTMLInputElement>(/Female/i);
  await userEvent.click(femaleInput);
  expect(femaleInput.checked).toEqual(true);

  const dessert = screen.getByLabelText<HTMLInputElement>(/dessert/i);
  await userEvent.selectOptions(dessert, 'cake');
  expect(dessert.value).toEqual('cake');

  const chocolate = screen.getByLabelText<HTMLInputElement>(/chocolate/i);
  await userEvent.click(chocolate);
  expect(chocolate.checked).toEqual(true);

  const fileInput = screen.getByLabelText<HTMLInputElement>(/picture/i);
  const testFile = new File(['test'], 'test.png', { type: 'image/png' });
  await userEvent.upload(fileInput, testFile);

  expect(fileInput.files).toHaveLength(1);

  const submitButton = screen.getByText<HTMLInputElement>(/Submit/i);
  expect(submitButton).toBeInTheDocument();
  await userEvent.click(submitButton);
  await waitFor(() => expect(screen.findByText(/Submit successfully/i)).toBeTruthy());
  const card1 = screen.getByText(/User birthday/i);
  expect(card1).toBeInTheDocument();

  expect(name.value).toEqual('');
  expect(birthdayDate.value).toEqual('');
  expect(femaleInput.checked).toEqual(false);
  expect(dessert.value).toEqual('');
  expect(chocolate.checked).toEqual(false);
});

test('submit empty form', async () => {
  render(<FormPage />);
  const errorsElements = screen.queryAllByTestId('error');
  const submit = screen.getByText('Submit');
  await userEvent.click(submit);
  errorsElements.forEach((element) => {
    expect(element.textContent?.length).toBeGreaterThan(0);
  });
});
