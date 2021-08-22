import React from 'react'
import styles from '../../styles/globalStyles/GlobalSettings.module.css'
import { FiMoon } from 'react-icons/fi'
import CurrencyPopup from './CurrencyPopup'
import { IconContext } from 'react-icons/lib'


const GlobalSettings = ({currentCurrency, listOfCurrencies, themeSwitcher, themeValue, dispatch}) => {


    return (
        <div className = {styles.settings}>
            <CurrencyPopup
                currentCurrency = {currentCurrency}
                listOfCurrencies = {listOfCurrencies}
                themeValue = {themeValue}
                dispatch = {dispatch} />
            <IconContext.Provider value = {{size: '15px', className: `${styles.dark__theme__icon}`}} >
                <span onClick = {themeSwitcher}>
                    <FiMoon />
                </span>
            </IconContext.Provider>
        </div>
    )
}


export default GlobalSettings
