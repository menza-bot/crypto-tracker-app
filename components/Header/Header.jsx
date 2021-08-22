import React from 'react'
import styles from '../../styles/headerStyles/Header.module.css'
import Categories from './Categories'
import Title  from './Title'
import { useState } from 'react'
import AdaptiveMenu from './AdaptiveMenu'
import { useDispatch, useSelector } from 'react-redux'


const Header = ({themeValue, themeSwitcher}) => {


    const [cats] = useState(['cryptocurrencies', 'exchanges', 'converter', 'trending'])
    const [isActiveBurgerMenu, setActiveBurgerMenu] = useState(false)
    const generalStats = useSelector((state) => state.mainPageSlice.generalStats)
    const currentCurrency = useSelector((state) => state.mainPageSlice.currentCurrency)
    const listOfCurrencies = useSelector((state) => state.mainPageSlice.listOfCurrencies)
    const dispatch = useDispatch()


    return (
            <div className = {`${themeValue ? styles.wrapper__dark : styles.wrapper}`}>
                <div className = {styles.content}> 
                    <Title />
                    <Categories
                        cats = {cats}
                        setActiveBurgerMenu = {setActiveBurgerMenu}/> 
                </div>
                <AdaptiveMenu 
                    themeSwitcher = {themeSwitcher}
                    themeValue = {themeValue}
                    isActiveBurgerMenu = {isActiveBurgerMenu}
                    setActiveBurgerMenu = {setActiveBurgerMenu}
                    generalStats = {generalStats}
                    currentCurrency = {currentCurrency}
                    listOfCurrencies = {listOfCurrencies}
                    dispatch = {dispatch}
                    cats = {cats}/>
            </div>
    )
}

export default Header