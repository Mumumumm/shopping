import { createSlice } from "@reduxjs/toolkit";


const shopping = createSlice({
    name: 'shopOptions',
    initialState: {
        product: [
            { id: Date.now(), name: 'Product A', price: '100원', count: 1 },
            { id: Date.now(), name: 'Product B', price: '200원', count: 1 },
            { id: Date.now(), name: 'Product C', price: '300원', count: 1 },
        ],
        addCartList: [],
    },
    reducers: {
        addCart: (state, action) => {
            state.addCartList = [...state.product, action.payload]
        }
    }
});
export const { addCart } = shopping.actions;
export default shopping.reducer;
