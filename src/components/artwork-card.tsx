import OptionIcon from "@/icons/option";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  img: string;
}

export default function ArtworkCard({ img }: Props) {
  return (
    <motion.div layout className="relative w-60 h-48">
      <Image src={img} fill alt="" className="rounded-lg bg-gray-200" />
    </motion.div>
  );
}
