import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './CounterReducer/CounterReducer'
import ShopDetailReducer from './ShopDetailReducer/ShopDetailReducer'



export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        shop: ShopDetailReducer
    },
})