import React from "react";
import Image from "next/image";
import mentors from "../assets/mentors.png";
import { MdArrowOutward } from "react-icons/md";
import {  teams } from "@/constants";

const TeamSection = () => {
  return (
    <section className="flex flex-col w-full min-h-screen text-white font-lexendexa">
      <div className="flex flex-col items-center justify-center relative">
        <Image
          src={mentors}
          alt="prize"
          width={300}
          height={300}
          className="opacity-60"
        />
        <h1 className="absolute -bottom-10 text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl text-center font-normal">
          Our Team
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center w-full gap-y-4 gap-x-1 2xl:gap-x-2 2xl:gap-y-3">
          {teams.map((team, index) => (
            <div
              key={index}
              className="w-full max-w-80 h-full max-h-[420px] flex gap-3 flex-col items-center justify-center bg-gray-300 text-center rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent p-5"
            >
              <Image src={team.img} alt="mentor" className="w-64 h-64" />
              <h2 className="text-xxs lg:text-xl font-normal leading-loose">
                {team.title}
              </h2>
              <p className="font-light text-xxs lg:text-xs text-center">
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
