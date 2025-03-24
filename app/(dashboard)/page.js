// "use client";
import Image from "next/image";
import Link from "next/link";
import card1 from "@/images/card1.png";
import card2 from "@/images/card2.png";

export default function DashboardPage() {
  return (
    <>
      <div className="mt-10 ml-5 mr-5 rounded-xl h-[650px]">
        <div>
          <button className="bg-blue-500 w-[100px] h-10 mt-10 ml-10 rounded-xl mb-5">
            Homepage
          </button>
        </div>
        <hr />

        {/* Cards */}
        <div className="p-1 flex flex-wrap items-center justify-center mt-20 gap-10">
          {/* First Card */}
          <div className="flex h-screen">
            <div className="relative group">
              <button className="inline-block absolute ml-5 mt-5 px-5 py-1 overflow-hidden rounded-xl group text text-green-700 bg-gray-300">
                Book
              </button>

              <Link
                href="/bookCatogories
            "
              >
                <Image
                  src={card1}
                  alt="Card"
                  className="rounded-lg cursor-pointer"
                />
              </Link>

              <span className="absolute top-[220px] text-2xl bottom-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 content-center text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                View all Available Cartoons
              </span>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex h-screen">
            <div className="relative group">
              <button className="inline-block absolute ml-5 mt-5 px-5 py-1 overflow-hidden rounded-xl group text text-green-700 bg-gray-300">
                Book
              </button>

              <Link href="/oldSchoolCartoons">
                <Image
                  src={card2}
                  alt="Card"
                  className="rounded-lg cursor-pointer"
                />
              </Link>

              <span className="absolute top-[220px] text-2xl bottom-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 content-center text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                View all Available Movies
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
