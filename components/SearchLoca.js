"use client";

import * as React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "@/ReduxCode/CitySilce";
import { useEffect } from "react";
import { FetchCity } from "@/ReduxCode/FetchCity";

const SearchLoca = () => {
  const dispatch = useDispatch();
  const [hide, setHide] = React.useState(false);
  const [DisplayData, setDisplayData] = React.useState();
  const { data } = useSelector((state) => state.myCity);
  const [GetCities, setGetCities] = React.useState("");
  const GetFocus = React.useRef(null);

  if (typeof document !== "undefined") {
    if (GetFocus.current === document.activeElement) {
      document.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
          dispatch(Add(GetFocus.current.value));
          setHide(false);
        }
      });
    }
  }

  
  const ClickButton =  () => {
    dispatch(Add(GetFocus.current.value));
          setHide(false);
  }

  useEffect(() => {
    dispatch(FetchCity());
  }, []);

  const SearchData = (inputdata, mainData) => {
    return mainData.filter((item) =>
      item.toLowerCase().includes(inputdata.toLowerCase())
    );
  };

  const Showbox = (e) => {
    const citys = e.target.value;
    setGetCities(citys);

    // showing and hiding box start
    if (e.target.value.length > 0) {
      setHide(true);
    } else {
      setHide(false);
    }
    // showing and hiding box end

    const myCities = [];

    for (let i = 0; i < data.length; i++) {
      for (let l = 0; l < data[i].cities.length; l++) {
        myCities.push(data[i].cities[l]);
      }
    }

    const inputdata = e.target.value;
    const SearchResults = SearchData(inputdata, myCities);
    setDisplayData((data) => ({ ...data, SearchResults }));
  };

  const GetData = (e) => {
    const data = e.target.innerText;
    dispatch(Add(data));
    setGetCities("");
    setHide(false);
  };

  const DisplayItems = DisplayData?.SearchResults?.splice(0, 5);

  return (
    <div className="w-[100%] h-[30%] flex-col relative flex items-center justify-start top-0 overflow-visible">
      <div className="flex w-[100%] md:w-[70%] items-center flex-col mt-3 justify-center relative ">
        <div className="w-[90%] md:w-[70%] shadow-xl border-2 items-center bg-gray-100 rounded-full px-3 flex">
          <input
            onChange={Showbox}
            type="search"
            ref={GetFocus}
            className="w-[100%] search bg-transparent h-10 py-2 px-4 "
            placeholder="Search city..."
            value={GetCities}
            required
          />
          <MagnifyingGlassIcon onClick={ClickButton} className="h-7 cursor-pointer" />
        </div>
        <div
          className={`w-[90%] md:w-[70%] ${
            hide ? "visible" : "hidden"
          } overflow-auto hidebox absolute top-11 shadow-xl py-2 bg-gray-100 rounded-lg h-auto`}
        >
          {DisplayItems?.length > 0 ? (
            DisplayItems?.map((item, index) => {
              return (
                <div className="w-full py-1 cursor-pointer hover:bg-gray-200 mb-1 px-3 bg-gray-100">
                  <div key={index} onClick={(e) => GetData(e)} className="">
                    {item}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full h-full text-gray-600 font-bold flex items-center justify-center ">
              Hit! Enter if No Data Found!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchLoca;
