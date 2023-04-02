import { render, screen } from '@testing-library/react';
import UserInfoCard from './userInfoCard';

test('render card', () => {
  render(
    <UserInfoCard
      key="test"
      name="test"
      birthdayDate="test"
      gender="test"
      dessert="test"
      additives={['test']}
      file="test"
    />
  );
  const cardElement = screen.getByText(/User birthday/i);
  expect(cardElement).toBeInTheDocument();
});
