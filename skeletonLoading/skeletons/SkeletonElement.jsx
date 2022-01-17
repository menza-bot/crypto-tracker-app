import React from 'react'
import styles from '../styles/SkeletonElement.module.css'

export const SkeletonElement = ({type, themeValue}) => {
    return (
        <div className={`${themeValue ? styles.skeleton__dark : styles.skeleton} ${styles[type]}`}>
            
        </div>
    )
}