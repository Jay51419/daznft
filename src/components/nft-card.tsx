import ClockIcon from "@/icons/clock";
import Image from "next/image";

interface Props {
  img: string;
  name: string;
  creator: string;
  price: string;
  time: string;
}

export default function NFTCard({ creator, img, price, name, time }: Props) {
  return (
    <div className="min-w-[265px]  bg-white p-5 rounded-3xl space-y-4">
      <div className="flex items-center justify-between">
        <Image
          src={img}
          height={163}
          width={225}
          alt=""
          className="rounded-3xl bg-gray-200"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h5 className="font-bold text-lg text-gray-900">{name}</h5>
          <span className="text-xs text-gray-400">by {creator}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-gray-400">Highest Bid</span>
          <span className="font-semibold text-xs text-primary-dark">
            {price}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-1">
          <ClockIcon />{" "}
          <span className="text-xs text-gray-700">{time} ago</span>
        </div>
        <button className="px-6 py-1 bg-gradient-to-r from-primary-light to-primary-dark rounded-lg">
          <span className="text-white">Bid</span>
        </button>
      </div>
    </div>
  );
}
