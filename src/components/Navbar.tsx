"use client";
import { nav } from "@/constants";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sticky top-2 z-50">
      <div className="mx-auto max-w-full">
        <div className="flex justify-between bg-navGradient h-14 sm:h-20 z-50 py-5 px-4 sm:pl-9 sm:pr-6 border border-navbarBorder rounded-full backdrop-blur-sm">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="fetchaimeerut-logo.svg"
                className="h-10 w-10 sm:h-14 sm:w-14"
              />
            </div>
          </div>
          <div className="hidden lg:ml-6 lg:flex lg:items-center">
            <ul className="flex gap-16">
              {nav.map((data, index) => (
                <a
                  key={index}
                  href={data.link}
                  className="inline-flex items-center px-1 pt-1 text-normal font-normal text-white"
                >
                  {data.name}
                </a>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              className="relative rounded-3xl bg-white py-3 px-12 "
            >
              <span className="text-transparent text-xl font-normal bg-clip-text bg-btnTextGradient">
                Register now
              </span>
            </button>
            <Image src="./navbar/fetch-nav.svg" alt="" width="54" height="54" />
          </div>
          <div className="-mr-2 flex items-center lg:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center">
              <span className="absolute -inset-0.5" />
              <img
                src="./navbar/menu.svg"
                alt=""
                className="block group-data-[open]:hidden h-10 w-10 sm:h-14 sm:w-14"
                aria-hidden="true"
              />
              <img
                src="./navbar/cross.svg"
                alt=""
                aria-hidden="true"
                className="hidden group-data-[open]:block h-10 w-10 sm:h-14 sm:w-14"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden px-10 absolute right-[-30px] sm:right-0">
        <div className="space-y-1 pb-3 pt-2 bg-primaryGradient w-44 h-56 float-right rounded-2xl">
          {nav.map((data, index) => (
            <DisclosureButton
              as="a"
              key={index}
              href={data.link}
              className="block py-2 pl-3 pr-4 text-md font-light font-lexend text-white"
            >
              {data.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
