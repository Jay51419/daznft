import Page from "@/components/page";
import SearchUserCard from "@/components/search-user-card";
import FilterIcon from "@/icons/filter";
import SearchIcon from "@/icons/search";
import Link from "next/link";
export default function Search() {
  return (
    <Page active="Search">
      <div className="w-full max-w-4xl mx-auto space-y-6 ">
        <div className="flex items-center justify-between gap-x-2 ">
          <div className="border focus-within:border-2 rounded-lg w-full focus-within:bg-white border-gray-400 h-12 flex items-center px-4 transition-colors duration-200">
            <input
              className="bg-transparent rounded-lg h-full w-full focus:outline-none  px-1 pb-1 placeholder-[#9999A7] placeholder:font-light placeholder:text-sm "
              type="search"
              placeholder="Search"
            />
            <SearchIcon className="stroke-gray-400 focus-within:stroke-primary-dark" />
          </div>
          <div className="p-4 rounded-lg bg-white">
            <FilterIcon />
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <h5 className="text-xl font-bold text-gray-600">Search Results</h5>
        </div>
        <div className="flex flex-col space-y-2 bg-white">
          {new Array(4).fill(0).map((_, n) => {
            return (
              <Link key={n} href={"/profile/1"}>
                <SearchUserCard
                  img="/sellers/2.jpg"
                  name="Antonio"
                  followers="1.2k"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </Page>
  );
}
