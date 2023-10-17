// SideBar 

import { forwardRef } from "react";
import Link from "next/link";
import { GlobeAltIcon, UsersIcon, PresentationChartLineIcon, Cog8ToothIcon, ExclamationTriangleIcon, CircleStackIcon, PencilIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const SideBar = forwardRef(({ closeSidebar }, ref) => {
  const router = useRouter();

  // Setting sub menu styling applying logic
  // it Checks if any of the submenu links is active
  const isSubmenuActive =
    router.pathname === "/settingsSubMenu/CustomerSetup" ||
    router.pathname === "/settingsSubMenu/ManageUser" ||
    router.pathname === "/settingsSubMenu/ManageModule";

  return (
    <div ref={ref} className="fixed w-56 h-full bg-stone-800 shadow-sm z-50">
      <div className="flex justify-center mt-6 mb-4">
        <picture>
          <Image
            src='/jolta-battery-logo.png'
            alt="jolta logo"
            width={180}
            height={180}
          />
        </picture>
      </div>
      <div className="flex flex-col">

        {/* Global view menu    */}

        <Link href="/"   onClick={() => closeSidebar()}>
          <div
            className={`pl-6 py-3 mx-3 rounded text-left cursor-pointer mb-3 flex items-left transition-colors  ${router.pathname == "/"
              ? "bg-green-600 text-green-900 font-bold"
              : "text-white hover:bg-green-600 hover:text-white"
              }`}
          >
            <div className="mr-2">
              <GlobeAltIcon className="h-7 w-7" />
            </div>
            <div>
              <p className="mt-1">Global View</p>
            </div>
          </div>
        </Link>

        {/* Customer View menu */}

        <Link href="/customerView"   onClick={() => closeSidebar()}>
          <div
            className={`pl-6 py-3 mx-3 rounded text-left cursor-pointer mb-3 flex items-left transition-colors ${router.pathname == "/customerView"
              ? "bg-green-600 text-green-900 font-bold"
              : "text-white hover:bg-green-600 hover:text-white "
              }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-7 w-7" />
            </div>
            <div>
              <p>Customer View</p>
            </div>
          </div>
        </Link>

        {/* Site View menu  */}

        <Link href="/siteView"   onClick={() => closeSidebar()}>
          <div
            className={`pl-6 py-3 mx-3 rounded text-left cursor-pointer mb-3 flex items-left transition-colors ${router.pathname == "/siteView"
              ? "bg-green-600 text-green-900 font-bold"
              : "text-white hover:bg-green-600 hover:text-white "
              }`}
          >
            <div className="mr-2">
              < PresentationChartLineIcon className="h-7 w-7" />
            </div>
            <div>
              <p>Site View</p>
            </div>
          </div>
        </Link>

        {/* Single Module menu  */}

        <Link href="/singleModule"   onClick={() => closeSidebar()}>
          <div
            className={`pl-6 py-3 mx-3 rounded text-left cursor-pointer mb-3 flex items-left transition-colors ${router.pathname == "/singleModule"
              ? "bg-green-600 text-green-900 font-bold"
              : "text-white hover:bg-green-600 hover:text-white "
              }`}
          >
            <div className="mr-2">
              < CircleStackIcon className="h-7 w-7" />
            </div>
            <div>
              <p>Single Module</p>
            </div>
          </div>
        </Link>

        {/* Alerts menu */}

        <Link href="/Alerts"   onClick={() => closeSidebar()}>
          <div
            className={`pl-6 py-3 mx-3 rounded text-left cursor-pointer mb-3 flex items-left transition-colors ${router.pathname == "/Alerts"
              ? "bg-green-600 text-green-900 font-bold"
              : "text-white hover:bg-green-600 hover:text-white "
              }`}
          >
            <div className="mr-2">
              < ExclamationTriangleIcon className="h-7 w-7" />
            </div>
            <div>
              <p>Alerts</p>
            </div>
          </div>
        </Link>

        {/* Drop down menu of Setting Menu  */}
        <Menu as="div" className="relative text-left">
          <div>
            <Menu.Button className={`pl-6 py-3 mx-3 px-6 rounded text-left cursor-pointer mb-3 items-left      transition-colors   ${isSubmenuActive
              ? "bg-green-600 text-green-900 font-bold"
              : "text-white hover:bg-green-600 hover:text-white "
              }`}>
              <div className="flex flex-direction-row ">
                <div className="mr-2">
                  < Cog8ToothIcon className="h-7 w-7" />
                </div>
                <div>
                  <p className="flex justify-between">Settings</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-1 ml-10">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>

              </div>
            </Menu.Button>

          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="fixed left-5 z-50 ml-5 rounded shadow-sm w-100">
              <div className="p-1">
                {/* First link of setting sub menu */}

                <Menu.Item>
                  <Link
                    onClick={() => closeSidebar()}
                    href="/settingsSubMenu/ManageUser"
                    className={`flex hover:bg-green-600 hover:text-white text-white rounded p-2 text-sm group transition-colors items-center mb-2 ${router.pathname == "/settingsSubMenu/ManageUser"
                      ? "bg-green-600 text-green-900 font-bold"
                      : "text-white hover:bg-green-600 hover:text-white "
                      }`}
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Manage User
                  </Link>
                </Menu.Item>

                {/* Second link of setting sub menu */}

                <Menu.Item>
                  <Link
                    onClick={() => closeSidebar()}
                    href="/settingsSubMenu/ManageModule"
                    className={`flex hover:bg-green-600 hover:text-white text-white rounded p-2 text-sm group transition-colors items-center mb-2 ${router.pathname == "/settingsSubMenu/ManageModule"
                      ? "bg-green-600 text-green-900 font-bold"
                      : "text-white hover:bg-green-600 hover:text-white "
                      }`}
                  >
                    <CreditCardIcon className="h-4 w-4 mr-2" />
                    Manage Module
                  </Link>
                </Menu.Item>

                {/* Third link of setting sub menu */}

                <Menu.Item>
                  <Link
                    onClick={() => closeSidebar()}
                    href="/settingsSubMenu/CustomerSetup"
                    className={`flex hover:bg-green-600 hover:text-white text-white rounded p-2 text-sm group transition-colors items-center mb-2 ${router.pathname == "/settingsSubMenu/CustomerSetup"
                      ? "bg-green-600 text-green-900 font-bold"
                      : "text-white hover:bg-green-600 hover:text-white "
                      }`}
                  >
                    <UserIcon className="h-4 w-4 mr-2" />
                    Customer Setup
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
