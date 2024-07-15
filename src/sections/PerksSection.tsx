import { sections } from "@/constants";
import Image from "next/image";

const PerksSections = () => {

  return (
    <section className="flex items-center justify-center font-lexend">
      <div className="bg-glasseffect rounded-3xl py-14 2xl:py-20 px-9 2xl:px-16 w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 place-items-center gap-12 lg:gap-y-5 lg:gap-x-16 2xl:gap-y-14">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 max-w-[280px] h-[145px] items-center justify-center text-white "
          >
            <Image
              src={section.imgSrc}
              width={60}
              height={60}
              alt={section.title.toLowerCase()}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl font-normal">{section.title}</h2>
              <p className="font-light text-xxs text-center">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerksSections;
