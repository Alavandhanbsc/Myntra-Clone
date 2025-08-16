import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './Cartslice'
import WishlistSlice from './WishlistSlice'


const Store = configureStore({
reducer:{
    cart:CartSlice,
    wishlist: WishlistSlice,
}


})

export default Store