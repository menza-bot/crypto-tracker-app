import React from 'react'
import { GrClose} from 'react-icons/gr'
import Title from './Title'
import styles from '../../styles/headerStyles/AdaptiveMenu.module.css'
import { IconContext } from 'react-icons/lib'
import Link from 'next/link'
import CurrencyPopup from '../GlobalData/CurrencyPopup'



const AdaptiveMenu = ({themeSwitcher, isActiveBurgerMenu, setActiveBurgerMenu, cats, currentCurrency, listOfCurrencies, themeValue, dispatch}) => {


    return (
        <div className = {`${isActiveBurgerMenu ? (themeValue ? styles.adaptive__menu__dark : styles.adaptive__menu) : (styles.adaptive__menu__hidden)}`}>
            <div className = {styles.title__wrapper}>
                <span className = {styles.title}>
                    <Title />
                </span>
                <i className = {styles.closer__icon} onClick = {() => {setActiveBurgerMenu(false)}}>
                    <IconContext.Provider value = {{className: 'closer', size: '25px'}}>
                        <GrClose />
                    </IconContext.Provider>
                </i>
            </div>
            <div className = {styles.cats__wrapper__adaptive}>
                {
                    cats.map((item, index) => { 
                        if (item === 'cryptocurrencies') { 
                            return  <div className = {styles.adaptive__category__wrapper}>
                                        <Link href = {`/`}>
                                            <a 
                                                key = {index}
                                                className = {styles.adaptive__category}
                                                onClick = {() => {setActiveBurgerMenu(false)}}>{item}</a>
                                        </Link>
                                    </div>
                        } 
                        return  <div className = {styles.adaptive__category__wrapper}>
                                    <Link href = {`/${item}`}>
                                        <a 
                                            key = {index}
                                            className = {styles.adaptive__category}
                                            onClick = {() => {setActiveBurgerMenu(false)}}>{item}</a>
                                    </Link>
                                </div>} )
                                
                }
                <div className = {styles.adaptive__settings}>
                    <span className = {themeValue ? styles.adaptive__setting__dark : styles.adaptive__setting}>
                        <CurrencyPopup 
                            isActiveBurgerMenu = {isActiveBurgerMenu}
                            currentCurrency = {currentCurrency}
                            listOfCurrencies = {listOfCurrencies}
                            themeValue = {themeValue}
                            dispatch = {dispatch} />
                    </span>
                    <span className = {themeValue ? styles.adaptive__setting__dark : styles.adaptive__setting} onClick = {themeSwitcher}>
                        Switch Theme
                    </span>
                </div>
            </div>
        </div>
    )
}


export default AdaptiveMenu