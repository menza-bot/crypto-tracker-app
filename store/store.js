import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainPageSlice from './mainPageSlice'
import exchangesSlice from './exchangesSlice'
import converterSlice from './converterSlice'
import trendingSlice from './trendingSlice'
import coinDetailsSlice from './coinDetailsSlice'




const rootReducer = combineReducers({
    converterSlice: converterSlice,
    mainPageSlice: mainPageSlice,
    exchangesSlice: exchangesSlice,
    trendingSlice: trendingSlice,
    coinDetailsSlice: coinDetailsSlice,
})


const store = configureStore({reducer: rootReducer})

export default store 