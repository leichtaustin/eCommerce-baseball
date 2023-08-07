import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        playersInCart: [],
        cartTotal: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,                 
                playersInCart: [...state.playersInCart, {
                    ...action.payload,
                    isInCart: true,
                }],
                cartTotal: state.cartTotal + action.payload.auctionValue,
            }
        },
        removeFromCart: (state, action) => {
            return {
                ...state, 
                playersInCart: state.playersInCart.filter(player => player.playerId !== action.payload.playerId),
                cartTotal: state.cartTotal - action.payload.auctionValue
            }
        }
    }
})

//selectors

export const selectCart = (state) => state.cart;
export const selectPlayersInCart = (state) => state.cart.playersInCart;
export const selectCartTotal = (state) => state.cart.cartTotal;

//export actions and reducer

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;