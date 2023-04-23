import NFTCard from "@/components/nft-card";
import Page from "@/components/page";
import BellIcon from "@/icons/bell";
import { useState } from "react";
type tab = "All" | "Following";
const imgs = [
  "/nft-bg/1.png",
  "/nft-bg/2.jpg",
  "/nft-bg/3.jpg",
  "/nft-bg/4.jpg",
  "/nft-bg/5.jpg",
  "/nft-bg/6.jpg",
];
export default function Explore() {
  const [activeTab, setActiveTab] = useState<tab>("All");

  return (
    <Page active="Explore">
      <div className="w-full max-w-4xl mx-auto space-y-6 ">
        <div className="flex items-center justify-between ">
          <h4 className="text-2xl font-bold text-gray-900">Explore</h4>
          <div className="p-4 rounded-full bg-white">
            <BellIcon />
          </div>
        </div>
        <div className="flex items-center justify-evenly w-full bg-white rounded-lg">
          <button
            onClick={() => setActiveTab("All")}
            className={`transition duration-200 py-2 w-36 font-semibold  rounded-lg bg-gradient-to-r ${
              activeTab === "All"
                ? "text-white from-primary-light to-primary-dark"
                : "text-gray-600"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActiveTab("Following")}
            className={`transition duration-200 py-2 w-36 font-semibold  rounded-lg bg-gradient-to-r ${
              activeTab === "Following"
                ? "text-white from-primary-light to-primary-dark"
                : "text-gray-600"
            }`}
          >
            Following
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </Page>
  );
}
