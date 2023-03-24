import { validateTextInput, validateDate, validateFile, validateRadioInputs } from './validation';

test('validate text', () => {
  const text = 'test test';
  const charQuantity = 3;
  const wordsQuantity = 3;
  expect(validateTextInput(text, charQuantity, wordsQuantity)).toEqual(false);
});

test('validate date', () => {
  expect(validateDate('Aug 9, 1995')).toEqual(true);
});

test('validate file', () => {
  const testFile = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
  expect(validateFile(testFile, ['image/png'])).toEqual(true);
});

test('validate radio inputs', () => {
  expect(validateRadioInputs(false, false)).toEqual(false);
});
