import React from 'react'
import styles from '../../styles/coinPageStyles/CoinData.module.css'




const CoinData = ({state, themeValue}) => {


    return (
        <div>
            {
                state.marketData.currentPriceSelected ? 
                    <div className = {styles.coin__text__data}>
                        <div className = {styles.coin__main__inf}>
                            <img src={state.img} alt='img' className = {styles.img}/>
                            <span className = {styles.name}>
                                {state.coinMainInf.name}
                            </span>
                            <span className = {`${themeValue ? styles.symbol__dark : styles.symbol}`}>
                                {state.coinMainInf.symbol.toUpperCase()}
                            </span>
                            <span className = {`${themeValue ? styles.rank__dark : styles.rank}`}>
                                {state.coinMainInf.rank}
                            </span>
                        </div>
                        <div className = {styles.coin__marketcap__inf}>
                            <div className = {styles.price}>
                                <p className = {styles.price__title}>     
                                    {state.coinMainInf.name} price is:
                                </p>
                                <span className = {styles.current__price}>{state.currentCurrencySymbol} {state.marketData.currentPriceSelected.toLocaleString()}</span>
                                <span className = {`${state.marketData.priceChangePercentage24h >= 0 ? styles.price__increase : styles.price__decrease}`}>{state.marketData.priceChangePercentage24h.toFixed(2)}%</span>
                            </div>
                            <div className = {styles.market__cap__data}>
                                {
                                    state.marketData.coinInformation[0].value ? 
                                        state.marketData.coinInformation.map(item => 
                                            <span className = {`${styles.market__cap__data__item}`}>
                                                <p className = {styles.informer}>{item.title}</p>
                                                <p className = {styles.informer__value}>{item.value.toLocaleString()}</p>
                                            </span>
                                    ) : <span className = {styles.disclaimer}>Data is not available</span>
                                }
                            </div>  
                        </div>
                        <div className = {styles.coin__links}>   
                            {
                                Object.entries(state.links).map(([key, value]) => <a href = {value} className = {`${themeValue ? styles.link__dark : styles.link}`}>{key}</a>)
                            }
                        </div>
                    </div> : null
            }
        </div>
    )
}


export default CoinData
