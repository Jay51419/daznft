import Image from "next/image";

interface Props {
  img: string;
  name: string;
  followers: string;
}

export default function SearchUserCard({ img, name, followers }: Props) {
  return (
    <div className="w-full p-4 flex items-center justify-between border-b rounded-lg">
      <div className="flex items-center gap-x-2 md:gap-x-4 ">
        <div className="relative h-12 w-12">
          <Image src={img} fill alt="" className="rounded-full bg-gray-200 object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg text-gray-900">{name}</span>
          <span className="text-xs text-gray-400">{followers} Followers</span>
        </div>
      </div>
      <button className="px-6 py-1 bg-gradient-to-r from-primary-light to-primary-dark rounded-lg">
        <span className="text-white">Follow</span>
      </button>
    </div>
  );
}
