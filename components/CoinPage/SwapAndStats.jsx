import React from 'react'
import styles from '../../styles/coinPageStyles/SwapAndStats.module.css'
import { useState } from 'react'
import SelectedIconCurrency from './SelectedIconCurrency'



const SwapAndStats = ({ img, name, currentPriceSelected, currentCurrency, themeValue }) => {


    const [cryptoValue, setCryptoValue] = useState(null)
    const [fiatValue, setFiatValue] = useState(null)


    const onChangeNumber = (event) => {
        const newValue = event.target.value * currentPriceSelected
        setCryptoValue(event.target.value)
        setFiatValue(newValue)
    }


    return (
        <div className = {styles.wrapper__swap}>
            <div className = {styles.swap}>
                <div className = {`${themeValue ? styles.crypto__tile__dark : styles.crypto__tile}`}>
                    <img src = {img} alt = 'img' width = '30px' height = '30px' className = {styles.img} />
                    <span className = {styles.crypto__name}>{name}</span>
                    <input onChange = {onChangeNumber} value = {cryptoValue} type = 'number' pattern="\d*" className = {`${styles.crypto__input} ${themeValue && styles.crypto__input__dark}`}/>
                </div>
                <div className = {`${themeValue ? styles.fiat__tile__dark : styles.fiat__tile}`}>
                    <SelectedIconCurrency currentCurrency = {currentCurrency} />
                    <span className = {styles.fiat__name}>{currentCurrency}</span>
                    <input value = {fiatValue} type = 'text' pattern="\d*" className = {`${styles.fiat__input} ${themeValue && styles.fiat__input__dark}`}/>
                </div>
            </div>
        </div>
    )
}


export const MemoSwapAndStats = React.memo(SwapAndStats)
