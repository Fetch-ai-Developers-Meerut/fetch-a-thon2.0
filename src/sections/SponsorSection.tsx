import React from "react";
import Image from "next/image";
import fetchai from "../assets/fetchai.png";
import { sponsors } from "@/constants";

const SponsorSection = () => {
  const divCount = 4;
  const count = Array.from({ length: divCount });
  return (
    <section className="flex flex-col w-full text-white font-lexendexa gap-12 pt-16 pb-12">
      <div className="flex flex-col items-center justify-center relative">
        <Image src="/sponsor.png" alt="prize" width={600} height={10} />
        <h1 className="absolute -bottom-3 text-3xl sm:text-3xl lg:text-4xl 2xl:text-6xl text-center font-normal">
          Sponsors
        </h1>
      </div>
      <div className="flex flex-col gap-2 sm:gap-6">
        <h2 className="font-normal font-lexend text-sm sm:text-xl lg:text-2xl 2xl:text-3xl flex items-center justify-center">
          Title Sponsors{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 min-h-[420px] w-full gap-y-4 2xl:gap-x-2 2xl:gap-y-3">
          {sponsors.map((data, index) => (
            <div
              key={index}
              className={`${data.class} bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent grid place-items-center px-20`}
            >
              <Image src={data.image} alt={data.title} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
