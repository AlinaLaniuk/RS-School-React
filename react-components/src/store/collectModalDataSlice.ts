import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FullCardProps = {
  id: number;
  created: string;
  episode?: string[];
  gender: string;
  image: string;
  location: {
    name: string;
    url?: string;
  };
  name: string;
  origin?: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url?: string;
};

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
