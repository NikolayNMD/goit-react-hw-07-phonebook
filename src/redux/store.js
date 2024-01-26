import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './phoneBookSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookSlice.reducer,
    filter: filterSlice.reducer,
  },
});
