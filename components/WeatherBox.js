"use client";

import { FetchingApi } from "@/ReduxCode/FetchWeather";
import { CloudIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import WeatherData from "./WeatherData";

const WeatherBox = () => {
  const { data, status } = useSelector((state) => state.weather);
  const { city } = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    const mainCity = city !== "" ? city : "kathmandu";
    dispatch(FetchingApi(mainCity));
  }, [city]);

  useEffect(() => {
    if(!data[0]?.weather) {
      dispatch(FetchingApi('kathmandu'))
    }
  },[data]);

  if (status === "loading") {
    return <Loading />;
  }
  return (
    <div className="w-full h-auto md:h-[500px] flex justify-center">
      {data ? data?.map((datas, index) => {
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
