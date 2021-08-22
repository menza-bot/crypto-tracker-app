import React from 'react'
import styles from '../../styles/headerStyles/Categories.module.css'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'


const Categories = ({cats, setActiveBurgerMenu}) => {


    return (
        <div className = {styles.cats__wrapper}>
            <div className = {styles.cats}>
                { 
                    cats.map((item, index) => { 
                        if (item === 'cryptocurrencies') { 
                            return  <Link href = {`/`}>
                                        <a key = {index} className = {styles.cats_item}>{item}</a>
                                    </Link>
                        } 
                        return  <Link href = {`/${item}`}>
                                    <a key = {index} className = {styles.cats_item}>{item}</a>
                                </Link>} )
                }
            </div>
            <div className = {styles.adaptive__menu__icon__wrapper} onClick = {() => setActiveBurgerMenu(true)}>
                <IconContext.Provider value = {{size: '25px', className: `${styles.adaptive__menu__icon}`}}>
                    <GiHamburgerMenu />
                </IconContext.Provider>
            </div>
        </div>
    )
}


export default Categories


