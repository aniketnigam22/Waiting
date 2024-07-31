import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shopName: '',
    ownerName: '',
    shopAddress: '',
}

export const shopDetailSlice = createSlice({
    name: 'shopDetail',
    initialState,
    reducers: {
        addShopDetail: (state, action) => {
            state.shopName = action.payload.shopName;
            state.ownerName = action.payload.ownerName;
            state.shopAddress = action.payload.shopAddress;
        },
    },
})

export const { addShopDetail } = shopDetailSlice.actions

export default shopDetailSlice.reducer