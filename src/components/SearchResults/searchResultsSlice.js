import { createSlice} from '@reduxjs/toolkit';

export const searchResultSlice = createSlice({
    name: 'searchResults',
    initialState: [],
    reducers: {
        addPlayerCards: (state, action) => {
            return [...state, action.payload]
        }
    }
})

//selectors

export const selectSearchResults = (state) => state.searchResults;

//export actions and reducer

export const { addPlayerCards } = searchResultSlice.actions;
export default searchResultSlice.reducer;