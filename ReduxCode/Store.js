import { configureStore } from '@reduxjs/toolkit'
import FetchCityData  from '../ReduxCode/FetchCity'
import WeatherData  from '../ReduxCode/FetchWeather'
import CitiesSlice  from './CitySilce';

 const Store = configureStore({
  reducer: {
    myCity:FetchCityData,
    weather:WeatherData,
    cities:CitiesSlice
  }
})

export default Store;