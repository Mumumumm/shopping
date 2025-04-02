import { createSlice } from "@reduxjs/toolkit";


const shopping = createSlice({
    name: 'shopOptions',
    initialState: {
        product: [
            { id: 1, name: 'Product A', price: '100원' },
            { id: 2, name: 'Product B', price: '200원' },
            { id: 3, name: 'Product C', price: '300원' },
        ],
    },
    reducers: {

    }
});

export default shopping;
