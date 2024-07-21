import Image from "next/image";
import prize from "../assets/prize.png";

const PrizeSections = () => {
  return (
    <section className="flex flex-col w-full text-white font-lexendexa">
      <div className="flex flex-col items-center justify-center relative">
        <Image src={prize} alt="prize" width={500} height={500} />
        <h1 className="absolute bottom-5 text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl text-center font-normal">
          $0,000
          <br />
          Prize Pool
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 h-[420px] w-full gap-y-4 2xl:gap-x-2 2xl:gap-y-3">
        <div className="bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent grid place-items-center">
          1st Prize
        </div>
        <div className="bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent grid place-items-center">
          2nd Prize
        </div>
        <div className="lg:col-span-2 bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent grid place-items-center">
          3rd Prize
        </div>
      </div>
    </section>
  );
};

export default PrizeSections;
