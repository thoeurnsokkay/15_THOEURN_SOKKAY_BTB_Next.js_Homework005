"use client";
import Link from "next/link";
import Image from "next/image";
import card1 from "@/images/card1.png";
import card2 from "@/images/card2.png";
import { useState } from "react";
import { card, form, image } from "@heroui/react";
import NavbarLink from "./navbar-link";

export const DashboardIcon = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-indigo-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
};

export const BookCategories = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
};

export const OldSchoolCartoons = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </svg>
  );
};

export const Movies = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
};

export const Music = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  );
};

export const Photography = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
};

export const Sport = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  );
};

export const Technology = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  );
};

export const Travel = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  );
};

export const Writing = () => {
  return (
    <svg
      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  );
};
export default function Homepage() {
  const Menu_Items = [
    {
      label: "Home",
      icon: <DashboardIcon />,
      href: "/home",
    },
    {
      label: "BookCategories",
      icon: <BookCategories />,
      href: "/bookCategories",
    },
    {
      label: "OldScool",
      icon: <OldSchoolCartoons />,
      href: "/oldSchool",
    },
    {
      label: "Movies",
      icon: <Movies />,
      href: "/movies",
    },
    {
      label: "Music",
      icon: <Music />,
      href: "/music",
    },
    {
      label: "Photograph",
      icon: <Photography />,
      href: "/photograph",
    },
    {
      label: "Sport",
      icon: <Sport />,
      href: "/sport",
    },
    {
      label: "Technology",
      icon: <Technology />,
      href: "/technology",
    },
    {
      label: "Travel",
      icon: <Travel />,
      href: "/travel",
    },
    {
      label: "Writing",
      icon: <Writing />,
      href: "/writing",
    },
  ];
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-80 bg-white ">
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="text-center">
            <img
              className="rounded-full w-[150px] mx-auto"
              src="https://i.pinimg.com/736x/89/59/dd/8959dda8d40907aa4ac5f7aea97ee2f2.jpg"
              alt="Black Monster"
            />
            <div className="mt-2 font-semibold">Black Monster</div>
            <div className="mt-2">
              <label htmlFor="email" className="mb-1">
                <a
                  href="mailto:blackmonster@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  blackmonster@gmail.com
                </a>
              </label>
            </div>
          </div>
        </div>
        
        {/* navbar  */}
        <nav className="mt-5 px-2 mb-0">
          {Menu_Items.map((item, index) => (
            <div key={index}>
              <NavbarLink {...item}/>
            </div>
          ))}

        </nav>

        <div>
          <button className="bg-gray-300 rounded-md w-full h-10 text-white mt-2 font-semibold">
            <div className="flex gap-3 ml-3 px-2">
              <span>
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </span>
              <span className="text-xl">Settings</span>
            </div>
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10  bg-gray-100 h-screen">
        <div className="w-full flex ">
          <form action="/search" className="w-full">
            <div className="relative ml-5 mr-5">
              <input
                type="text"
                name="q"
                className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                placeholder="search"
              />
              <button type="submit">
                <svg
                  className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-teal-300"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 ml-5 mr-5 bg-white rounded-xl shadow-md h-[650px]">
          <div>
            <button className="bg-blue-500 w-[100px] h-10 mt-10 ml-10 rounded-xl mb-5">
              Homepage
            </button>
          </div>
          <hr />
          {/* card  */}
          <div className="p-1 flex flex-wrap items-center justify-center mt-20 gap-10">
            
            <div className="flex h-screen">
              <div className="relative group">
                <button className="inline-block absolute ml-5 mt-5 px-5 py-1 overflow-hidden rounded-xl group text text-green-700 bg-gray-300 ">
                  Book
                </button>

                <Image src={card1} alt="Card" className="rounded-lg" />
                <span className="absolute top-[220px] text-2xl bottom-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 content-center text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                  View all Available Cartoons
                </span>
              </div>
            </div>

            <div className="flex h-screen">
              <div className="relative group">
                <button className="inline-block absolute ml-5 mt-5 px-5 py-1 overflow-hidden rounded-xl group text text-green-700 bg-gray-300 ">
                  Book
                </button>
                <Image src={card2} alt="Card" className="rounded-lg" />
                <span className="absolute top-[220px] text-2xl bottom-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 content-center text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                  View all Available Cartoons
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
