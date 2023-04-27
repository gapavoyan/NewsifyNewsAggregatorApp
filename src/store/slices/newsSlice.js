import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name:"news",
    initialState:{
        news:[],
    },
    reducers:{
        addToNewsCart(state,action){

        }
    },
})
export const{addToNewsCart} = newsSlice.actions;
export default newsSlice.reducer