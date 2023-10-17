import "../styles/globals.css";
import Layout from "../components/Layout";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function MyApp({ Component, pageProps, closeSidebar }) {

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

    // Add a click event listener to close the sidebar on mobile devices
    useEffect(() => {
      const handleMobileClick = (e) => {
        if (showContent) {
          // Check if the sidebar is open and the click is outside of it
          const sidebarElement = document.querySelector(".fixed.w-56.h-full.bg-stone-800");
          if (sidebarElement && !sidebarElement.contains(e.target)) {
            closeSidebar(); // Close the sidebar
          }
        }
      };
  
      if (showContent && window.innerWidth <= 768) {
        // Attach the event listener when the sidebar is open and on mobile devices
        document.addEventListener("click", handleMobileClick);
      }
  
      return () => {
        document.removeEventListener("click", handleMobileClick);
      };
    }, [showContent, closeSidebar]);

  return (
    <div>
      {showContent ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
      <div>
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden mx-4">
         <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl md:max-w-xl sm:max-w-xl">
          <div className="flex justify-center">
           <Image
            src= '/jolta-battery-logo-2.png'
            alt="jolta logo"
            width={250}
            height={150} 
            />
          </div>
          <form className="mt-6" onSubmit={toggleContent}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              name="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              name="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              className="required block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            href="#"
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
          {/* {error && <div className="text-red-500">{error}</div>} */}
          <div className="mt-2">
            <button className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-stone-800 rounded-md hover:bg-stone-900 focus:outline-none focus:bg-stone-900 mb-6" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
      )}
    </div>
  )
}

export default MyApp;
