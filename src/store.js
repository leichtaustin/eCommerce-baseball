import { configureStore } from '@reduxjs/toolkit';
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