import FilterComponent from "@/components/filter-component";
import SearchInput from "@/components/search-input";
import { getAllBookCategories, getAllBooks } from "@/service/book-service";
import Link from "next/link";

export default async function BookCategoriesPage({ searchParams }) {
  const categoryId = (await searchParams)?.category || "";

  const response = await getAllBooks(categoryId);
  const books = await response.payload;
1
  const resCategories = await getAllBookCategories();
  const categories = await resCategories.payload;

  // const res = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
  // const books = await res.json();
  // const data = books.payload;
  // console.log("Books: ", books);
  // const book = await getAllBooks();
  return (
    <>
      <div className="flex w-full items-center gap-5 justify-between">
        <SearchInput />
        <button className="bg-blue-500 w-[100px] h-10 mt-10 ml-10 rounded-xl mb-5">
          Homepage
        </button>
        <FilterComponent categories={categories} />
      </div>
      <hr />
      {/* card  */}
      <div className="p-1 flex flex-wrap items-center justify-center mt-5 gap-10">
        <div className="flex h-screen">
          {/* <div className="relative group"> */}
          <div className="grid grid-cols-5 bg-white rounded-[20px] gap-4">
            {books.map((book) => (
              <div key={book.id} className="p-1">
                <div className="relative group px-2 py-2">
                  <Link href={"/books/${book.id}"}>
                    <img
                      src={book?.image}
                      alt="Card"
                      className="rounded-lg cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
