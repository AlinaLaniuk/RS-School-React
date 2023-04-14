import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  searchValue: string;
};

const initialState: State = {
  searchValue: '',
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    updateSearchValue(state, action: PayloadAction<string>) {
      console.log(state);
      console.log(action);
      state.searchValue = action.payload;
    },
  },
});

export const { updateSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
