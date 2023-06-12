"use client";

import { FetchingApi } from "@/ReduxCode/FetchWeather";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import WeatherData from "./WeatherData";

const WeatherBox = () => {
  const { data, status } = useSelector((state) => state.weather);
  const { city } = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log(city)
    dispatch(FetchingApi(city !== "" ? city.trim()  : "damak"));
    
  },[city]);

 
 
  if (status === "loading") {
    return <Loading />;
  }
  return (
    <div className="w-full h-auto md:h-[500px] flex justify-center">
      {data ? data?.map((datas) => {
        return (
          <>
            <WeatherData
            key={datas.id}
            datas={datas}
            /> 
          </>
        ); 
      }) : <div>No data avilable</div>}
    </div>
  );
};

export default WeatherBox;
