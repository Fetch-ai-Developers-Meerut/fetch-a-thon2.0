import React from "react";
import Image from "next/image";
import sponsor from "../assets/sponsor.png";
import fetchai from "../assets/fetchai.png";
import { sponsors } from "@/constants";

const SponsorSection = () => {
  const divCount = 4;
  const count = Array.from({ length: divCount });
  return (
    <section className="flex flex-col w-full text-white font-lexendexa gap-28">
      <div className="flex flex-col items-center justify-center relative">
        <Image src={sponsor} alt="prize" width={350} height={350} />
        <h1 className="absolute -bottom-3 text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl text-center font-normal">
          Sponsors
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="font-normal text-sm lg:text-2xl 2xl:text-3xl flex items-center justify-center">
          Title Sponsors{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 h-[420px] w-full gap-y-4 2xl:gap-x-2 2xl:gap-y-3">
          {sponsors.map((data, index) => (
            <div
              key={index}
              className={`${data.class} bg-gray-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent grid place-items-center px-10`}
            >
              <Image
                src={data.image}
                alt={data.title}
                className="min-w-1/2 max-w-2/3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
