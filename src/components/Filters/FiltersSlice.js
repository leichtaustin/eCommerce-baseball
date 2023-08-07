import { createSlice } from "@reduxjs/toolkit";

export const playerFiltersSlice = createSlice({
    name: 'playerFilters',
    initialState: {

    },
    reducers: {
        updateFilter: (state, action) => {
            return {
                ...state,
                OF: action.payload.OF,
                SP: action.payload.SP,
                SS: action.payload.SS,
                RP: action.payload.RP,
                FB: action.payload.FB,
                SB: action.payload.SB,
                TB: action.payload.TB,
                C: action.payload.C,
            }
        }

    }
})

export const selectPlayerFilters = (state) => state.playerFilters;

export const { updateFilter } = playerFiltersSlice.actions;

export default playerFiltersSlice.reducer;