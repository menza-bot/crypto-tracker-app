import React from 'react'
import styles from '../../styles/headerStyles/Title.module.css'
import Link from 'next/link'
import { RiBitCoinLine } from 'react-icons/ri' 


const Title = () => {
    return (
                    <nav className = {styles.link}>
                        <Link href = '/'>
                            <div>
                                <a className = {styles.icon}> 
                                    <i>
                                        <RiBitCoinLine size = {'35px'}/>
                                    </i>
                                </a> 
                                <a className = {styles.text}>
                                    CryptoCurrencyTracker
                                </a>
                            </div>
                        </Link>
                    </nav>
    )
}


export default Title
