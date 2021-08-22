import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { fetchChartData, fetchCoinDetails, setCurrentDaysAmount } from '../../store/coinDetailsSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styles from '../../styles/coinPageStyles/CoinPage.module.css'
import { MemoSwapAndStats } from './SwapAndStats'
import { MemoChartData } from './ChartData'
import CoinData from './CoinData'



const CoinPage = ({themeValue}) => {


    const dispatch = useDispatch()
    const router = useRouter()
    const state = useSelector(state => state.coinDetailsSlice)
    const [activeButton, setActiveButton] = useState('1D')


    const switchDayAmount = (dayAmount, key) => {
        dispatch(setCurrentDaysAmount(dayAmount))
        setActiveButton(key)
    }


    useEffect(() => {
        dispatch(fetchCoinDetails(router.query.id))
        dispatch(fetchChartData({id: router.query.id, vs_currency: state.currentCurrency.toLowerCase(), days_amount: state.currentDaysAmount}))
    }, [router.query.id, state.currentCurrency])


    useEffect(() => {
        dispatch(fetchChartData({id: router.query.id, vs_currency: state.currentCurrency.toLowerCase(), days_amount: state.currentDaysAmount}))
    }, [state.currentDaysAmount])


    return (
        <div className = {styles.wrapper}>   
                <div>
                    <div className = {styles.wrapper__coin}>
                        <CoinData 
                            state = {state} 
                            themeValue = {themeValue}
                        />                
                    </div>
                    <div className = {styles.wrapper__chart__data}>
                        <MemoChartData 
                            chartData = {state.chartData}
                            name = {state.coinMainInf.name}
                            daysAmountData = {state.daysAmountData}
                            switchDayAmount = {switchDayAmount}
                            activeButton = {activeButton}
                            themeValue = {themeValue}
                        />
                        <MemoSwapAndStats 
                            currentPriceSelected = {state.marketData.currentPriceSelected}
                            currentCurrency = {state.currentCurrency}
                            img = {state.img}
                            name = {state.coinMainInf.name}
                            themeValue = {themeValue}
                        />
                    </div>
                </div>
        </div>
    )
}


export default CoinPage 
