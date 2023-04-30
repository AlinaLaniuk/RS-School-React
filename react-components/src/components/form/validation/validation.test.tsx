import { validateTextInput, validateDate, validateFile } from './validation';

test('validate text if word quantity is less than required', () => {
  const text = 'test test';
  const charQuantity = 3;
  const wordsQuantity = 3;
  expect(validateTextInput(text, charQuantity, wordsQuantity)).toEqual(false);
});

test('validate text if any word has less characters than required', () => {
  const text = 'test test te';
  const charQuantity = 3;
  const wordsQuantity = 3;
  expect(validateTextInput(text, charQuantity, wordsQuantity)).toEqual(false);
});

test('validate date', () => {
  expect(validateDate('Aug 9, 1995')).toEqual(true);
  expect(validateDate('Aug 9, 2223')).toEqual(false);
});

test('validate date if date param is not correct', () => {
  expect(validateDate('test')).toEqual(false);
});

test('validate file', () => {
  const testFile = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
  expect(validateFile(testFile, ['image/png'])).toEqual(true);
});

test('validate file if file types are incorrect', () => {
  const testFile = new File(['(⌐□_□)'], 'test.json', { type: 'application/json' });
  expect(validateFile(testFile, [])).toEqual(false);
});

test('validate incorrect file', () => {
  const testFile = new File(['(⌐□_□)'], 'test.json', { type: 'application/json' });
  expect(validateFile(testFile, ['image/png'])).toEqual(false);
});
