import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from './components/SearchResults/searchResultsSlice';

export default configureStore({
    reducer: {
        searchResults: searchResultsReducer,
    }
})