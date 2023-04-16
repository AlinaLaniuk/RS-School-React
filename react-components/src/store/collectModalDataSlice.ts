import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullCardProps } from '../components/modal/types';

const defaultModalData = {
  id: 1,
  created: '',
  gender: '',
  image: '',
  location: {
    name: '',
  },
  name: '',
  species: '',
  status: '',
  type: '',
};

const initialState: FullCardProps = defaultModalData;

const collectModalDataSlice = createSlice({
  name: 'charactersData',
  initialState,
  reducers: {
    updateModalData(state, action: PayloadAction<FullCardProps>) {
      return action.payload;
    },
  },
});

export const { updateModalData } = collectModalDataSlice.actions;

export default collectModalDataSlice.reducer;
