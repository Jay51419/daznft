import Logo from "@/components/logo";
import NFTCard from "@/components/nft-card";
import SellerCard from "@/components/seller-card";
import AddIcon from "@/icons/add";
import BellIcon from "@/icons/bell";
import ExploreIcon from "@/icons/explore";
import HomeIcon from "@/icons/home";
import PersonIcon from "@/icons/person";
import SearchIcon from "@/icons/search";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex w-full">
        <nav className="fixed max-w-xs w-full h-screen bg-white hidden lg:block">
          <div className="flex w-full justify-center py-8">
            <Logo />
          </div>
          <div className="h-16"></div>
          <div className="relative flex flex-col items-center gap-y-6 ">
            <Link href="#" className="flex gap-x-4 items-center w-1/2">
              <HomeIcon className="w-8 h-8" />
              <span className="text-xl text-gray-900">Home</span>
            </Link>
            <Link href="#" className="flex gap-x-4 items-center w-1/2">
              <SearchIcon className="w-8 h-8" />
              <span className="text-xl text-gray-900">Search</span>
            </Link>
            <Link href="#" className="flex gap-x-4 items-center w-1/2">
              <div className="border-[3px] p-1 border-[#131330] rounded-lg ">
                <AddIcon className="w-4 h-4" />
              </div>
              <span className="text-xl text-gray-900">Add NFT</span>
            </Link>
            <Link href="#" className="flex gap-x-4 items-center w-1/2">
              <ExploreIcon className="w-8 h-8" />
              <span className="text-xl text-gray-900">Explore</span>
            </Link>
            <Link href="#" className="flex gap-x-4 items-center w-1/2">
              <PersonIcon className="w-8 h-8" color="rgb(17,24,39)" />
              <span className="text-xl text-gray-900">Profile</span>
            </Link>
          </div>
        </nav>
        <div className="lg:ml-[320px] w-full min-h-screen p-4 bg-gray-100">
          <div className="w-full max-w-3xl mx-auto space-y-6 ">
            <div className="flex items-center justify-between ">
              <h4 className="text-2xl font-bold text-gray-900">Marketplace</h4>
              <div className="p-4 rounded-full bg-white">
                <BellIcon />
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <h5 className="text-xl font-bold text-gray-600">Featured NFTs</h5>
              <Link href="#" className="text-xl font-bold text-primary-light">
                See all
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center overflow-x-hidden gap-x-2">
                {new Array(10).fill(0).map((_, i) => {
                  return (
                    <NFTCard
                      key={i}
                      img="/nft-bg/1.png"
                      name="Design Mania"
                      creator="Antonio"
                      price="0.09 ETH"
                      time="22min"
                    />
                  );
                })}
              </div>
              <div className="flex justify-center items-center gap-x-2">
                <div className="w-10 h-2 rounded-lg bg-gradient-to-r from-primary-light to-primary-dark"></div>
                <div className="w-2 h-2 rounded-lg bg-gradient-to-r from-primary-light to-primary-dark"></div>
                <div className="w-2 h-2 rounded-lg bg-gradient-to-r from-primary-light to-primary-dark"></div>
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <h5 className="text-xl font-bold text-gray-600">Top Sellers</h5>
              <Link href="#" className="text-xl font-bold text-primary-light">
                See all
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              {new Array(10).fill(0).map((_, n) => {
                return (
                  <SellerCard
                    key={n}
                    n={(n + 1).toString()}
                    img="/sellers/1.png"
                    name="Antonio"
                    price="$765,50"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
