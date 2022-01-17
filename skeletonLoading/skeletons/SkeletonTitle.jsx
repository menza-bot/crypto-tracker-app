import React from 'react'
import { SkeletonElement } from './SkeletonElement'
import styles from '../styles/SkeletonTitle.module.css'

export const SkeletonTitle = ({themeValue}) => {
    return (
        <div className={styles.wrapper}>
            <SkeletonElement type = 'title' themeValue={themeValue}/>
            <SkeletonElement type = 'subtitle' themeValue={themeValue}/>
        </div>
    )
}