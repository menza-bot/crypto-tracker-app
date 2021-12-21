import reducer, { pageSwitchReducer, pageSizeSwitch, changeCurrency, setRowStyle, setTileStyle, showStats } from "../mainPageSlice"



describe('reducers and extraReducers testing', () => {

    const fakeState = {
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
    }

    test('should handle current pagination page', () => {

        const fakeState = {
            currentPage: 1
        }

        expect(reducer(fakeState, pageSwitchReducer(2))).toEqual(
            {
                currentPage: 2
            }
        )
    })

    test('duplicate', () => {

        const fakeState = {
            currentPage: 1
        }

        expect(reducer(fakeState, pageSwitchReducer(3))).toEqual(
            {
                currentPage: 3
            }
        )
    })

    test('should handle current currency', () => {
        expect(reducer(fakeState, changeCurrencyForDetailsPage('EUR'))).toEqual(
            {
                currentDaysAmount: 1,
                currentCurrency: 'EUR'
            }
        )
    }) 

})