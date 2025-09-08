import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './Cartslice'
import WishlistSlice from './WishlistSlice'
import SortSlice from "./SortSlice"
import OrderSlice from "./Orderslice"
import OrderHistorySlice from "./OrderHistorySlice"


const Store = configureStore({
reducer:{
    cart:CartSlice,
    wishlist: WishlistSlice,
    Sort:SortSlice,
    Order:OrderSlice,
    OrderHistory:OrderHistorySlice,
}


})

export default Store