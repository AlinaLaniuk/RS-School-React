import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  id: number;
  isActive: boolean;
};
const collectCurrentCardIdSlice = createSlice({
  name: 'currentCardId',
  initialState: {
    id: 1,
    isActive: false,
  },
  reducers: {
    updateCurrentCardId(state, action: PayloadAction<InitialState>) {
      state.id = action.payload.id;
      state.isActive = action.payload.isActive;
    },
  },
});

export const { updateCurrentCardId } = collectCurrentCardIdSlice.actions;

export default collectCurrentCardIdSlice.reducer;
