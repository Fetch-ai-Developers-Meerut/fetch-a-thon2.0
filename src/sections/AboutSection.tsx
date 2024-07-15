import React from "react";
import { FaCheck } from "react-icons/fa6";
import { about } from "@/constants";

export default function AboutSection() {
  return (
    <section className="min-h-fit w-full lg:flex items-center justify-center gap-5 text-white z-0 font-lexendexa">
      <div className="flex w-full flex-col gap-12 py-16 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 2xl:justify-between">
        <div className="flex flex-col w-full xl:min-w-[600px] 2xl:max-w-[600px]  gap-4 2xl:gap-12">
          <h1 className="font-normal text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl 2xl:leading-[67px]">
            What is
            <br />
            fetch-a-thon?
          </h1>
          <p className="font-light font-lexend text-xs sm:text-base opacity-50">
            {about.description}
          </p>
        </div>
        <div className="w-full max-w-[37rem]">
          <h1 className="font-normal text-xs tracking-wider mb-6">
            Event Highlight
          </h1>
          <ul className="flex flex-col gap-3">
            {about.list.map((highlight, index) => (
              <li
                key={index}
                className="flex items-center px-5 sm:px-8 tracking-wider gap-4 w-full max-w-[550px] h-12 sm:h-[70px] rounded-full border-2 border-slate-200"
              >
                <div className="min-w-4 max-h-4 max-w-4 min-h-4 bg-white rounded-md flex items-center justify-center">
                  <FaCheck className="text-black text-xs" />
                </div>
                <h2 className="font-light text-xxs sm:text-base">
                  {highlight}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
