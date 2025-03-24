
import FilterCartoons from "@/components/filter-cartoons";
import SearchInput from "@/components/search-input";
import { getAllOldSchoolCartoons } from "@/service/book-service";
import Link from "next/link";

export default async function OldSchoolCartoonsPage({ searchParams }) {
  const cartoonId = searchParams?.cartoons || "";

  const response = await getAllOldSchoolCartoons(cartoonId);
  const cartoons = response?.payload || [];

  return (
    <>
      <section>
        <div className="flex justify-between">
          {/* Homepage Button */}
          <Link
            href="/"
            className="bg-blue-500 w-[100px] h-10 mt-10 ml-10 rounded-xl mb-5 flex items-center justify-center text-white"
          >
            Homepage
          </Link>

          {/* Filter Section */}
          <div className="bg-gray-200 mr-5 rounded-xl mt-5">
            <FilterCartoons cartoons={cartoons} />
          </div>
        </div>
        <hr />

        {/* Cartoons Display Section */}
        <div className="flex">                    
          <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-8">
            <div className="mx-auto max-w-[1160px]">
              <main className="grid grid-cols-5">
                {cartoons.map((cartoon) => (
                  <div key={cartoon.id} className="text-center">
                    <img className="mb-7 rounded-xl" src={cartoon.image} alt={cartoon.title} />
                    <h3 className="text-[#0A2025] dark:text-white text-2xl font-bold">{cartoon.title}</h3>
                    <p className="mt-5 mb-8 text-[#0A2025] dark:text-white text-sm">
                      {cartoon.description}
                    </p>
                    <button className="text-[#3e9d26] text-sm font-semibold">Shop</button>
                  </div>
                ))}
              </main>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
