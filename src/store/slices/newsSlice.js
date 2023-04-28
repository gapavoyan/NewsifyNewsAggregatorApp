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
        },
        deleteToNewsCart:(state,action)=>{
            const titleToRemove = action.payload.title
            const itemIndex = state.news.findIndex(el => el.title === titleToRemove)
            if (itemIndex >= 0) {
              state.news.splice(itemIndex, 1)
            }
        }
    },
})
export const{addToNewsCart,deleteToNewsCart} = newsSlice.actions;
export default newsSlice.reducer