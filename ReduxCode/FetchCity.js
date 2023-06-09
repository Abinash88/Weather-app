import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    data:[],
    status:'idle',
}

export const FetchCityData = createSlice({
    name:'myCity',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(FetchCity.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'idle';
        })
        .addCase(FetchCity.pending, (state, action) =>{
            state.status = 'loading';
        })
        .addCase(FetchCity.rejected, (state, action) => {
            state.status = 'rejected';
        })

    }
})

export default FetchCityData.reducer

export const FetchCity =createAsyncThunk('myCity/FetchCity', async() => {
    try{
        const res = await fetch('https://countriesnow.space/api/v0.1/countries',{
            method:'GET',
        });
        const data = await res.json();
        if(!data) return console.log(data.message);
        return data?.data ;
    }catch(err) {
        console.log(err.message);
    }
})