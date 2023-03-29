import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import UserInfoCard from './userInfoCard';

test('render card', () => {
  const testFile = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
  window.URL.createObjectURL = vi.fn();
  render(
    <UserInfoCard
      key="test"
      userName="test"
      birthdayDate="test"
      gender="test"
      favoriteDessert="test"
      favoriteAdditives={['test']}
      catImage={testFile}
    />
  );
  const cardElement = screen.getByText(/User birthday/i);
  expect(cardElement).toBeInTheDocument();
});
