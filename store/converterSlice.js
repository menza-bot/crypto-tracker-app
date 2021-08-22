import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataAPI from "../fetchAPI/fetchData";



export const fetchCurrentPrice = createAsyncThunk(
    'converterSlice/fetchCurrentPrice',
    async ({id, vsCurrency}) => {
        const response = await dataAPI.getCurrentPrice(id, vsCurrency)
        for (let name in response.data) {
            let value = response.data[name]
            for (let name in value) {
                let currentRate = value[name]
                return currentRate
            }
        }
    }
)



const converterSlice = createSlice({
    name: 'converterSlice',
    initialState: {
        selectorDataFrom: [
            {value: 'bitcoin', label: 'Bitcoin (BTC)'}, 
            {value: 'ethereum', label: 'Ethereum (ETH)'}, 
            {value: 'tether', label: 'Tether (USDT)'}, 
            {value: 'binancecoin', label: 'Binance Coin (BNB)'}
        ],
        selectorDataTo: [
            {value: 'usd', label: 'US Dollar (USD)'}, 
            {value: 'eur', label: 'Euro (EUR)'}, 
            {value: 'rub', label: 'Russian Ruble (RUB)'}, 
            {value: 'gbp', label: 'British Pound (GBP)'}
        ],
        cryptoInf: [
            {
                title: `Latest BTC to USD Rates`,
                text: `It's a match made in heaven: the world's biggest cryptocurrency and the world's largest fiat currency. BTC/USD is a major trading pair — and right here, you'll find up-to-the-minute information on the latest conversion rates.
                Ever since Bitcoin launched in 2009, its value has often been conveyed in U.S. dollars. Comparing prices across exchanges helps guarantee you'll get the best deal, as some platforms offer a better deal than others.
                Cryptocurrency adoption in the U.S. continues to rise — and in 2019, the number of people who owned digital assets doubled. With a population of 328.2 million, America is a massive and largely untapped market.`
            },
            {
                title: `BTC vs USD`,
                text: `There's a constant buzz about how Bitcoin is performing against the U.S. dollar. Traders anxiously watch the pair's every move — and fluctuations regularly hit the headlines. CoinMarketCap is the place people go to to find accurate BTC/USD rates, and we're here 24/7.
                Over the years, we've gained a reputation for continually monitoring thousands of markets. News websites and exchanges don't always have the latest conversions, but our easy-to-use tool is automatically updated on a regular basis.
                Don't forget that we have plenty of other metrics that can show you whether the BTC market is in a healthy state. You can easily assess the market cap of the world's biggest cryptocurrency — and at the top of every page we deliver an insight into Bitcoin's dominance.
                This tool is fully customizable, meaning that you can type in any dollar amount and get an immediate conversion into BTC, and vice versa. Using the dropdown menu, you can also explore rates for other crypto and fiat pairings.
                Bitcoin is renowned for its volatility — and in the past, it's gained and lost hundreds of dollars in a matter of minutes. Thanks to our straightforward tool, you'll never be out of the loop.`
            },
            {
                title: `Do You Need To Convert BTC to USD Today?`,
                text: `Are you hoping to sell some crypto today — or are you interested in buying some Bitcoin for the first time?
                Cryptocurrencies (rather unfairly) have gained a reputation for being complicated, but the industry has made great progress in demystifying digital assets once and for all.
                Many exchanges offer clean user interfaces that can be compared to those used by top e-commerce websites and banks.
                But if you want a comprehensive guide on how to buy Bitcoin, and a full explanation of how conversions work, CoinMarketCap is here to save the day.`
            }
        ],
        inputNumber: null,
        inputValueFrom: null,
        inputValueTo: null,
        currentPrice: 0,
        outputNumber: null
    },
    reducers: {
        setInputValueFrom(state, {payload}) {
            state.inputValueFrom = payload
        },
        setInputValueTo(state, {payload}) {
            state.inputValueTo = payload
        },
        setInputNumber(state, {payload}) {
            state.inputNumber = payload
        },
        setOutputNumber(state) {
            if (state.inputNumber && state.currentPrice) {
                state.outputNumber = state.inputNumber * state.currentPrice
            }
            else {
                console.log('Please input something...')
            }
        }
    },
    extraReducers: {
        [fetchCurrentPrice.fulfilled]: (state, {payload}) => {
            state.currentPrice = payload
            if (state.inputNumber && state.currentPrice) {
                state.outputNumber = state.inputNumber * state.currentPrice
            }
            else {
                console.log('Please input something...')
            }
        }
    }
})


export const {setInputValueFrom, setInputValueTo, setInputNumber, setOutputNumber} = converterSlice.actions


export default converterSlice.reducer


