import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CardsData = {
  name: string;
  birthdayDate: string;
  gender: string;
  dessert: string;
  additives: string[];
  file: string;
};

const initialState: CardsData[] = [];

const collectFormDataSlice = createSlice({
  name: 'cardsData',
  initialState,
  reducers: {
    updateCardsData(state, action: PayloadAction<CardsData>) {
      state.push(action.payload);
    },
  },
});

export const { updateCardsData } = collectFormDataSlice.actions;

export default collectFormDataSlice.reducer;
