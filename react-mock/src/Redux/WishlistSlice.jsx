import {createSlice} from '@reduxjs/toolkit'

const initialState = {wishlist:[]}


const WishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        AddtoWishlist:(state,action)=>{
            state.wishlist.push(action.payload)
        },
        RemoveWishlist:(state,action)=>{
            const removed =action.payload.id
           state.wishlist = state.wishlist.filter(item=>item.id !==removed)
        }
    }
})
export const {AddtoWishlist,RemoveWishlist} = WishlistSlice.actions

export default WishlistSlice.reducer
