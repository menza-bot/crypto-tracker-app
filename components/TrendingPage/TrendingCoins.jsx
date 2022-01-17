import React from 'react'
import styles from '../../styles/trendingPageStyles/TrendingCoins.module.css'
import { ImFire } from 'react-icons/im'
import { useSelector } from 'react-redux'
import { SkeletonElement } from '../../skeletonLoading/skeletons/SkeletonElement'


const TrendingCoins = ({themeValue}) => {


    const trendingCoins = useSelector(state => state.trendingSlice.trendingCoins)
    

    return (
        <div className = {styles.wrapper}>
            <div className = {`${themeValue ? styles.content__dark : styles.content}`}>
                        <div className = {styles.title__wrapper}>
                            <i className = {styles.title__icon}><ImFire /></i>
                            <div className = {styles.title}>Top-7 Cryptocurrencies</div>
                        </div>
                        <hr className = {`${themeValue ? styles.hr__dark : styles.hr}`} />
                        <div className = {styles.coins}>
                            <div className = {styles.coins__header}>
                                <span className = {styles.coins__header__score}>
                                    #
                                </span>
                                <span className = {styles.coins__header__name}>
                                    Name
                                </span>
                                <span className = {styles.coins__header__rank}>
                                    Rank
                                </span>
                            </div>
                            {
                                trendingCoins ? 
                                    trendingCoins.map(item =>
                                    <div className = {styles.coin}>
                                        <span className = {styles.score}>
                                            {item.item.score + 1}
                                        </span>
                                        <span className = {styles.name}>
                                            <img src={item.item.thumb} alt="logo" className = {styles.img} width = '17px' height = '17px'/>
                                            <span className = {styles.name__text}>{item.item.name}</span>
                                        </span>
                                        <span className = {styles.rank}>
                                            {item.item.market_cap_rank}
                                        </span>
                                    </div>) : ([1, 2, 3, 4, 5, 6, 7].map((item, key) => <SkeletonElement themeValue = {themeValue} key = {key} type='trending__coin' />))
                            }
                        </div>
            </div>
        </div>
    )
}


export default TrendingCoins
