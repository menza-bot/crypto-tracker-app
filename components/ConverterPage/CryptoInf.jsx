import React from 'react'
import styles from '../../styles/converterPageStyles/CryptoInf.module.css'



const CryptoInf = ({cryptoInf}) => {


    return (
        <div className = {styles.wrapper}>
            {
                cryptoInf.map(item => 
                    <div className = {styles.cryptoInf}>
                        <h4 className = {styles.title}> 
                            {item.title}
                        </h4>
                        <p className = {styles.text}>
                            {item.text}
                        </p>
                    </div>
                )
            }
        </div>
    )
}


export default CryptoInf
