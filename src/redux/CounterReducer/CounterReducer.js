import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    input_val:0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value === 0) {
                state.value = 0
            } else {
                state.value -= 1
            }
        },
        incrementByAmount: (state, action) => {
            state.value += parseInt(action.payload)
            console.log(state.value, 'state value in increment by amoun reducer')
        },
        onchangeVal:(state,action)=>{
            state.input_val = action.payload
        },
        clearValue:(state) => {
            state.value = 0;
        }
    },
})

export const { increment, decrement, incrementByAmount,onchangeVal, clearValue } = counterSlice.actions

export default counterSlice.reducer