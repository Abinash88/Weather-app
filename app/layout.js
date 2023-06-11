"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import Store from "@/ReduxCode/Store";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <>
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
