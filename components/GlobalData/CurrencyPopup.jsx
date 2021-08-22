import React, { useState } from 'react'
import styles from '../../styles/globalStyles/GlobalSettings.module.css'
import { IoMdClose } from 'react-icons/io'
import { changeCurrency } from '../../store/mainPageSlice'
import { changeCurrencyForDetailsPage } from '../../store/coinDetailsSlice'



const CurrencyPopup = ({isActiveBurgerMenu, currentCurrency, listOfCurrencies, themeValue, dispatch}) => {


    const [isActivePopup, setActivePopup] = useState(false)


    return (
        <>
            <span className = {!isActiveBurgerMenu ? styles.current__currency : null} onClick = {() => setActivePopup(true)}>
                {currentCurrency}
            </span>
            {
                isActivePopup ?
                    <div className = {styles.popup__wrapper}>
                        <div className = {`${themeValue ? styles.popup__dark : styles.popup}`}>
                            <span className = {styles.title}>
                                Select Currency
                            </span>
                            <i className = {styles.closer} onClick = {() => setActivePopup(false)}>
                                    <IoMdClose size = '25px' color = 'gray'/>
                            </i>
                            <ul className = {styles.currencies__list}>
                                {Object.entries(listOfCurrencies)
                                    .map(([item, key]) => 
                                        <li className = {`${styles.currencies__list__item} ${themeValue ? styles.currencies__list__item__dark : styles.currencies__list__item} ${key === currentCurrency && styles.active}`} onClick = {() => {dispatch(changeCurrency(key)), dispatch(changeCurrencyForDetailsPage(key)), setActivePopup(!isActivePopup)}}>
                                            {item}
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
