// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//   cart: [],
// }

// const cartSlice = createSlice({
//     name:"addToCart",
//     initialState,
//     reducers:{
//         AddtoCart:(state,action)=>{
//             state.cart.push(action.payload)
//         },
//         RemoveCart:(state,action)=>{
//             const removecart = action.payload.id
//             state.cart= state.cart.filter(item=>item.id !==removecart)
//         }
//     }
// })
// export const {AddtoCart,RemoveCart} = cartSlice.actions
// export default cartSlice.reducer


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    AddtoCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    RemoveCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },


    IncQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) item.quantity =item.quantity+1;
    },
    DecQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -=1;
    }

    
  }
});

export const { AddtoCart, RemoveCart, IncQuantity, DecQuantity } = cartSlice.actions;
export default cartSlice.reducer;
