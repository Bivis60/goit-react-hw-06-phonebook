import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'Filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
