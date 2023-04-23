import NFTCard from "@/components/nft-card";
import SellerCard from "@/components/seller-card";
import BellIcon from "@/icons/bell";
import Link from "next/link";
import Page from "../components/page";

const imgs = [
  "/nft-bg/1.png",
  "/nft-bg/2.jpg",
  "/nft-bg/3.jpg",
  "/nft-bg/4.jpg",
  "/nft-bg/5.jpg",
  "/nft-bg/6.jpg",
];

export default function Home() {
  return (
    <Page active="Home">
      <div className="w-full max-w-4xl mx-auto space-y-6 ">
        <div className="flex items-center justify-between ">
          <h4 className="text-2xl font-bold text-gray-900">Marketplace</h4>
          <div className="p-4 rounded-full bg-white">
            <BellIcon />
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <h5 className="text-xl font-bold text-gray-600">Featured NFTs</h5>
          <Link
            href="/explore"
            className="text-xl font-bold text-primary-light"
          >
            See all
          </Link>
        </div>
        <div className="space-y-4">
          <div className="flex items-center  gap-x-2">
            {imgs.map((img, i) => {
              return (
                <NFTCard
                  key={i}
                  img={img}
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
          {new Array(4).fill(0).map((_, n) => {
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
    </Page>
  );
}
