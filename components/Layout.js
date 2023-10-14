import { useState, useEffect, Fragment } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Transition } from "@headlessui/react";


export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(!isMobile);
  

  function handleResize() {
    const newIsMobile = innerWidth <= 768;
    setIsMobile(newIsMobile);
  
    // Update showNav based on newIsMobile
    setShowNav(!newIsMobile);
  }
  

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    // Initial call to handleResize
    handleResize();

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} className="z-99"/>
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} />
      </Transition>
      <main
        className={`bg-stone-100 pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-2 md:px-10 ">{children}</div>
      </main>
    </>
  );
}
