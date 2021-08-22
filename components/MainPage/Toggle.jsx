import React from 'react'
import { HiMenu, HiTemplate } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'
import styles from '../../styles/mainPageStyles/FiltersBar.module.css'

const Toggle = ({themeValue, rowStyle, tileStyle, setTileStyle, setRowStyle, dispatch}) => {
    return (
        <>
            <span className = {`${styles.toggle} ${themeValue && styles.toggle__darktheme}`}>
                    <i className = {`${styles.rows__button} ${rowStyle ? styles.rows__button__active : null}`} onClick = {() => dispatch(setRowStyle())}>
                        <IconContext.Provider value = {{size: '20px', className: `${styles.rows__icon} ${rowStyle && styles.rows__icon__darktheme}`}}>
                            <HiMenu />
                        </IconContext.Provider>
                    </i>
                    <i className = {`${styles.tiles__button} ${tileStyle && styles.tiles__button__active}`} onClick = {() => dispatch(setTileStyle())}>
                        <IconContext.Provider value = {{size: '20px', className: `${styles.tiles__icon} ${tileStyle && styles.tiles__icon__darktheme}`}}>
                            <HiTemplate />
                        </IconContext.Provider>
                    </i>
            </span>
        </>
    )
}


export default Toggle
