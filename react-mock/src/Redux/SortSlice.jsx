import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items:[],
    sorteditems:[],
    //for search
    searchAlphabet:[],

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
        },
        Filterbybrand:(state,action)=>{
            const letters = action.payload.toLowerCase()
            state.searchAlphabet = letters

            if(letters===""){
                state.sorteditems=state.items
            }else{
                state.sorteditems=state.items.filter((res)=>
                    res.brand.toLowerCase().startsWith(letters) // we can use "includes" ==> for search each each letters amnd give product which letters are matched
                )
            }
        }


    }
})

export const {Setmensitem,Sortbyprice,Filterbybrand} =SortSlice.actions
export default SortSlice.reducer