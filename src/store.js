import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from './components/SearchResults/searchResultsSlice';
import cartSliceReducer from './components/Cart/CartSlice';

export default configureStore({
    reducer: {
        searchResults: searchResultsReducer,
        cart: cartSliceReducer,
    }
})