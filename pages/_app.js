import { createWrapper } from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import store from '../store/store'
import '../styles/globals.css'
import useDarkMode from 'use-dark-mode'
import React, { useEffect, useState } from 'react'





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
                <React.StrictMode>
                  <Layout themeSwitcher = {darkMode.toggle} themeValue = {darkMode.value}>
                    <Component {...pageProps} themeValue = {darkMode.value} />
                  </Layout>
                </React.StrictMode>
              }
            </Provider>
          
    )
}


const makeStore = () => store 
const wrapper = createWrapper(makeStore)


export default wrapper.withRedux(MyApp)
