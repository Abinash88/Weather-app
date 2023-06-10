import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    realcity:''
};

export const TypeCity = createSlice({
    name:'typeCity',
    initialState,
    reducers:{
        TypeCities:(state, action) => {
            state.realcity = action.payload  
        }
    }
})

export const {TypeCities} = TypeCity.actions

export default TypeCity.reducer;