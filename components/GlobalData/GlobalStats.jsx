import React from 'react'
import { useEffect } from 'react'
import { fetchGeneralStats } from '../../store/mainPageSlice'
import styles from '../../styles/globalStyles/GlobalStats.module.css'



const GlobalStats = ({generalStats, dispatch}) => {
    

        useEffect(() => {
            dispatch(fetchGeneralStats())
        }, [])


        return (
                <div className = {styles.generalstats}>
                        {
                            generalStats['Coins'] ? (
                                <div className = {styles.content}>
                                    {
                                        Object.entries(generalStats).map(
                                            ([key, value]) => [
                                                <span className = {styles.content__item}>
                                                    {key}:  <span className = {styles.content__item__value}>
                                                                {value.toLocaleString()}
                                                            </span>
                                                </span>
                                            ]
                                        )
                                    }
                                </div>
                            ) : null
                        }
                </div>
        )
}


export default GlobalStats
