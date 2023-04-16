import { configureStore } from '@reduxjs/toolkit';
import searchValueSlice from './searchValueSlice';
import collectFormDataSlice from './collectFormDataSlice';
import collectCharactersDataSlice from './collectCharactersDataSlice';
import collectModalDataSlice from './collectModalDataSlice';
import updateCurrentCardIdSlice from './updateCurrentCardIdSlice';
import updateSubmitMessageState from './updateSubmitMessageState';
import { charactersApi } from './api';

const store = configureStore({
  reducer: {
    searchValueReducer: searchValueSlice,
    collectFormDataReducer: collectFormDataSlice,
    updateCharactersDataReducer: collectCharactersDataSlice,
    collectModalDataSliceReducer: collectModalDataSlice,
    updateCurrentCardIdSliceReducer: updateCurrentCardIdSlice,
    updateSubmitMessageStateReducer: updateSubmitMessageState,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
