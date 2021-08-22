import React from 'react'
import TrendingCoins from './TrendingCoins'
import TrendingEvents from './TrendingEvents'
import styles from '../../styles/trendingPageStyles/TrendingContent.module.css'


const TrendingContent = ({themeValue}) => {
    return (
        <div className = {styles.wrapper}>
            <TrendingCoins themeValue = {themeValue}/>
            <TrendingEvents themeValue = {themeValue}/>
        </div>
    )
}


export default TrendingContent
