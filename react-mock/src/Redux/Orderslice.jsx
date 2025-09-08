import {createSlice} from "@reduxjs/toolkit"
const initialState={
    orderlist:[]
}

const OrderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        storeorder:(state,action)=>{
            state.orderlist=[...action.payload]
        },
        clearorder:(state,action)=>{
            state.orderlist=[]
        }
    }
})

 export const {storeorder,clearorder} = OrderSlice.actions
 export default OrderSlice.reducer
