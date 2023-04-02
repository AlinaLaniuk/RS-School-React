import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './form';

test('filling form', async () => {
  const onNewCard = () => {
    return undefined;
  };
  render(<Form onNewCard={onNewCard} />);
  const name = screen.getByLabelText<HTMLInputElement>(/name/i);
  expect(name).toBeInTheDocument();
  await userEvent.type(name, 'test');
  expect(name.value).toEqual('test');

  const birthdayDate = screen.getByLabelText<HTMLInputElement>(/birthday/i);
  await userEvent.type(birthdayDate, '2000-02-20');
  expect(birthdayDate).toBeInTheDocument();
  expect(birthdayDate.value).toEqual('2000-02-20');

  const femaleInput = screen.getByLabelText<HTMLInputElement>(/Female/i);
  expect(femaleInput).toBeInTheDocument();
  await userEvent.click(femaleInput);
  expect(femaleInput.checked).toEqual(true);

  const dessert = screen.getByLabelText<HTMLInputElement>(/dessert/i);
  expect(dessert).toBeInTheDocument();
  await userEvent.selectOptions(dessert, 'cake');
  expect(dessert.value).toEqual('cake');

  const chocolate = screen.getByLabelText<HTMLInputElement>(/chocolate/i);
  expect(chocolate).toBeInTheDocument();
  await userEvent.click(chocolate);
  expect(chocolate.checked).toEqual(true);

  const fileInput = screen.getByLabelText<HTMLInputElement>(/picture/i);
  expect(fileInput).toBeInTheDocument();
  const testFile = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
  await userEvent.upload(fileInput, testFile);
  expect(fileInput.files).toHaveLength(1);
});

test('submit empty form', async () => {
  const onNewCard = () => {
    return undefined;
  };
  render(<Form onNewCard={onNewCard} />);
  const errorsElements = screen.queryAllByTestId('error');
  const submit = screen.getByText('Submit');
  await userEvent.click(submit);
  errorsElements.forEach((element) => {
    expect(element.textContent?.length).toBeGreaterThan(0);
  });
});
