import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchExchanges } from '../../store/exchangesSlice'
import styles from '../../styles/exchangesPageStyles/Exchanges.module.css'





const Exchanges = ({themeValue}) => {

    
    const exchanges = useSelector(state => state.exchangesSlice.exchanges)
    const rowAmount = useSelector(state => state.exchangesSlice.rowAmount)
    const currentPage = useSelector(state => state.exchangesSlice.currentPage)
    const dispatch = useDispatch() 


    useEffect(() => {
        dispatch(fetchExchanges(currentPage))
    }, [])
    

    return (
        <div className = {styles.wrapper}>
            <div className = {styles.container}>
                <div className = {`${themeValue ? styles.header__dark : styles.header}`}>
                            <span className = {`${styles.header__number} ${styles.item}`}>#</span>
                            <span className = {`${styles.header__name} ${styles.item}`}>Name</span>
                            <span className = {`${styles.header__trust} ${styles.item}`}>Trust score</span>
                            <span className = {`${styles.header__volume} ${styles.item}`}>24h Vol. (BTC)</span>
                            <span className = {`${styles.header__year__established} ${styles.item}`}>Established in</span>
                            <span className = {`${styles.header__country} ${styles.item}`}>Country</span>
                </div>
            </div>
            { 
                exchanges.length ? exchanges.map((item, index) => 
                <div key = {index} className={styles.exchanges__container}>
                    <div className={`${themeValue ? styles.row__dark : styles.row}`}>
                            <p className = {styles.index}>{item.trust_score_rank}</p>
                            <p className = {styles.name}>
                                <span className={styles.img__wrapper}><img src={item.image} alt={item.name} className={styles.img} /></span>
                                <span className={styles.title}>{item.name}</span>
                            </p>
                            <p className={styles.trust__score}>{item.trust_score ? item.trust__score : '-'}</p>
                            <p className={styles.volume}>{item.trade_volume_24h_btc.toFixed(2)}</p>
                            {item.year_established ?  <p className={styles.year__established}>
                                                            {item.year_established}
                                                        </p> : <p className={styles.year__established}>-</p>}
                            {item.country ? <p className={styles.country}>{item.country}</p> : <p className = {styles.country}>-</p>}
                    </div>
                </div>
                ) : null
            }
            <div className = {styles.exchanges__inf}>
                <div className = {styles.show__panel}>
                    {
                        exchanges.length ? <div>Showing {exchanges[0].trust_score_rank} - {exchanges[exchanges.length - 1].trust_score_rank}</div> : null
                    }
                </div>
                <div className = {styles.rows__amount}>
                    Showing rows: {rowAmount}
                </div>
            </div>
        </div>
    )
}



export default Exchanges
