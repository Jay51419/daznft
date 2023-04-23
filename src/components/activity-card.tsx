import OptionIcon from "@/icons/option";
import Image from "next/image";

interface Props {
  img: string;
  name: string;
  bid: string;
}

export default function ActivityCard({ img, name, bid }: Props) {
  return (
    <div className="w-full p-4 flex items-center justify-between border-b rounded-lg">
      <div className="flex items-center gap-x-2 md:gap-x-4 ">
        <div className="relative w-20 h-20">
          <Image src={img} fill alt="" className="rounded-lg bg-gray-200" />
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-lg text-gray-900">{name}</span>
          <span className="font-semibold text-xs text-gray-400">
            Bid: <span className="text-primary-dark">{bid}</span>
          </span>
          <div className="flex  items-center gap-x-1 text-gray-400 text-xs mt-4">
            17/02/22<div className="h-1 w-1 rounded-full bg-gray-400"></div>
            12.22 pm
          </div>
        </div>
      </div>
      <div className="px-4">
        <OptionIcon />
      </div>
    </div>
  );
}
