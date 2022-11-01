import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./Contacts/contactsOperation";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
     extraReducers: {
        [fetchContacts.pending](state) {
             state.isLoading = true;
        },
         [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.items = action.payload
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
         },
        
          [addContact.pending](state) {
             state.isLoading = true;
        },
         [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.items.push({
                ...action.payload,
            })
             
        },
        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
         },
        
          [removeContact.pending](state) {
            state.isLoading = true;
        },
         [removeContact.fulfilled](state, {payload}) {
             state.isLoading = false;
             state.items = state.items.filter((item) => item.id !== payload.id);
        },
        [removeContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
  },
});
export const contactReducer = contactsSlice.reducer;


