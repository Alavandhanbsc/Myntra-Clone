import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './Cartslice'
import WishlistSlice from './WishlistSlice'
import SortSlice from "./SortSlice"


const Store = configureStore({
reducer:{
    cart:CartSlice,
    wishlist: WishlistSlice,
    Sort:SortSlice,
}


})

export default Store