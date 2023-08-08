import { createSlice} from '@reduxjs/toolkit';
import { selectCart } from '../Cart/CartSlice';

export const searchResultSlice = createSlice({
    name: 'searchResults',
    initialState: {
        originalArray: [],
        filteredArray: [],
    },
    reducers: {
        addPlayerCards: (state, action) => {
            return {
                ...state,
                originalArray: [...state.originalArray, {
                    ...action.payload, 
                    isInCart: false
                }],
                filteredArray: [...state.filteredArray, {
                    ...action.payload,
                    isInCart: false
                }]
            } 
        },
        filterPlayersInCart: (state, action) => {
            return {
                ...state,
                filteredArray: state.filteredArray.filter(player => player.playerId !== action.payload.playerId),
            }  
        },
        addPlayerFromCart: (state, action) => {
            return {
                ...state,
                filteredArray: [...state.filteredArray, {
                    ...action.payload,
                    isInCart: false
                }]
            }
        },
        filterPlayersByPosition: (state, action) => {
            return {
                ...state,
                filteredArray: state.filteredArray.filter(player => player.position !== action.payload),
            } 
        },
        resetFilteredPlayers: (state, action) => {
            return {
                ...state,
                filteredArray: state.originalArray,
            }
        }, 
    }
})

//selectors

export const selectSearchResults = (state) => state.searchResults.originalArray;
export const selectFilteredResults = (state) => state.searchResults.filteredArray;

// export const selectFilteredPlayers = (state) => {
//     const allPlayers = selectSearchResults(state);
//     const cartPlayers = selectCart(state);

//     return allPlayers.filter((player) => 
//         (!(cartPlayers.includes(player.playerId)))   
//     )
// }

//export actions and reducer

export const { 
    addPlayerCards, 
    filterPlayersInCart, 
    filterPlayersByPosition, 
    resetFilteredPlayers,
    addPlayerFromCart, 
} = searchResultSlice.actions;
export default searchResultSlice.reducer;