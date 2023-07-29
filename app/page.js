"use client";

import Heading from "@/components/Heading";
import SearchLoca from "../components/SearchLoca";
import WeatherBox from "../components/WeatherBox";
import Loading from "@/components/Loading";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {typeof window !== 'undefined' &&
          <script src="https://kit.fontawesome.com/d24d558fc0.js" crossorigin="anonymous"></script>
        }
      </Head>
      <main
        style={{ backgroundColor: "#" }}
        className="mainbody flex h-auto md:min-h-screen  w-full flex-col items-center justify-between p-5 bg-gray-100"
      >
        {true ? (
          <>
            <Toaster />
            <Heading />
            <SearchLoca />
            <WeatherBox />
          </>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
}
