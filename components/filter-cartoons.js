"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FilterCartoons = ({ cartoons }) => {
  const pathname = usePathname();

  return (
    <div className="group relative cursor-pointer py-2 pr-5">
      <div className="flex items-center justify-between space-x-5 px-4 border rounded-xl">
        <Link
          href={"#"}
          className="menu-hover ml-5 py-2 text-base font-medium text-black lg:mx-4"
          // onClick=""
        >
          Select Categories
        </Link>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 text-gray-800 shadow-xl rounded-lg group-hover:visible">
        <Link
          href={pathname}
          className="ml-5 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        >
          Filter by Category
        </Link>
        {cartoons?.map((item) => {
          return (
            <Link
              key={item.id}
              href={"?category=" + item.id}
              className="ml-5 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            >
              {item.cartoon_genre || ""}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCartoons;
