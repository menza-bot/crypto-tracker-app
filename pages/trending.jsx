import Header from "../components/Header/Header"
import Layout from "../components/Layout"
import TrendingPage from "../components/TrendingPage/TrendingPage"




const Trending = ({themeValue}) => {
    return (
        <div>
            <TrendingPage themeValue = {themeValue}/>
        </div>
    )
}

export default Trending