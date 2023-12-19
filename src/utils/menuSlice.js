import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isOptionOpen : false,
    },
    reducers: {
        closeOptions : (state) => {
            state.isOptionOpen =  !state.isOptionOpen;
        }
    }
});

export const {closeOptions} = menuSlice.actions;
export default menuSlice.reducer;