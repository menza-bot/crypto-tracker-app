import React from 'react'
import { useState } from 'react'
import { pageSwitchReducer } from '../../store/mainPageSlice'
import styles from '../../styles/mainPageStyles/Pagination.module.css'
import { RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'




const Pagination = ({coinsQuantity, coins, dispatch, pageSize, portionSize, currentPage}) => {


    const pageNumbers = []
    const [portionNumber, setPortionNumber] = useState(1)  
    const pagesQuantity = Math.ceil(coinsQuantity / pageSize)


    for (let i = 1; i < pagesQuantity; i++) {
        pageNumbers.push(`${i}`)
    }


    const portionQuantity = Math.ceil(pageNumbers.length / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize  


    const pageSwitch = (item) => {
        dispatch(pageSwitchReducer(item))
    }


    const portionSwitchPrev = () => {
        if (portionNumber > 1) {
            setPortionNumber(portionNumber - 1)
        }
    }


    const portionSwitchNext = () => {
        if (portionNumber < portionQuantity) {
            setPortionNumber(portionNumber + 1)
        }
    }



    return (
        <div className = {styles.pagination}>
            {
                coinsQuantity && coins.length && pageSize ? 
                    <>
                        <div className = {styles.show__panel}>                                         
                            <div>Showing {coins[0].market_cap_rank} - {coins[coins.length - 1].market_cap_rank} out of {coinsQuantity}</div> 
                        </div>
                        <div className = {styles.paginator__wrapper}>
                            <div className = {styles.paginator}>
                                <i className = {styles.prev__button} onClick = {() => {portionSwitchPrev()}}><RiArrowLeftSLine/></i>
                                <div className = {styles.pages}>
                                    {
                                        pageNumbers.length ?
                                            <div className = {styles.page__buttons}>
                                                {pageNumbers
                                                    .filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber)
                                                    .map(item => <span className = {`${styles.page__button} ${currentPage === item ? styles.page__button__active : null}`} onClick = {() => pageSwitch(item)}><span className = {styles.button__value}>{item}</span></span>)}
                                            </div> : null
                                    }
                                </div>
                                <i className = {styles.next__button} onClick = {() => {portionSwitchNext()}}><RiArrowRightSLine/></i>
                            </div>
                        </div>
                        <div className = {styles.row__amount}>
                            Show rows: {pageSize}
                        </div>
                    </> : null
            }
        </div>
    )
}


export const MemoPagination = React.memo(Pagination)