import { communities } from "@/constants";
import Image from "next/image";
import React from "react";

const CommunitySection = () => {
  const divCount = 9;
  const count = Array.from({ length: divCount });
  return (
    <section className="flex flex-col items-center justify-center w-full text-white font-lexendexa gap-9">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl leading-[32px] text-center font-normal">
        Community
        <br />
        Partners
      </h1>
      <div className="grid grid-cols-2 2xl:grid-cols-3 w-full gap-x-4 gap-y-2 2xl:gap-x-2 2xl:gap-y-3">
        {communities.map((data, index) => (
          <div
            key={index}
            className=" bg-gray-300 h-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent grid place-items-center p-10"
          >
            <Image src={data.image} alt={data.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;
