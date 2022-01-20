import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts'
import { useWindowDimensions } from '../../customHooks/useWindowsDimentions'
import styles from '../../styles/coinPageStyles/ChartData.module.css'





const ChartData = ({chartData, name, daysAmountData, switchDayAmount, activeButton, themeValue}) => {


    
    const {width, height} = useWindowDimensions()
    const currentWidth = window.innerWidth
    
    
    useEffect(() => {
    }, [])
    

    return (
        <div className = {styles.wrapper__chart}>
                <div className = {styles.chart}>
                    <div className = {styles.chart__nav}>
                        <div className = {styles.title}>
                            {name} Chart Statistics
                        </div>
                        <div className = {`${themeValue ? styles.switchers__dark : styles.switchers}`}>
                            {
                                Object
                                    .entries(daysAmountData)
                                    .map(([key, value]) => 
                                        <span className = {`${themeValue ? styles.switcher__dark : styles.switcher}
                                                            ${activeButton === key && !themeValue ? styles.active : styles.passive}
                                                            ${activeButton === key && themeValue ? styles.active__dark : styles.passive }`}
                                            onClick = {() => switchDayAmount(value, key)}
                                        >
                                            {key}
                                        </span>)
                            }
                        </div>
                    </div>
                    <div className = {styles.data}>
                        {   
                            chartData ?
                                null : 1
                        }
                    </div>
                </div>
        </div>
    )
}


export const MemoChartData = React.memo(ChartData)
