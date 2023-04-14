import { configureStore } from '@reduxjs/toolkit';
import searchValueSlice from './searchValueSlice';

// type Action = {
//   type: string;
//   payload: string;
// };

const store = configureStore({
  reducer: {
    searchValueReducer: searchValueSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
