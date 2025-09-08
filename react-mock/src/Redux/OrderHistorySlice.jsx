import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    history:[]
}

const OrderHistorySlice = createSlice({
    name:"OrderHistory",
    initialState,
    reducers:{
        AddorderHistory:(state,action)=>{
            state.history.push(action.payload)
        }
    }
})

export const {AddorderHistory} = OrderHistorySlice.actions
export default OrderHistorySlice.reducer