import * as api from '../../ContactsApi/contactsApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchContacts = createAsyncThunk('contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });
  export const addContact = createAsyncThunk('contacts/add',
  async (data, thunkApi) => {
    try {
      const result = await api.addContacts(data);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
    });
  
     export const removeContact = createAsyncThunk('contacts/remove',
       async (id, thunkApi) => {
    try {
      const result = await api.removeContacts(id);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });

