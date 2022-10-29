import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        filterContacts(state, action) {
            state.filter = action.payload;
        },
    }
})

export const { filterContacts } = filterSlice.actions;
export const filter = filterSlice.reducer;

//  [removeContact.pending](state, action) {
//             state.isLoading = true;
//         },
//          [removeContact.fulfilled](state, action) {
//             state.isLoading = false;
//              state.items = state.items.filter(item =>  item !== action.payload);
//         },
//         [removeContact.rejected](state, action) {
//             state.isLoading = false;
//             state.error = action.payload;
//         },