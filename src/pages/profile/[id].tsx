import { useRouter } from "next/router";
import Image from "next/image";

import Page from "@/components/page";
import BackIcon from "@/icons/back";
import ShareIcon from "@/icons/share";
import OptionIcon from "@/icons/option";
import { useState } from "react";
import SearchUserCard from "@/components/search-user-card";
import ActivityCard from "@/components/activity-card";
import { motion } from "framer-motion";
import ArtworkCard from "@/components/artwork-card";

type tab = "Activity" | "Artworks" | "Likes";
export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState<tab>("Activity");
  return (
    <Page active="None">
      <div className="w-full max-w-4xl mx-auto space-y-6 ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-6">
            <button onClick={()=>router.back()} >
            <BackIcon />
            </button>
            <h4 className="font-semibold text-2xl text-gray-900">Profile</h4>
          </div>
          <div className="flex gap-x-2">
            <div className="w-11 h-11 rounded-full border-2 flex justify-center items-center">
              <ShareIcon />
            </div>
            <div className="w-11 h-11 rounded-full border-2 flex justify-center items-center">
              <OptionIcon />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-x-4">
          <div className="rounded-lg border-[4px]  relative h-[150px] lg:h-[200px] w-[150px] lg:w-[200px] border-white">
            <Image
              src="/sellers/2.jpg"
              fill
              alt=""
              className="  object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-gray-700">
                Claire
              </span>
              <span className="font-semibold text-[10px] text-gray-400">
                @claire11
              </span>
            </div>

            <div className="max-w-xs w-full flex items-center">
              <div className=" flex flex-col items-center px-4">
                <span className="font-bold text-lg text-gray-900">145</span>
                <span className="font-semibold text-[10px] text-gray-400">
                  Following
                </span>
              </div>
              <div className="w-[1px] h-6 bg-gray-200"></div>
              <div className=" flex flex-col items-center px-4">
                <span className="font-bold text-lg text-gray-900">2.5k</span>
                <span className="font-semibold text-[10px] text-gray-400">
                  Follower
                </span>
              </div>
              <div className="w-[1px] h-6 bg-gray-300"></div>
              <div className=" flex flex-col items-center px-4">
                <span className="font-bold text-lg text-gray-900">7.5k</span>
                <span className="font-semibold text-[10px] text-gray-400">
                  Likes
                </span>
              </div>
            </div>
            <button className="px-6 py-1 bg-gradient-to-r from-primary-light to-primary-dark rounded-lg">
              <span className="text-white">Follow</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-evenly w-full bg-gray-300 rounded-lg">
          <button
            onClick={() => setActiveTab("Artworks")}
            className={`transition duration-200 py-2 px-6 font-semibold  rounded-lg bg-gradient-to-r ${
              activeTab === "Artworks"
                ? "text-white from-primary-light to-primary-dark"
                : "text-gray-600"
            }`}
          >
            Artworks
          </button>
          <button
            onClick={() => setActiveTab("Activity")}
            className={`transition duration-200 py-2 px-6 font-semibold  rounded-lg bg-gradient-to-r ${
              activeTab === "Activity"
                ? "text-white from-primary-light to-primary-dark"
                : "text-gray-600"
            }`}
          >
            Activity
          </button>
          <button
            onClick={() => setActiveTab("Likes")}
            className={`transition duration-200 py-2 px-6 font-semibold  rounded-lg bg-gradient-to-r ${
              activeTab === "Likes"
                ? "text-white from-primary-light to-primary-dark"
                : "text-gray-600"
            }`}
          >
            Likes
          </button>
        </div>
        <motion.div layout>
          {activeTab == "Activity" && <ActivityTab />}
          {activeTab == "Artworks" && <ArtworkTab />}
          {activeTab == "Likes" && <LikeTab />}
        </motion.div>
      </div>
    </Page>
  );
}
const imgs = [
  "/nft-bg/1.png",
  "/nft-bg/2.jpg",
  "/nft-bg/3.jpg",
  "/nft-bg/4.jpg",
  "/nft-bg/5.jpg",
  "/nft-bg/6.jpg",
];

const ActivityTab = () => {
  return (
    <div className="flex flex-col space-y-2 bg-white">
      {imgs.map((img, n) => {
        return (
          <ActivityCard
            key={n}
            img={img}
            name="Design Mafia"
            bid="0,2 by John doe"
          />
        );
      })}
    </div>
  );
};

const ArtworkTab = () => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-4 bg-white p-2">
      {imgs.map((img, n) => {
        return <ArtworkCard key={n} img={img} />;
      })}
    </div>
  );
};

const LikeTab = () => {
  return (
    <div className="flex flex-col space-y-2 bg-white">
      {new Array(4).fill(0).map((_, n) => {
        return (
          <SearchUserCard
            key={n}
            img="/sellers/1.png"
            name="Antonio"
            followers="1.2k"
          />
        );
      })}
    </div>
  );
};
