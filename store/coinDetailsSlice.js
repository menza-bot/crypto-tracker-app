import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataAPI from "../fetchAPI/fetchData";



const formatData = (data) => {


    const unixFormatDate = (unixTimeStamp, days_amount) => {
        if (days_amount === 1) {
            let date = new Date(Math.floor(unixTimeStamp / 1000) * 1000)
            let hours = date.getHours()
            let minutes = "0" + date.getMinutes()
            let formattedDate = hours + ':' + minutes.substr(-2)
            return formattedDate
        }
        else {
            let date = new Date(Math.floor(unixTimeStamp / 1000) * 1000)
            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            let day = date.getDate()
            let month = months[date.getMonth()]
            let formattedDate = day + ' ' + month
            return formattedDate
        }
    }

    return data.map((item) => {
        return {
            name: unixFormatDate(item[0]),
            uv: item[1]
        }
    })
}



export const fetchCoinDetails = createAsyncThunk(
    'coinDetailsSlice/fetchCoinDetails',
    async (id) => {
        const response = await dataAPI.getCoinDetails(id)
        return response.data
    }
)


export const fetchChartData = createAsyncThunk(
    'coinDetailsSlice/fetchChartData', 
    async ({id, vs_currency, days_amount}) => {
        const response = await dataAPI.getChartData(id, vs_currency, days_amount)
        return response.data.prices
    }
)


const coinDetailsSlice = createSlice({
    name: 'coinDetailsSlice',
    initialState: {
        currentDaysAmount: 1,
        currentCurrency: 'USD',
        currentCurrencySymbol: '$',
        daysAmountData: {
            '1D': 1,
            '7D': 7,
            '14D': 14,
            '30D': 30
        },
        chartData: null,
        coinMainInf: {
            name: null,
            symbol: null,
            rank: null,
        },
        img: null,
        description: null,
        links: {
            homepage: null,
            blockchain: null,
            forum: null,
            subreddit: null
        },
        coinGeckoRank: null,
        marketData: {
            currentPrice: {usd: null, eur: null, gbp: null, rub: null},
            marketCap: {usd: null, eur: null, gbp: null, rub: null},
            totalVolume: {usd: null, eur: null, gbp: null, rub: null},
            currentPriceSelected: null,
            coinInformation: [
                {
                    title: 'Market Cap',
                    value: null
                }, {
                    title: 'Total Volume',
                    value: null
                }, {
                    title: 'Circulating Supply',
                    value: null
                }
            ], 
            priceChangePercentage24h: 0,
            marketCapChangePercentage24h: null
        }
    },
    reducers: {
        setCurrentDaysAmount: (state, {payload}) => {
            state.currentDaysAmount = payload
        },
        changeCurrencyForDetailsPage: (state, {payload}) => {
            state.currentCurrency = payload
            console.log(payload)
        }
    },
    extraReducers: {
        [fetchCoinDetails.fulfilled]: (state, {payload}) => {
            state.coinMainInf.name = payload.name
            state.coinMainInf.symbol = payload.symbol,
            state.coinMainInf.rank = 'Rank #' + payload.market_cap_rank
            state.description = payload.description.en,
            state.links.homepage = payload.links.homepage[0]
            state.links.blockchain = payload.links.blockchain_site[0]
            state.links.forum = payload.links.official_forum_url[0]
            state.links.subreddit = payload.links.subreddit_url
            state.img = payload.image.large
            state.coinGeckoRank = payload.coingecko_rank
            state.marketData.currentPrice = payload.market_data.current_price
            state.marketData.marketCap = payload.market_data.market_cap
            state.marketData.totalVolume = payload.market_data.total_volume
            state.marketData.priceChangePercentage24h = payload.market_data.price_change_percentage_24h
            state.marketData.marketCapChangePercentage24h = payload.market_data.market_cap_change_percentage_24h
            state.marketData.coinInformation[2].value = payload.market_data.circulating_supply
            switch (state.currentCurrency) {
                case 'USD': 
                    state.currentCurrencySymbol = '$'
                    state.marketData.currentPriceSelected = state.marketData.currentPrice.usd
                    state.marketData.coinInformation[0].value = state.marketData.marketCap.usd
                    state.marketData.coinInformation[1].value = state.marketData.totalVolume.usd 
                    break
                case 'EUR':
                    state.currentCurrencySymbol = '€'
                    state.marketData.currentPriceSelected = state.marketData.currentPrice.eur
                    state.marketData.coinInformation[0].value = state.marketData.marketCap.eur
                    state.marketData.coinInformation[1].value = state.marketData.totalVolume.eur
                    break
                case 'GBP':
                    state.currentCurrencySymbol = '£'
                    state.marketData.currentPriceSelected = state.marketData.currentPrice.gbp
                    state.marketData.coinInformation[0].value = state.marketData.marketCap.gbp
                    state.marketData.coinInformation[1].value = state.marketData.totalVolume.gbp
                    break
                case 'RUB':
                    state.currentCurrencySymbol = '₽'
                    state.marketData.currentPriceSelected = state.marketData.currentPrice.rub
                    state.marketData.coinInformation[0].value = state.marketData.marketCap.rub
                    state.marketData.coinInformation[1].value = state.marketData.totalVolume.rub
                    break
            }
        },
        [fetchChartData.fulfilled]: (state, {payload}) => {
            state.chartData = formatData(payload)
        },
    }
})


export const {setCurrentDaysAmount, changeCurrencyForDetailsPage} = coinDetailsSlice.actions


export default coinDetailsSlice.reducer