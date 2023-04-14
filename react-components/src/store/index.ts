import { configureStore } from '@reduxjs/toolkit';
import searchValueSlice from './searchValueSlice';
import collectFormDataSlice from './collectCardsDataSlice';

const store = configureStore({
  reducer: {
    searchValueReducer: searchValueSlice,
    collectFormDataReducer: collectFormDataSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
