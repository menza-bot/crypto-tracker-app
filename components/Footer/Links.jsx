import React, { useState } from 'react'
import styles from '../../styles/footerStyles/Links.module.css'


const Links = () => {


    const [array] = useState([
        {
            title: 'Company',
            links: {
                'About us': 'https://www.coingecko.com/en/about',
                'Terms of use': 'https://www.coingecko.com/en/terms',
                'Disclaimer': 'https://www.coingecko.com/en/disclaimer',
                'Methodology': 'https://www.coingecko.com/en/methodology'
            }
        }, 
        {
            title: 'Products',
            links: {
                'CryptoAPI': 'https://www.coingecko.com/en/api',
                'Careers': 'https://www.coingecko.com/en/careers',
                'Bug Bounty': 'https://hackenproof.com/coingecko/coingecko',
            }
        }, 
        {
            title: 'Socials',
            links: {
                'Facebook': 'https://www.facebook.com/coingecko',
                'Twitter': 'https://www.twitter.com/coingecko',
                'Telegram': 'https://t.me/coingecko',
                'Instagram': 'https://www.instagram.com/coingecko/?hl=en'
            }
        }
    ])

    
    return (
        <div className = {styles.links__wrapper}>
            {
                array.map(item => 
                    <div>
                        <h4 className = {styles.title}>{item.title}</h4>
                        <ul className = {styles.links}>{Object.entries(item.links).map(([item, key]) => <li className = {styles.link}><a href = {key}>{item}</a></li>)}</ul>
                    </div>)
            }
        </div>
    )
}


export default Links