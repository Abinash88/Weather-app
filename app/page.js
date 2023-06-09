"use client";

import Heading from "@/components/Heading";
import SearchLoca from "../components/SearchLoca";
import WeatherBox from "../components/WeatherBox";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <main
      style={{ backgroundColor: "#" }}
      className="flex min-h-screen  w-full flex-col items-center justify-between p-5 bg-gray-100"
    >
      {true ? (
        <>
          <Heading />
          <SearchLoca />
          <WeatherBox />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
