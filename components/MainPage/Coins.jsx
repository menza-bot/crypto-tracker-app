import React, { useEffect } from 'react'
import styles from '../../styles/mainPageStyles/Coins.module.css'
import { fetchCoins } from '../../store/mainPageSlice'
import { AiOutlineStar } from 'react-icons/ai'
import { IoMdBookmark } from 'react-icons/io'
import Link from 'next/link'


const Coins = ({ coins, currentCurrency, currentCurrencySymbol, currentPage, pageSize, showingStats, generalStats, rowStyle, tileStyle, themeValue, dispatch }) => {


    useEffect(() => {
        dispatch(fetchCoins({  
            currentPage: currentPage, 
            pageSize: pageSize, 
            currentCurrency: currentCurrency
        }))
    }, [currentPage, pageSize, currentCurrency])


    return (
        <div className={styles.wrapper}>
            <div className = {styles.showingStats}>
                {
                    showingStats ? 
                            (
                                Object.entries(generalStats).map(
                                    ([key, value]) => [
                                        <span className = {styles.globalstats__item}>
                                            {key}:  <span>
                                                        {value.toLocaleString()}
                                                    </span>
                                        </span>
                                    ]
                                )
                            ) : (null)
                }
            </div>
            <div className = {`${rowStyle ? styles.header__container : styles.header__disable}`}>
                <ul className = {`${themeValue ? styles.header__dark : styles.header}`}>
                            <li className = {`${styles.header__check__mark}`}><IoMdBookmark /></li>
                            <li className = {`${styles.header__number} ${styles.item}`}>#</li>
                            <li className = {`${styles.header__name} ${styles.item}`}>Name</li>
                            <li className = {`${styles.header__price} ${styles.item}`}>Price</li>
                            <li className = {`${styles.header__percent} ${styles.item}`}>24h %</li>
                            <li className = {`${styles.header__volume} ${styles.item}`}>Volume</li>
                            <li className = {`${styles.header__market__cap} ${styles.item}`}>Market Cap</li>
                </ul>
            </div>
            <div className = {`${rowStyle ? styles.coins__container__rows : styles.coins__container__tiles}`}>
                { 
                    coins.length && rowStyle ? coins.map((item, index) => 
                                <div className={`${themeValue ? styles.row__wrapper__dark : styles.row__wrapper}`} key = {index}>
                                    <div className={themeValue ? styles.row__dark : styles.row}>
                                        <p className = {styles.icon}><AiOutlineStar color = 'gray' /></p>
                                        <p className = {styles.index}>{item.market_cap_rank ? item.market_cap_rank : '-'}</p>
                                        <Link href = {`/coin/${encodeURIComponent(item.id)}`}>
                                            <a>
                                                <div className = {styles.name}>
                                                    <span className={styles.img__wrapper}><img src={item.image} alt={item.name} className={styles.img} /></span>
                                                    <span className={styles.title}>{item.name ? item.name : '-'}</span>
                                                    <span className={`${styles.symbol__adaptive} ${themeValue ? styles.symbol__dark : styles.symbol}`}>{item.symbol ? item.symbol.toUpperCase() : '-'}</span>
                                                </div>
                                            </a>
                                        </Link>
                                        <p className={styles.price}> {currentCurrencySymbol} {item.current_price ? item.current_price.toLocaleString(undefined, {minimumFractionDigits: 2}) : '-'}</p>
                                        <p className={`${item.price_change_percentage_24h >= 0 ? styles.percent__increase : styles.percent__decrease}`}>{item.price_change_percentage_24h ? item.price_change_percentage_24h.toFixed(2) : '-'}%</p>
                                        <p className={styles.volume}> {currentCurrencySymbol} {item.total_volume ? item.total_volume.toLocaleString() : '-'}</p>
                                        <p className={`${styles.market__cap} ${styles.market__cap__adaptive}`}> {currentCurrencySymbol} {item.market_cap ? item.market_cap.toLocaleString() : '-'}</p>
                                    </div>
                                </div>
                    ) : null
                }
                {
                    coins.length && tileStyle ? coins.map((item, index) => 
            
                            <Link href = {`/coin/${encodeURIComponent(item.id)}`}>
                                <a className={`${themeValue ? styles.tile__dark : styles.tile}`} key = {index}>
                                    <p className={styles.img__wrapper}><img src={item.image} alt={item.name} className={styles.img__tile} /></p>
                                    <p className = {styles.name__tile}>{item.name}</p>
                                    <p className={styles.price__tile}> {currentCurrencySymbol} {item.current_price ? item.current_price.toLocaleString(undefined, {minimumFractionDigits: 2}) : '-'}</p>
                                    <p className={`${item.price_change_percentage_24h >= 0 ? styles.percent__increase__tile : styles.percent__decrease__tile}`}>{item.price_change_percentage_24h ? item.price_change_percentage_24h.toFixed(2) : '-'}%</p>
                                </a>
                            </Link>
                        ) : null
                }
            </div>
        </div>   
    )
}


export const MemoCoins = React.memo(Coins) 