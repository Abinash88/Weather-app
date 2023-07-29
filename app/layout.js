"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import Store from "@/ReduxCode/Store";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <>
     <Head>
        {typeof window !== 'undefined' &&
          <script src="https://kit.fontawesome.com/d24d558fc0.js" crossorigin="anonymous"></script>
        }
      </Head>
      <Provider store={Store}>
          <html lang="en">
            <body className={`${inter.className} `}>
              <div className="flex">
                {/* <Dashboard /> */}
                {children}
              </div>
            </body>
          </html>
      </Provider>
    </>
  );
}
