import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, postContact, delContact } from 'services/contactsApi';

const contactInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrayOfActs = [getContacts, postContact, delContact];

const addStatusToActs = status => arrayOfActs.map(el => el[status]);

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.error = null;
      })
      .addCase(postContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
        state.error = null;
      })
      .addCase(delContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.error = null;
      })
      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected);
  },
});

export const getPhoneBookValue = state => state.phoneBook.contacts;
export const getIsLoading = state => state.phoneBook.isLoading;
export const getError = state => state.phoneBook.error;
