import React from 'react'
import styles from './skeletonElement.module.css'

export const SkeletonElement = ({type}) => {
    return (
        <div className={`${styles.skeleton} ${styles[type]}`}>
            
        </div>
    )
}