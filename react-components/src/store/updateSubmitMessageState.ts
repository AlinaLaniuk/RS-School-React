import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  isSubmitMessage: boolean;
};
const updateSubmitMessageStateSlice = createSlice({
  name: 'currentCardId',
  initialState: {
    isSubmitMessage: false,
  },
  reducers: {
    updateIsSubmitMessage(state, action: PayloadAction<InitialState>) {
      state.isSubmitMessage = action.payload.isSubmitMessage;
    },
  },
});

export const { updateIsSubmitMessage } = updateSubmitMessageStateSlice.actions;

export default updateSubmitMessageStateSlice.reducer;
