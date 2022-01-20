import React, { useState, useEffect, useCallback } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoIosCloseCircle } from 'react-icons/io'
import { IconContext } from 'react-icons'
import styles from '../../styles/headerStyles/SearchBar.module.css'
import { ImFire } from 'react-icons/im'
import { fetchSearchBarData } from '../../store/mainPageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearchBarData } from '../../store/mainPageSlice'
import  debounce  from 'lodash.debounce'


export const SearchBar = ({ trendingCoins, isActiveModal, activateSearchModal, deactivateSearchModal, themeValue, enableScroll }) => {

    const [inputValue, setInputValue] = useState('')
    const searchedCoins = useSelector((state) => state.mainPageSlice.searchedCoins)
    const searchedExchanges = useSelector((state) => state.mainPageSlice.searchedExchanges)
    const dispatch = useDispatch()


    useEffect(() => {
        inputValue ? 
            dispatch(fetchSearchBarData(inputValue)) : dispatch(clearSearchBarData())
    }, [inputValue])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    


    return (
        <>
            <div className={styles.wrapper}>
                <div className={themeValue ? styles.searchbar__dark : styles.searchbar} onClick={() => activateSearchModal()}>
                    <IconContext.Provider value={{ color: '#A6B0C3', size: '15px', marginTop: '2px' }}>
                        <FiSearch />
                    </IconContext.Provider>
                    <div className={styles.title}>
                        Search
                    </div>
                </div>
            </div>
            <div className={isActiveModal ? (themeValue ? styles.modal__dark : styles.modal) : styles.modalHidden}>
                <div className={styles.modal__header}>
                    <div className={styles.modal__search__icon}>
                        <IconContext.Provider value={{ color: '#919191', size: '15px', marginTop: '2px' }}>
                            <FiSearch />
                        </IconContext.Provider>
                    </div>
                    <div className={styles.input__wrapper}> 
                        <input type="text" value={inputValue} onChange={handleChange} className={themeValue ? styles.input__dark : styles.input} placeholder='What do you want to find?' />
                    </div>
                    <div className={styles.modal__close__icon} onClick = {() => {deactivateSearchModal(), setInputValue(''), enableScroll()}}>
                        <IconContext.Provider value={{ color: '#919191', size: '15px', marginTop: '2px' }}>
                            <IoIosCloseCircle />
                        </IconContext.Provider>
                    </div>
                </div>
                <div className={styles.modal__body}>
                    {
                        inputValue ?   
                            <>
                                <SearchedContent content={searchedCoins} title='Coins' />
                            </>
                        : null
                    }
                    <div className={styles.trending__coins__wrapper}>
                        <div className={styles.trending__header}>
                            {
                                !inputValue ? <>
                                    <span className={themeValue ? styles.trending__title__dark : styles.trending__title}>Trending Coins</span> <span className={styles.fire__icon}>
                                        <IconContext.Provider value={{ color: 'tomato', size: '15px' }}>
                                            <ImFire />
                                        </IconContext.Provider>
                                    </span>
                                </> : null
                            }
                        </div>
                        <div className={styles.trending__coins__list}>
                            {
                                    trendingCoins.length && !inputValue ? trendingCoins.map((item, id) => {
                                        return <div className={styles.trending__coin__wrapper}>
                                                    <div className={styles.trending__coin}>
                                                        <span className = {styles.name}>
                                                            <img src={item.item.large} alt="logo" className = {styles.img} width = '22px' height = '22px'/>
                                                            <span className = {styles.name__text}>{item.item.name}</span>
                                                        </span>
                                                        <span className = {styles.rank}>
                                                            #{item.item.market_cap_rank}
                                                        </span>
                                                    </div>
                                                </div>
                                    })
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div> 
            
        </>
    )
}


const SearchedContent = ({content, title}) => {

    const [activeNoResults, setActiveNoResults] = useState(false)

    return (
        <div className={styles.searched__content__wrapper}>
            <div className={styles.searched__header}>
                {content.length ? title : null}
            </div>
            <div className={styles.searched__coins__list}>
                {
                    content.length ?
                        content.map((item) => {
                            return <div className={styles.searched__coin__wrapper}>
                                <div className={styles.searched__coin}>
                                <span className = {styles.name}>
                                    <img src={item.large} alt="logo" className = {styles.img} width = '22px' height = '22px'/>
                                <span className = {styles.name__text}>{item.name}</span>
                                </span>
                                <span className = {styles.rank}>
                                    {
                                        title==='Coins' ? <>#{item.market_cap_rank}</> : null
                                    }
                                </span>
                            </div>
                        </div>
                    }) : <div className={styles.no__results}>
                            {
                                content.length ? 
                                    <>
                                        <div className={styles.no__results__icon}>
                                            <IconContext.Provider value={{ color: 'gray', size: '25px' }}>
                                                <FiSearch />
                                            </IconContext.Provider>
                                        </div>
                                        <div className={styles.no__results__attention}>
                                            <div className={styles.no__results__title}>
                                                No results for ""
                                            </div>
                                            <div className={styles.no__results__text}>
                                                We couldn't find anything matching your search.
                                                        Try again with a different term.
                                            </div>
                                        </div>
                                    </> : null
                            }
                            
                    </div> 
                }
            </div>
        </div>
    )
}