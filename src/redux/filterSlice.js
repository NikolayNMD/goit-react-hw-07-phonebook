import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(_, action) {
      return action.payload;
    },
  },
});

export const getFilter = state => state.filter;

export const { setFilter } = filterSlice.actions;
