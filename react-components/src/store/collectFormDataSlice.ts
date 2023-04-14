import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormValues = {
  name: string;
  birthdayDate: string;
  gender: string;
  dessert: string;
  additives: string[];
  file: string;
};

const initialState: FormValues[] = [];

const collectFormDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateFormData(state, action: PayloadAction<FormValues>) {
      state.push(action.payload);
    },
  },
});

export const { updateFormData } = collectFormDataSlice.actions;

export default collectFormDataSlice.reducer;
