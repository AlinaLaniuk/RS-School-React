import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { UserInfoCard } from './userInfoCard';
import store from '../../../store';

test('render card', () => {
  render(
    <Provider store={store}>
      <UserInfoCard
        key="test"
        name="test"
        birthdayDate="test"
        gender="test"
        dessert="test"
        additives={['test']}
        file="test"
      />
    </Provider>
  );
  const cardElement = screen.getByText(/User birthday/i);
  expect(cardElement).toBeInTheDocument();
});
