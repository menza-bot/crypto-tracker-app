import React from 'react'
import { MemoCoins } from './Coins'
import styles from '../../styles/mainPageStyles/MainPage.module.css'
import { MemoFiltersBar } from './FiltersBar'
import { MemoPagination } from './Pagination'
import { useDispatch, useSelector } from 'react-redux'



const MainPage = ({themeValue}) => {


    const state = useSelector(state => state.mainPageSlice)
    const currentCurrencyForDetailsPage = useSelector(state => state.coinDetailsSlice.currentCurrency)
    const dispatch = useDispatch()


    const MainPageTitle = ({marketCap}) => {
        return (
            <div>
                {
                    marketCap ? 
                    <div className = {styles.title__wrapper}>
                        <div className = {styles.title}>Today's Cryptocurrency Prices by Crypto App.</div>
                        <p className = {styles.title__paragraph}>The global crypto market cap is <strong className = {marketCap}>{Math.floor(marketCap).toLocaleString()}</strong>.</p>
                    </div> : null
                }
            </div>
        )
    }


    const MemoMainPageTitle = React.memo(MainPageTitle)


    return (
        <div className={styles.content__wrapper}>
                <div className = {styles.content}>
                    <MemoMainPageTitle 
                        marketCap = {state.generalStats['Market cap']}
                    /> 
                    <MemoFiltersBar 
                        themeValue = {themeValue}
                        pageSize = {state.pageSize}
                        currentCurrency = {state.currentCurrency}
                        listOfCurrencies = {state.listOfCurrencies}
                        currentCurrencyForDetailsPage = {currentCurrencyForDetailsPage}
                        rowAmounts = {state.rowAmounts}
                        rowStyle = {state.rowStyle}
                        tileStyle = {state.tileStyle}
                        dispatch = {dispatch}
                    />
                    <MemoCoins 
                        coins = {state.coinsInPage}
                        currentPage = {state.currentPage} 
                        pageSize = {state.pageSize} 
                        currentCurrency = {state.currentCurrency}
                        currentCurrencySymbol = {state.currentCurrencySymbol}
                        showingStats = {state.showingStats}
                        generalStats = {state.generalStats}
                        rowStyle = {state.rowStyle}
                        tileStyle = {state.tileStyle}
                        themeValue = {themeValue}
                        dispatch = {dispatch}
                    />
                    <MemoPagination 
                        coins = {state.coinsInPage}
                        coinsQuantity = {state.coinsQuantity}
                        currentPage = {state.currentPage}
                        pageSize = {state.pageSize}
                        portionSize = {state.portionSize}
                        dispatch = {dispatch}
                    /> 
                </div>
        </div>
    )
}



export default MainPage