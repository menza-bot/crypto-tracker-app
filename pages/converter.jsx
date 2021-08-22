import ConverterPage from "../components/ConverterPage/ConverterPage"
import Header from "../components/Header/Header"
import Layout from "../components/Layout"

const Converter = ({themeValue}) => {
    return (
            <div>
                <ConverterPage themeValue = {themeValue}/>
            </div>
    )
}

export default Converter