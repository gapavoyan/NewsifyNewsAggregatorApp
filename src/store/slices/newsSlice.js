import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name:"news",
    initialState:{
        news:[],
    },
    reducers:{
        addToNewsCart:(state,action)=>{
            const itemIndex = state.news.findIndex(el => el.title === action.payload.title);
            if (itemIndex >= 0) {
                state.news[itemIndex].quantity += 1
            }
            else state.news.push({ ...action.payload, quantity: 1 })
            // state.news.push(action.payload) 
        }
    },
})
export const{addToNewsCart} = newsSlice.actions;
export default newsSlice.reducer