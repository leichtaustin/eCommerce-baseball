import { createSlice } from '@reduxjs/toolkit';

export const playerCardSlice = createSlice({
    name: 'playerCard',
    initialState: {
        playerName: '',
        ADP: 0,
        auctionValue: 0,
        playerPosition: ''
    },
    reducers:  {}
})