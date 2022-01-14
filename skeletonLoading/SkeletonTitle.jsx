import React from 'react'
import { SkeletonElement } from './SkeletonElement'
import styles from './SkeletonTitle.module.css'

export const SkeletonTitle = () => {
    return (
        <div className={styles.wrapper}>
            <SkeletonElement type = 'title'/>
            <SkeletonElement type = 'subtitle' />
        </div>
    )
}