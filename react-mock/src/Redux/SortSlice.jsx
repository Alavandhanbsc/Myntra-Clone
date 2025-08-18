import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items:[],
    sorteditems:[]

}

const SortSlice = createSlice({
    name:"menssort",
    initialState,
    reducers:{
        
        Setmensitem:(state,action)=>{
        state.items=action.payload
        state.sorteditems=action.payload
        },
        Sortbyprice:(state,action)=>{
            if(action.payload==="low-to-high"){
                state.sorteditems = [...state.sorteditems].sort((a, b) => a.price - b.price);

            }else if(action.payload==="high-to-low"){
                state.sorteditems = [...state.sorteditems].sort((a, b) => b.price - a.price);

            }else{
                state.sorteditems=state.items
            }
        }


    }
})

export const {Setmensitem,Sortbyprice} =SortSlice.actions
export default SortSlice.reducer