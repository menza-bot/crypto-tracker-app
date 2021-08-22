import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataAPI from "../fetchAPI/fetchData";






export const fetchCoins = createAsyncThunk(
    'mainPageSlice/fetchCoins',
    async ({currentPage, pageSize, currentCurrency}) => {
        const sortedCurrentCurrency = currentCurrency.toLowerCase()
        const response = await dataAPI.getCoins(currentPage, pageSize, sortedCurrentCurrency)
        return response.data
    }
)


export const fetchGeneralStats = createAsyncThunk(
    'mainPageSlice/fetchGeneralStats',
    async () => {
        const response = await dataAPI.getGeneralStats()
        return response.data.data
    }
)


const initialCurrency = {
    usd: null,
    eur: null,
    gbp: null,
    rub: null
}


const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState: {
        generalStats: {
            'Coins': null,
            '24h Vol:': null,
            'Market cap': null,
            'Markets': null,
            'Dominance (BTC)': null
        },
        totalVolume: initialCurrency,
        totalMarketCap: initialCurrency,
        rowStyle: true,
        tileStyle: false,
        showingStats: false,
        currentCurrency: 'USD',
        currentCurrencySymbol: '$',
        listOfCurrencies: {'United States Dollar': 'USD', 'Euro': 'EUR', 'Pound Sterling': 'GBP', 'Russian Ruble': 'RUB'},
        coinsHeader: ['n', 'Name', 'Price', '%', 'Volume', 'Market Cap'],
        coinsInPage: [],
        pageNumbers: [],
        coinsQuantity: null,
        pageSize: 90,
        rowAmounts: [90, 60, 30],
        portionSize: 5,
        currentPage: 1
    },
    reducers: {
        pageSwitchReducer: (state, {payload}) => {
            state.currentPage = payload
        },
        pageSizeSwitch: (state, {payload}) => {
            state.pageSize = payload
            state.pageSizePopupActive = !state.pageSizePopupActive
        },
        changeCurrency: (state, {payload}) => {
            state.currentCurrency = payload
            switch (state.currentCurrency) {
                case 'USD': 
                    state.currentCurrencySymbol = '$'
                    state.generalStats['24h Vol:'] = state.totalVolume.usd
                    state.generalStats['Market cap'] = state.totalMarketCap.usd
                    break
                case 'EUR': 
                    state.generalStats['24h Vol:'] = state.totalVolume.eur
                    state.generalStats['Market cap'] = state.totalMarketCap.eur
                    state.currentCurrencySymbol = '€'
                    break
                case 'GBP': 
                    state.currentCurrencySymbol = '£'
                    state.generalStats['24h Vol:'] = state.totalVolume.gbp
                    state.generalStats['Market cap'] = state.totalMarketCap.gbp
                    break
                case 'RUB':
                    state.currentCurrencySymbol = '₽'
                    state.generalStats['24h Vol:'] = state.totalVolume.rub
                    state.generalStats['Market cap'] = state.totalMarketCap.rub
                    break
            }
        },
        setRowStyle: (state) => {
            state.rowStyle = !state.rowStyle
            state.tileStyle = !state.tileStyle
        },
        setTileStyle: (state) => {
            state.tileStyle = !state.tileStyle
            state.rowStyle = !state.rowStyle
        },
        showStats: (state) => {
            state.showingStats = !state.showingStats
        }
    },
    extraReducers: {
        [fetchCoins.fulfilled]: (state, {payload}) => {
            state.coinsInPage = payload 
        },
        [fetchGeneralStats.fulfilled]: (state, {payload}) => {
            state.generalStats['Coins'] = payload.active_cryptocurrencies
            state.generalStats['24h Vol:'] = payload.total_volume.usd
            state.generalStats['Market cap'] = payload.total_market_cap.usd
            state.generalStats['Markets'] = payload.markets
            state.generalStats['Dominance (BTC)'] = payload.market_cap_percentage.btc
            state.coinsQuantity = payload.active_cryptocurrencies
            state.totalVolume = payload.total_volume
            state.totalMarketCap = payload.total_market_cap
        }
    }
})



export const { pageSwitchReducer, pageSizeSwitch, changeCurrency, setRowStyle, setTileStyle, showStats } = mainPageSlice.actions



export default mainPageSlice.reducer