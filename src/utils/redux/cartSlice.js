    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
        name: "cart",
        initialState : {
            cart:[]
        },
        reducers:{
            addItem:(state,action)=>{
                state.cart.push(action.payload)
            },
            removeItem:(state,action)=>{
                state.cart = state.cart.filter((item)=>item.card.info.id !== action.payload)
              
            },
            clearItems:(state)=>{
                state.cart.length=0
            }
        }
    })
    
    export const{addItem,removeItem,clearItems} = cartSlice.actions
    export default cartSlice.reducer