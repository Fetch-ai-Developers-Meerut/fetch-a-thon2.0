import { sections } from "@/constants";
import Image from "next/image"



const PerksSections = () => {
    const repeatedSections = [
        sections[0], // Reward
        sections[1], // Network
        sections[2], // Additional gains
        sections[1], // Network (repeated)
        sections[3], // Collaborate and skill up
        sections[2] // Additional gains
    ];
  return (
<section className="flex items-center justify-center pt-56">
      <div className="flex flex-wrap py-9 items-center gap-14 font-lexend text-white justify-center h-full w-[75%] bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
        {repeatedSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-1 w-[280px] h-[145px] items-center justify-center">
            <Image src={section.imgSrc} width={60} height={60} alt={section.title.toLowerCase()} />
            <h2 className="text-xl font-normal leading-loose">{section.title}</h2>
            <p className="font-light text-xs text-center">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PerksSections