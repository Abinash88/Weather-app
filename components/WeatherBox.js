'use client'

import { FetchingApi } from '@/ReduxCode/FetchWeather';
import { CloudIcon, SunIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const WeatherBox = () => {

  const {data} = useSelector(state => state.weather)
  const {city} = useSelector(state => state.cities)
  const dispatch = useDispatch();
  const defaultcity = 'kathmandu'



  useEffect(() => {
    dispatch(FetchingApi(city || defaultcity))
  },[]) 


  return (
    <div className='w-full h-auto md:h-[500px] flex justify-center'>
      {data?.map((data) => {
        console.log(data)
        return (<>
          <div key={data?.weather[0]?.id} className="w-[700px] p-1 h-full bg-white shadow-xl">
            <div className="topweatherBox flex-col md:flex-row flex justify-center md:justify-between h-auto  md:h-[60%] w-[100%] rounded-md bg-slate-600">
              <div className="w-full mb-5 md:mb-0 md:w-[60%] h-full flex items-center justify-center flex-col">
                <h5  className='text-yellow-400  rounded-full pb-1 font-bold text-[20px] '>{data?.sys?.country},</h5>
                <h5 className='text-[26px] text-white font-light'>{data?.name}</h5>
                <h2 className='text-white text-[55px] font-light'>{Math.floor(data?.main?.temp)}°</h2>
                <h6 className='text-[19px] text-white font-semibold '>{data?.weather[0]?.description}</h6>
                <div className="text-white space-x-3 mt-2 text-[15px] font-normal">
                  <span className=''><span className='font-semibold'>Min Temp:</span>  {data?.main?.temp_min}</span>
                  <span className=''><span className='font-semibold'>Max Temp:</span> {data?.main?.temp_max}</span>
                </div>
              </div>
              <div className="h-full flex items-center w-full md:w-[40%] relative right-0  justify-center">
                <SunIcon className='h-[110px] text-yellow-500' />
              </div>
            </div>
            <div className=" h-[40%] w-[100%] p-5 rounded-md">

            </div>
          </div>
        </>)

      })

      }

    </div>
  )
}

export default WeatherBox;