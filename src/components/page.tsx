import Logo from "@/components/logo";
import AddIcon from "@/icons/add";
import ExploreIcon from "@/icons/explore";
import HomeIcon from "@/icons/home";
import PersonIcon from "@/icons/person";
import SearchIcon from "@/icons/search";
import Link from "next/link";

export type tab = "Home" | "Search" | "Add NFT" | "Explore" | "Profile";

interface Props {
  children: JSX.Element;
  active: tab;
}

export default function Page({ children, active }: Props) {
  return (
    <main className="min-h-screen w-full">
      <div className="flex w-full">
        <nav className="fixed max-w-xs w-full h-screen bg-white hidden lg:block">
          <div className="flex w-full justify-center py-8">
            <Logo />
          </div>
          <div className="h-16"></div>
          <div className="relative flex flex-col items-center gap-y-6 ">
            <Link href="/home" className="flex gap-x-4 items-center w-1/2">
              <HomeIcon
                className={`w-8 h-8 ${
                  active == "Home" ? "stroke-primary-dark" : "stroke-gray-900"
                }`}
              />
              <span className="text-xl text-gray-900">Home</span>
            </Link>
            <Link href="/search" className="flex gap-x-4 items-center w-1/2">
              <SearchIcon
                className={`w-8 h-8 ${
                  active == "Search" ? "stroke-primary-dark" : "stroke-gray-900"
                }`}
              />
              <span className="text-xl text-gray-900">Search</span>
            </Link>
            <Link href="/add-nft" className="flex gap-x-4 items-center w-1/2">
              <div
                className={`border-[3px] p-1 rounded-lg ${
                  active == "Add NFT"
                    ? "border-primary-dark"
                    : "border-gray-900"
                } `}
              >
                <AddIcon
                  className={`w-4 h-4 ${
                    active == "Add NFT"
                      ? "stroke-primary-dark"
                      : "stroke-gray-900"
                  }`}
                />
              </div>
              <span className="text-xl text-gray-900">Add NFT</span>
            </Link>
            <Link href="/explore" className="flex gap-x-4 items-center w-1/2">
              <ExploreIcon
                className={`w-8 h-8 ${
                  active == "Explore"
                    ? "stroke-primary-dark"
                    : "stroke-gray-900"
                }`}
              />
              <span className="text-xl text-gray-900">Explore</span>
            </Link>
            <Link href="/profile" className="flex gap-x-4 items-center w-1/2">
              <PersonIcon
                className={`w-8 h-8 ${
                  active == "Profile"
                    ? "stroke-primary-dark"
                    : "stroke-gray-900"
                }`}
              />
              <span className="text-xl text-gray-900">Profile</span>
            </Link>
          </div>
        </nav>
        <div className="lg:ml-[320px] w-full min-h-screen p-4 bg-gray-100">
          {children}
        </div>
      </div>
    </main>
  );
}
