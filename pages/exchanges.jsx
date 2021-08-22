import Header from "../components/Header/Header"
import Layout from "../components/Layout"
import ExchangesPage from "../components/ExchangesPage/ExchangesPage"


const Exchanges = ({themeValue}) => {



    return (
            <div>
                <ExchangesPage themeValue = {themeValue}/>
            </div>
    )
}

export default Exchanges