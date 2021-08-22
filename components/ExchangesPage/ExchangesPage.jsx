import React from 'react'
import Exchanges from './Exchanges'
import styles from '../../styles/exchangesPageStyles/ExchangesPage.module.css'




const ExchangesPage = ({themeValue}) => {


    const ExchangesTitle = () => {
        return (
            <div className = {styles.title__wrapper}>
                <div className = {styles.title}>
                    Top Cryptocurrency Spot Exchanges
                </div>
                <p className = {styles.title__paragraph}>
                    Ranks and scores exchanges based on traffic, liquidity, trading volumes
                </p>
            </div>
        )
    }


    return (
        <div>
            <ExchangesTitle />
            <Exchanges themeValue = {themeValue} />
        </div>
    )
}


export default ExchangesPage
