import { createSlice} from '@reduxjs/toolkit';
import { selectCart } from '../Cart/CartSlice';

export const searchResultSlice = createSlice({
    name: 'searchResults',
    initialState: [],
    reducers: {
        addPlayerCards: (state, action) => {
            return [...state, action.payload]
        },
        filterPlayersInCart: (state, action) => {
            return state.filter(player => player.playerId !== action.payload.playerId)
        }
    }
})

//selectors

export const selectSearchResults = (state) => state.searchResults;

// export const selectFilteredPlayers = (state) => {
//     const allPlayers = selectSearchResults(state);
//     const cartPlayers = selectCart(state);

//     return allPlayers.filter((player) => 
//         (!(cartPlayers.includes(player.playerId)))   
//     )
// }

//export actions and reducer

export const { addPlayerCards, filterPlayersInCart } = searchResultSlice.actions;
export default searchResultSlice.reducer;