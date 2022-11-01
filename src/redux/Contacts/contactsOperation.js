import * as api from '../../ContactsApi/contactsApi'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { success, errorMassege, removeMessage} from 'components/Notifigation/Notification';


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
      success();
      return result;
    } catch (error) {
      errorMassege();
      return thunkApi.rejectWithValue(error.message);
    }
    });
  
     export const removeContact = createAsyncThunk('contacts/delete',
       async (id, thunkApi) => {
    try {
      const result = await api.removeContacts(id);
      removeMessage(result.name);
      return result;
    } catch (error) {
      errorMassege();
      return thunkApi.rejectWithValue(error.message);
    }
  });

