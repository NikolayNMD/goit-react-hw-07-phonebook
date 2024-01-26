import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://65b3695d770d43aba479b3d8.mockapi.io/contacts';

export const getContacts = createAsyncThunk(
  'phoneBook/getContacts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'phoneBook/postContact',
  async (newContact, thunkApi) => {
    try {
      const response = await axios.post(URL, newContact);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const delContact = createAsyncThunk(
  'phoneBook/delContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`${URL}/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
