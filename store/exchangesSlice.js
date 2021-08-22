import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataAPI from "../fetchAPI/fetchData";




export const fetchExchanges = createAsyncThunk(
    'exchangesSlice/fetchExchanges',
    async (rowAmount) => {
        const response = await dataAPI.getExchanges(rowAmount)
        return response.data
    }
)




const exchangesSlice = createSlice({
    name: 'exchangesSlice',
    initialState: {
        exchanges: [],
        rowAmount: 50
    },
    extraReducers: {
        [fetchExchanges.fulfilled]: (state, {payload}) => {
            state.exchanges = payload
        }
    }
})



export default exchangesSlice.reducer



