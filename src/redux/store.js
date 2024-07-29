import { configureStore } from '@reduxjs/toolkit'
import CounterReducer  from './CounterReducer/CounterReducer'



export const store = configureStore({
    reducer: {
        counter:CounterReducer,
    },
})