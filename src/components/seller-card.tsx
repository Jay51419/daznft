import Image from "next/image";

interface Props {
  n: string;
  img: string;
  name: string;
  price: string;
}

export default function SellerCard({ img, n, name, price }: Props) {
  return (
    <div className="w-full p-4 flex items-center justify-between bg-white rounded-lg">
      <div className="flex items-center gap-x-2 md:gap-x-4 ">
        <span className="font-bold text-lg text-gray-900">{n}</span>
        <Image
          src={img}
          height={46}
          width={46}
          alt=""
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold text-lg text-gray-900">{name}</span>
          <span className="text-xs text-gray-900">{price}</span>
        </div>
      </div>
      <button className="px-6 py-1 bg-gradient-to-r from-primary-light to-primary-dark rounded-lg">
        <span className="text-white">Follow</span>
      </button>
    </div>
  );
}
