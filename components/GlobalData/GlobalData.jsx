import React from 'react'
import GlobalSettings from './GlobalSettings'
import GlobalStats from './GlobalStats'
import styles from '../../styles/globalStyles/GlobalData.module.css'
import { useDispatch, useSelector } from 'react-redux'


const GlobalData = ({themeValue, themeSwitcher}) => {


    const generalStats = useSelector((state) => state.mainPageSlice.generalStats)
    const currentCurrency = useSelector((state) => state.mainPageSlice.currentCurrency)
    const listOfCurrencies = useSelector((state) => state.mainPageSlice.listOfCurrencies)
    const dispatch = useDispatch()


    return (
        <div className = {`${themeValue ? styles.general__dark : styles.general}`}>
            <div className = {styles.content}>
                <GlobalStats 
                    generalStats = {generalStats}
                    dispatch = {dispatch}
                /> 
                <GlobalSettings 
                    currentCurrency = {currentCurrency}
                    listOfCurrencies = {listOfCurrencies}
                    themeSwitcher = {themeSwitcher}
                    themeValue = {themeValue}
                    dispatch = {dispatch}
                />
            </div>
        </div>
    )
}


export default GlobalData
