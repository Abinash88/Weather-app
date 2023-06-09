import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    status:'idle',
}


export const WeatherData = createSlice({
    name:'weather',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(FetchingApi.fulfilled, (state, action)=> {
            state.data = [action.payload];
            state.status = 'idle';
        })
        .addCase(FetchingApi.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(FetchingApi.rejected, (state, action) => {
            state.status = 'rejected';
        })
    }
})

export default WeatherData.reducer;

export const FetchingApi = createAsyncThunk('weather/FetchingApi', async(city) => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`,{
            method:'GET',
        });
        const data =await res.json();
        if(!data) return console.log('internal server error');
        return data
    }catch(err) {
        console.log(err.message);
    }
})