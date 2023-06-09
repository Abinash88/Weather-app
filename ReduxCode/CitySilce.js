import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city:[],
}

export const CitiesSlice = createSlice({
    name:'cities',
    initialState,
    reducers:{
        Add:(state, action) =>{
            state.city = action.payload;
            console.log(action.payload)
        }
    }
})

export const {Add} = CitiesSlice.actions;
export default CitiesSlice.reducer;



