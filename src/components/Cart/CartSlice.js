import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            return [...state, {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                auctionValue: action.payload.auctionValue

            }]
        }
    }
})

//selectors

export const selectCart = (state) => state.cart;

//export actions and reducer

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;