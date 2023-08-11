import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchResultsReducer from './components/SearchResults/searchResultsSlice';
import cartSliceReducer from './components/Cart/CartSlice';
import playerFiltersReducer from './components/Filters/FiltersSlice';

export default configureStore({
    reducer: {
        searchResults: searchResultsReducer,
        cart: cartSliceReducer,
        playerFilters: playerFiltersReducer,
    }
})

const rootReducer = combineReducers({
    searchResults: searchResultsReducer,
    cart: cartSliceReducer,
    playerFilters: playerFiltersReducer,
})

export const setupStore = preloadedState => {
    return configureStore({
        reducer: rootReducer, 
        preloadedState
    })
}