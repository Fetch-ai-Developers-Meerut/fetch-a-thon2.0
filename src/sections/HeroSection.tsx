import React from "react";
import { HiArrowRight } from "react-icons/hi";
const HeroSection = () => {
  return <section className="h-screen flex flex-col justify-center items-center text-white">
    <main className="h-1/3 md:h-1/2 flex flex-col justify-center items-center my-5">
      <h1 className="-text-1xl md:text-sm">INTRODUCING</h1>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-2 sm:px-0">Fetch-<span className="text-red-500">a</span>-Thon</h1>
    </main>
    <button className="py-2 w-32 sm:w-40 rounded-2xl m-1 bg-white ">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-grad font-semibold">Register Now</h1></button>
    <button className="py-2 w-32 sm:w-40 flex justify-center items-center rounded-2xl border-[1px] border-white m-1">Past events <HiArrowRight /> </button>

  </section>;
};

export default HeroSection;
