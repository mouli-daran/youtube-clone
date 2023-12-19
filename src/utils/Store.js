import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import menuSlice from "./menuSlice";

const store = configureStore({
    reducer : {
        app : appSlice,
        search : searchSlice,
        chat : chatSlice,
        menu : menuSlice,
    },
});
export default store;