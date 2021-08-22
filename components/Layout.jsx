import { children } from "react"
import Footer from "./Footer/Footer"
import GlobalData from "./GlobalData/GlobalData"
import Header from "./Header/Header"

const Layout = ({children, themeValue, themeSwitcher}) => {
    return (
        <div>
            <GlobalData themeSwitcher = {themeSwitcher} themeValue = {themeValue}/>
            <Header themeValue = {themeValue} themeSwitcher = {themeSwitcher}/>
            {
                children
            }
            <Footer themeValue = {themeValue}/>
        </div>
    )
}



export default Layout                                                                     