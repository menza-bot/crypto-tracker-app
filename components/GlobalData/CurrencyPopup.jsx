import React, { useState } from 'react'
import styles from '../../styles/globalStyles/GlobalSettings.module.css'
import { IoMdClose } from 'react-icons/io'
import { changeCurrency } from '../../store/mainPageSlice'
import { changeCurrencyForDetailsPage } from '../../store/coinDetailsSlice'
import { useSelector } from 'react-redux'
import { IoIosCloseCircle } from 'react-icons/io'
import { IconContext } from 'react-icons/lib'


const CurrencyPopup = ({isActiveBurgerMenu, currentCurrency, listOfCurrencies, themeValue, dispatch}) => {


    const [isActivePopup, setActivePopup] = useState(false)
    const currencySymbolArray = useSelector(state => state.mainPageSlice.listOfSymbols)


    return (
        <>
            <span className = {!isActiveBurgerMenu ? styles.current__currency : null} onClick = {() => setActivePopup(true)}>
                {currentCurrency}
            </span>
            {
                isActivePopup ?
                    <div className = {styles.popup__wrapper}>
                        <div className = {`${themeValue ? styles.popup__dark : styles.popup}`}>
                            <div className={styles.title}>
                                <span className = {styles.title__text}>
                                    Select Currency
                                </span>
                                <i className = {styles.closer} onClick = {() => setActivePopup(false)}>
                                    <IconContext.Provider value={{ color: '#919191', size: '15px', marginTop: '2px' }}>
                                        <IoIosCloseCircle />
                                    </IconContext.Provider>
                                </i>
                            </div>
                            <ul className = {styles.currencies__list}>
                                <title>Popular Currencies</title>
                                {Object.entries(listOfCurrencies)
                                    .map(([item, key]) => 
                                        <li className = {`${styles.currencies__list__item} ${themeValue ? styles.currencies__list__item__dark : styles.currencies__list__item} ${key === currentCurrency && styles.active}`} onClick = {() => {dispatch(changeCurrency(key)), dispatch(changeCurrencyForDetailsPage(key)), setActivePopup(!isActivePopup)}}>
                                            <div>{item}</div>
                                            <div>({key} - {})</div>
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div> : null
            }
        </>
    )
}


export default CurrencyPopup
