import React from 'react'
import TrendingContent from './TrendingContent'
import styles from '../../styles/trendingPageStyles/TrendingPage.module.css'



const TrendingPage = ({themeValue}) => {


    const TrendingTitle = () => {
        return (
            <div className = {styles.title__wrapper}>
                <div className = {styles.title}>
                    The Best Cryptos Based On The Latest Data
                </div>
                <p className = {styles.title__paragraph}>
                    Our cryptocurrencies to watch lists are based on the latest price and user behavior data.
                </p>
            </div>
        )
    }


    return (
        <div>
            <TrendingTitle />
            <TrendingContent themeValue = {themeValue}/>
        </div>
    )
}


export default TrendingPage
