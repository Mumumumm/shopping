import { configureStore } from "@reduxjs/toolkit";
import shopping from "./shoppingSlice";


const store = configureStore({

    reducer: {
        shopOptions: shopping,
    }
});

export default store;