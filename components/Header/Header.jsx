import React from 'react'
import styles from '../../styles/headerStyles/Header.module.css'
import Categories from './Categories'
import Title  from './Title'
import { useState, useEffect } from 'react'
import AdaptiveMenu from './AdaptiveMenu'
import { useDispatch, useSelector } from 'react-redux'
import { SearchBar } from './SearchBar'
import { fetchTrendingCoins } from '../../store/trendingSlice'



const Header = ({themeValue, themeSwitcher}) => {


    const [cats] = useState(['cryptocurrencies', 'exchanges', 'converter', 'trending'])
    const [isActiveBurgerMenu, setActiveBurgerMenu] = useState(false)
    const [isActiveModal, setActiveModal] = useState(false)
    const generalStats = useSelector((state) => state.mainPageSlice.generalStats)
    const currentCurrency = useSelector((state) => state.mainPageSlice.currentCurrency)
    const listOfCurrencies = useSelector((state) => state.mainPageSlice.listOfCurrencies)
    const trendingCoins = useSelector(state => state.trendingSlice.trendingCoins)

    const dispatch = useDispatch()

    const disableScroll = () => {
        document.body.style.overflow = 'hidden'
    }

    const enableScroll = () => {
        document.body.style.overflow = ''
    }

    const activateSearchModal = () => {
        setActiveModal(true)
    }

    const deactivateSearchModal = () => {
        setActiveModal(false)
    }

    useEffect(() => {
        dispatch(fetchTrendingCoins())
    }, [])


    return (
            <div className = {`${themeValue ? styles.wrapper__dark : styles.wrapper}`}>
                <div className = {styles.content}> 
                    <Title />
                    <Categories
                        cats = {cats}
                        setActiveBurgerMenu = {setActiveBurgerMenu}
                        disableScroll = {disableScroll}
                        activateSearchModal = {activateSearchModal}
                    /> 
                    <SearchBar 
                        trendingCoins = {trendingCoins}
                        isActiveModal = {isActiveModal}
                        activateSearchModal = {activateSearchModal}
                        deactivateSearchModal = {deactivateSearchModal}
                        themeValue = {themeValue}
                        enableScroll = {enableScroll}
                    />
                </div>
                <AdaptiveMenu 
                    themeSwitcher = {themeSwitcher}
                    themeValue = {themeValue}
                    isActiveBurgerMenu = {isActiveBurgerMenu}
                    setActiveBurgerMenu = {setActiveBurgerMenu}
                    generalStats = {generalStats}
                    currentCurrency = {currentCurrency}
                    listOfCurrencies = {listOfCurrencies}
                    enableScroll = {enableScroll}
                    dispatch = {dispatch}
                    cats = {cats}/>
            </div>
    )
}

export default Header