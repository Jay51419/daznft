import Image from "next/image";
import { useState } from "react";
import Router from "next/router";
import Logo from "@/components/logo";

const data = [
  {
    img: "/onboarding/1.svg",
    h: "First Open App",
    p:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam duis viverra mattis nullam turpis scelerisque pharetra. Amet, tortor et tortor sed habitant vitae vel.",
  },
  {
    img: "/onboarding/2.svg",
    h: "Select a Service",
    p:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam duis viverra mattis nullam turpis scelerisque pharetra. Amet, tortor et tortor sed habitant vitae vel.",
  },
  {
    img: "/onboarding/1.svg",
    h: "Place a bid",
    p:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam duis viverra mattis nullam turpis scelerisque pharetra. Amet, tortor et tortor sed habitant vitae vel.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const skip = () => Router.push("/sign-in");

  const next = () => {
    if (activeIndex == data.length - 1) {
      skip();
    } else {
      setActiveIndex(activeIndex + 1);
      console.log(activeIndex);
    }
  };
  return (
    <main className="min-h-screen w-full">
      <nav className="w-full py-2 px-4 border-b">
        <div className="max-w-4xl w-full mx-auto">
          <Logo />
        </div>
      </nav>
      <div className="max-w-4xl w-full mx-auto p-8 pt-12">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center gap-y-3">
            <div className="h-[300px] lg:h-[400px] w-[300px] lg:w-[400px] relative">
              <Image
                fill
                priority
                src={data[activeIndex].img}
                alt=""
                className="object-contain p-2"
              />
            </div>

            <div className="flex gap-x-2">
              {data.map((_, i) => {
                return (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full  ${
                      i == activeIndex ? "bg-primary-light" : "bg-gray-300"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center gap-y-6 mt-10">
            <h4 className="text-2xl font-medium text-gray-700">
              {data[activeIndex].h}
            </h4>
            <p className="text-center text-sm text-gray-400">
              {data[activeIndex].p}
            </p>
            <button
              onClick={next}
              className="text-lg text-white w-full rounded-lg py-3 bg-gradient-to-r from-primary-light to-primary-dark"
            >
              Next
            </button>
            <button onClick={skip} className="text-lg text-gray-400">
              Skip
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
