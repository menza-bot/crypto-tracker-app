import React from 'react'
import styles from '../../styles/trendingPageStyles/TrendingEvents.module.css'
import { MdEventAvailable } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { fetchTrendingEvents } from '../../store/trendingSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'





const TrendingEvents = ({themeValue}) => {


    const trendingEvents = useSelector(state => state.trendingSlice.trendingEvents)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchTrendingEvents()) 
    }, [])


    return (
        <div className = {styles.wrapper}>
            <div className = {`${themeValue ? styles.content__dark : styles.content}`}>
                <div className = {styles.title__wrapper}>
                    <i className = {styles.title__icon}><MdEventAvailable /></i>
                    <div className = {styles.title}>The Latest Events</div>
                </div>
                <hr className = {`${themeValue ? styles.hr__dark : styles.hr}`}/>
                <div className = {styles.events}>
                    {
                        trendingEvents.length ? trendingEvents.map((item) => {
                            return  <div className = {`${themeValue ? styles.event__dark : styles.event}`}>
                                        <div className = {styles.event__title}>{item.title}</div>
                                        <img src={item.screenshot} alt="img" className = {styles.img}/>
                                        <hr className = {`${themeValue ? styles.hr__dark : styles.hr}`}/>
                                        <div className = {styles.inf}>
                                            <div className = {styles.organizer}><strong>Organizer:</strong>   {item.organizer}</div>
                                            <div className = {styles.address}><strong>Address:</strong>   {item.address}</div>
                                            <div className = {styles.start__date}><strong>Starts in:</strong>   {item.start_date.replace(/-/gi, '.')}</div>
                                            <div className = {styles.end__date}><strong>Ends in:</strong>   {item.end_date.replace(/-/gi, '.')}</div>
                                        </div>
                                    </div>
                        }) : null
                    }
                </div>
            </div>
        </div>
    )
}


export default TrendingEvents
