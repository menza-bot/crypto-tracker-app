import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import styles from '../../styles/coinPageStyles/ChartData.module.css'





const ChartData = ({chartData, name, daysAmountData, switchDayAmount, activeButton, themeValue}) => {


    const [currentChartHeight, setCurrentChartHeight] = useState(450)
    const [currentChartWidth, setCurrentChartWidth] = useState('97%') 
    
    
    useEffect(() => {
        const currentWidth = window.innerWidth

            if (currentWidth <= 1200 && currentWidth > 992) {
                setCurrentChartHeight(350) }

            if (currentWidth <= 992 && currentWidth > 760) {
                setCurrentChartHeight(300) 
                setCurrentChartWidth('100%')
            }

            if (currentWidth <= 760) {
                setCurrentChartWidth('100%')
            }

            if (currentWidth <= 500 && currentWidth > 350) {
                setCurrentChartHeight(230)
                setCurrentChartWidth('100%')
            }

            if (currentWidth <= 350 ) {
                setCurrentChartHeight(195)
                setCurrentChartWidth('100%')
            }
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
                                <ResponsiveContainer width = {currentChartWidth} height = {currentChartHeight}>
                                    <LineChart data={chartData} fontSize={12} yAxisId = {10}>
                                        <Line  type="linear" dataKey="uv" stroke="red" strokeWidth = {2} dot ={false} />
                                        <CartesianGrid stroke="#ccc" strokeDasharray="2 1"  vertical = {false} />
                                        <XAxis dataKey="name" tickLine = {false} padding = {50} /> 
                                        <YAxis  axisLine = {false} width = {40} domain={['auto', 'auto']}/>
                                        <Tooltip />
                                    </LineChart>  
                                </ResponsiveContainer> : <div>None</div>
                        }
                    </div>
                </div>
        </div>
    )
}


export const MemoChartData = React.memo(ChartData)
