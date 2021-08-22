import { createWrapper } from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import store from '../store/store'
import '../styles/globals.css'
import useDarkMode from 'use-dark-mode'
import { useEffect, useState } from 'react'





function MyApp({ Component, pageProps }) {


    const [isMounted, setIsMounted] = useState(false)
    const darkMode = useDarkMode(true)


    useEffect(() => {
      setIsMounted(true)
    }, [])


    return (
          
            <Provider store = {store}>
              {
                isMounted && 
                  <Layout themeSwitcher = {darkMode.toggle} themeValue = {darkMode.value}>
                    <Component {...pageProps} themeValue = {darkMode.value} />
                  </Layout>
              }
            </Provider>
          
    )
}


const makeStore = () => store 
const wrapper = createWrapper(makeStore)


export default wrapper.withRedux(MyApp)
