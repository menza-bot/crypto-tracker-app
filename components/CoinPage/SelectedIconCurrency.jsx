import React from 'react'
import { BiDollar, BiEuro, BiPound, BiRuble } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'



const SelectedIconCurrency = ({currentCurrency}) => {
    return (
        <div>
            {
                currentCurrency === 'USD' ? 
                    <IconContext.Provider value = {{color: 'gray', size: '27px'}}>
                        <BiDollar />
                    </IconContext.Provider> :
                currentCurrency === 'EUR' ?
                    <IconContext.Provider value = {{color: 'gray', size: '27px'}}>
                        <BiEuro />
                    </IconContext.Provider> :
                currentCurrency === 'GBP' ? 
                    <IconContext.Provider value = {{color: 'gray', size: '27px'}}>
                        <BiPound />
                    </IconContext.Provider> :
                currentCurrency === 'RUB' ?
                    <IconContext.Provider value = {{color: 'gray', size: '27px'}}>
                        <BiRuble />
                    </IconContext.Provider> : null
            }
        </div>
    )
}


export default SelectedIconCurrency
