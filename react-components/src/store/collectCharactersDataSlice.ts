import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShortCardProps } from '../components/shortCard/shortCard';

const initialState: ShortCardProps[] = [];

const collectCharactersDataSlice = createSlice({
  name: 'charactersData',
  initialState,
  reducers: {
    updateCharactersData(state, action: PayloadAction<ShortCardProps[]>) {
      return action.payload;
    },
  },
});

export const { updateCharactersData } = collectCharactersDataSlice.actions;

export default collectCharactersDataSlice.reducer;
