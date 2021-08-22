import React, { useState } from 'react'
import styles from '../../styles/mainPageStyles/FiltersBar.module.css'
import { pageSizeSwitch, changeCurrency, setTileStyle, setRowStyle, showStats } from '../../store/mainPageSlice'
import { changeCurrencyForDetailsPage } from '../../store/coinDetailsSlice'
import Toggle from './Toggle'


export const FiltersBar = ({ pageSize, dispatch, currentCurrency, listOfCurrencies, rowAmounts, rowStyle, tileStyle, themeValue }) => {


    const [isActivePageSizePopup, setActivePageSizePopup] = useState(false)
    const [isActiveCurrencyPopup, setActiveCurrencyPopup] = useState(false)


    return (
        <div className = {styles.bar}>
            <div className = {styles.first__slice}>
                <span className = {`${styles.item} ${styles.show__rows} ${themeValue && styles.item__darktheme}`} onClick = {() => setActivePageSizePopup(!isActivePageSizePopup)}>Show rows: {pageSize}</span>
                {
                    isActivePageSizePopup ? 
                        <div className = {`${themeValue ? styles.popup__dark : styles.popup} ${styles.pagesize__popup}`}> 
                            {
                                rowAmounts.map(item => <div className = {styles.popup__item} onClick = {() => {dispatch(pageSizeSwitch(item)), setActivePageSizePopup(!isActivePageSizePopup)}}>{item}</div>)
                            }
                        </div> : null
                }   
                <span className = {`${styles.item} ${styles.currency} ${themeValue && styles.item__darktheme}`} onClick = {() => setActiveCurrencyPopup(!isActiveCurrencyPopup)}>Currency: {currentCurrency}</span>
                {
                    isActiveCurrencyPopup ? 
                        <div className = {`${themeValue ? styles.popup__dark : styles.popup} ${styles.currency__popup}`}>
                            {
                                Object.values(listOfCurrencies).map(item => <div className = {styles.popup__item} onClick = {() => {dispatch(changeCurrency(item)), dispatch(changeCurrencyForDetailsPage(item)), setActiveCurrencyPopup(!isActiveCurrencyPopup)}}>{item}</div>)
                            }
                        </div> : null
                }
            </div>
            <div className = {styles.second__slice}>
                <span className = {`${styles.item} ${styles.global__data} ${themeValue && styles.item__darktheme}`} onClick = {() => dispatch(showStats())}>
                    Show Statistics
                </span>
                <Toggle 
                    themeValue = {themeValue}
                    rowStyle = {rowStyle}
                    tileStyle = {tileStyle}
                    setTileStyle = {setTileStyle}
                    setRowStyle = {setRowStyle}
                    dispatch = {dispatch} />
            </div>
        </div>
    )
}


export const MemoFiltersBar = React.memo(FiltersBar)
