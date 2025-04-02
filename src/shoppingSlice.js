import { createSlice } from "@reduxjs/toolkit";


const shopping = createSlice({
    name: 'shopOptions',
    initialState: {
        product: [
            { id: 1, name: 'Product A', price: '100원', count: 1 },
            { id: 2, name: 'Product B', price: '200원', count: 1 },
            { id: 3, name: 'Product C', price: '300원', count: 1 },
        ],
    },
    reducers: {

    }
});

export default shopping.reducer;
