import React from 'react'
import styles from '../../styles/converterPageStyles/ConverterPage.module.css'
import Converter from './Converter'
import CryptoInf from './CryptoInf'
import { useSelector, useDispatch } from 'react-redux'




const ConverterPage = ({themeValue}) => {


    const ConverterTitle = () => {
        return (
            <div className = {styles.title__wrapper}>
                <div className = {styles.title}>
                    Cryptocurrency Converter Calculator
                </div>
            </div>
        )
    }


    const cryptoInf = useSelector(state => state.converterSlice.cryptoInf)
    const state = useSelector(state => state.converterSlice)
    const dispatch = useDispatch()


    return (
        <div className = {styles.wrapper}>
            <ConverterTitle />
            <Converter themeValue = {themeValue} state = {state} dispatch = {dispatch}/> 
            <CryptoInf cryptoInf = {cryptoInf}/>
        </div>
    )
}


export default ConverterPage
