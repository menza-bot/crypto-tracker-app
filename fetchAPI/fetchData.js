import axios from "axios"


const instance = axios.create({
    baseURL: `https://api.coingecko.com/api/v3/`
});

const dataAPI = {


    getCoins(currentPage, pageSize, currentCurrency) {
        return instance.get(`coins/markets?vs_currency=${currentCurrency}&order=market_cap_desc&per_page=${pageSize}&page=${currentPage}&sparkline=false`)
    },
    getGeneralStats() {
        return instance.get(`global`)
    },
    getExchanges(rowAmount) {
        return instance.get(`exchanges/?per_page=${rowAmount}&page=1`)
    },
    getCurrentPrice(id, vsCurrency) {
        return instance.get(`simple/price?ids=${id}&vs_currencies=${vsCurrency}`)
    },
    getTrendingCoins() {
        return instance.get(`search/trending`)
    },
    getTrendingEvents() {
        return instance.get(`events?page=1`)
    },
    getCoinDetails(id) {
        return instance.get(`coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`)
    },
    getChartData(id, vs_currency, days_amount) {
        return instance.get(`/coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days_amount}`)
    } 
    
}


export default dataAPI


