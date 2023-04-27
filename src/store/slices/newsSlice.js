import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name:"news",
    initialState:{
        news:[],
    },
    reducers:{
        addToNewsCart:(state,action)=>{
            state.news.push(action.payload)
        }
    },
})
export const{addToNewsCart} = newsSlice.actions;
export default newsSlice.reducer