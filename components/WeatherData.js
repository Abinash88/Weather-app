import { CloudIcon, SunIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  FaCloudflare,
  FaCloudRain,
  FaCloudMeatball,
  FaCloudversify,
  FaCloudSun,
  FaCloudSunRain,
} from "react-icons/fa";

const WeatherData = ({ datas }) => {
  const [WeatherIcon, setWeatherIcon] = React.useState("");

  React.useEffect(() => {
    setWeatherIcon(
      datas?.weather ? datas?.weather[0]?.description.toLowerCase() : "sunny"
    );
  }, [true]);
  return (
    <div className="">
      <div
        key={datas.id}
        className="w-[700px] rounded-lg mt-8 md:mt-0 p-1 h-full lightwhite shadow-xl"
      >
        <div className="topweatherBox flex-col md:flex-row flex justify-center md:justify-between h-auto  md:h-[60%] w-[100%] rounded-md ">
          <div className="w-full mb-5 md:mb-0 md:w-[60%] h-full flex items-center justify-center flex-col">
            <h5 className="text-yellow-400  rounded-full pb-1 font-bold text-[20px] ">
              {datas?.sys?.country || null},
            </h5>
            <h5 className="text-[26px] text-white font-light">
              {datas?.name || null}
            </h5>
            <h2 className="text-white text-[55px] font-light">
              {Math.floor(datas?.main?.temp) || null}°
            </h2>
            <h6 className="text-[19px] text-white font-semibold ">
              {datas?.weather
                ? datas?.weather[0]?.description
                : "City not found"}
            </h6>
            <div className="text-white space-x-3 mt-2 text-[15px] font-normal">
              <span className="">
                <span className="font-semibold">Min Temp:</span>{" "}
                {datas?.main?.temp_min || null}
              </span>
              <span className="">
                <span className="font-semibold">Max Temp:</span>{" "}
                {datas?.main?.temp_max || null}
              </span>
            </div>
          </div>
          <div className="h-full flex items-center w-full md:w-[40%] relative right-0  justify-center">
            {WeatherIcon === "broken clouds" ? (
              <FaCloudflare className="text-[150px] text-yellow-500" />
            ) : WeatherIcon === "sunny" ? (
              <SunIcon className="h-[110px] text-yellow-500" />
            ) : WeatherIcon === "cloudy" ? (
              <CloudIcon className="h-[110px] text-yellow-500" />
            ) : WeatherIcon === "rainy" ? (
              <FaCloudRain className="text-[150px] text-yellow-500" />
            ) : WeatherIcon === "foggy" ? (
              <FaCloudMeatball className="text-[150px] text-yellow-500" />
            ) : WeatherIcon === "windy" ? (
              <FaCloudversify className="text-[150px] text-yellow-500" />
            ) : WeatherIcon === "partly cloudy" ? (
              <FaCloudSun className="text-[150px] text-yellow-500" />
            ) : WeatherIcon === "scattered clouds" ? (
              <FaCloudSun className="text-[150px] text-yellow-500" />
            ) : WeatherIcon === "clear sky" ? (
              <FaCloud className="text-[150px] text-yellow-500" />
            ) : (
              <FaCloudSunRain className="text-[150px] text-yellow-500" />
            )}
          </div>
        </div>
        <div className=" h-[40%] w-[100%] p-5 rounded-md ">
          <div className="p-3 flex justify-between flex-col md:flex-row items-center text-center">
            <div className="md:pb-0 pb-4">
              <h5 className="text-[26px] font-semibold text-white">
                {datas?.main?.humidity}%
              </h5>
              <h6 className="text-[16px] text-white font-semibold">Humidity</h6>
            </div>
            <div className="md:pb-0 pb-4">
              <h5 className="text-[26px] font-semibold text-white">
                {datas?.wind?.speed}MPH
              </h5>
              <h6 className="text-[15px] text-white font-semibold">Wind</h6>
            </div>
            <div className="md:pb-0 pb-4">
              <h5 className="text-[26px] font-semibold text-white">
                {datas?.main?.feels_like}°
              </h5>
              <h6 className="text-[16px] text-white font-semibold">
                Feels like
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
