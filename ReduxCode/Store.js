import { configureStore } from '@reduxjs/toolkit'
import FetchCityData  from '../ReduxCode/FetchCity'
import WeatherData  from '../ReduxCode/FetchWeather'
import CitiesSlice  from './CitySilce';
import TypeCity  from './TypeCityName';

 const Store = configureStore({
  reducer: {
    myCity:FetchCityData,
    weather:WeatherData,
    cities:CitiesSlice,
    realtimeCity:TypeCity
  }
})

export default Store;