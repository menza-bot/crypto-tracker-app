import React from 'react'
import Title from '../Header/Title'
import styles from '../../styles/footerStyles/Footer.module.css'
import Links from './Links'


const Footer = ({themeValue}) => {
    return (
        <div className = {`${themeValue ? styles.footer__dark : styles.footer}`}>
            <div className = {styles.content}> 
                <div className = {styles.inf}>
                    <Title />
                    <Links />
                </div>
                <div>
                    <p className = {styles.copyright}>2021 Crypto App. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer