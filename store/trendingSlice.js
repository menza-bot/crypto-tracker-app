import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataAPI from "../fetchAPI/fetchData";





export const fetchTrendingCoins = createAsyncThunk(
    'trendingSlice/fetchTrendingCoins',
    async () => {
        const response = await dataAPI.getTrendingCoins()
        return response.data.coins
    }
)


export const fetchTrendingEvents = createAsyncThunk(
    'trendingSlice/fetchTrendingEvents',
    async () => {
        const response = await dataAPI.getTrendingEvents()
        return response.data.data
    }
)


const trendingSlice = createSlice({
    name: 'trendingSlice',
    initialState: {
        trendingCoins: [],
        trendingEvents: []
    },
    extraReducers: {
        [fetchTrendingCoins.fulfilled]: (state, {payload}) => {
            state.trendingCoins = payload
        },
        [fetchTrendingEvents.fulfilled]: (state, {payload}) => {
            state.trendingEvents = payload
        }
    }
})


export default trendingSlice.reducer