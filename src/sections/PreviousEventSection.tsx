import React from "react";
import Image from "next/image";
import img1 from "../assets/img_1.png";
import img2 from "../assets/img_2.png";
import img3 from "../assets/img_3.png";
import img4 from "../assets/img_4.png";
import img5 from "../assets/img_5.png";
import img6 from "../assets/blockon_1.png";
import img7 from "../assets/rish_1.png";
import img8 from "../assets/commu_1.png";
import img9 from "../assets/xerocodee_1.png";
import img10 from "../assets/miet_1.png";
import img11 from "../assets/reskill_1.png";
import img12 from "../assets/hggdu_1.png";

const PreviousEventSection = () => {
  return (
    <section className="flex flex-col items-center justiy-center w-full font-lexenda px-20 gap-10">
      <h1 className="flex lg:text-7xl text-3xl md:text-4xl font-lexendexa text-white">
        Past Events
      </h1>

      <div className="relative flex flex-wrap bg-background items-center justify-center gap-5">
        <Image
          src={img1}
          alt="1"
          width={1340}
          height={449}
          className="opacity-60"
        />

        <div className="absolute">
          <p className="flex items-center lg:bottom-24 bottom-16 lg:text-xs text-[8px] justify-center font-Lexend_Giga text-white">
            Fetch.ai&apos;s NCR Hackathon!
          </p>
          <Image
            src={img12}
            alt="fetch-a-thon"
            className="lg:w-[758px] w-[576px] md:w-[458px] flex items-center justify-center"
          />
          <p className="flex items-center justify-center text-white lg:text-lg text-xs font-Montserrat">
            uAgent Empowered Hackathon
          </p>
        </div>
      </div>
      <br />
      <div className=" flex flex-col gap-5">
        <h1 className="font-lexendexa lg:text-5xl text-2xl md:text-3xl flex items-center justify-center text-white pb-10">
          Highlights
        </h1>
        <Image src={img2} alt="2" width={700} height={343} />
        <Image src={img3} alt="3" width={700} height={343} />
        <Image src={img4} alt="4" width={700} height={343} />
        <Image src={img5} alt="5" width={700} height={343} />
      </div>
      <br />
      <h1 className="font-lexendexa lg:text-7xl text-5xl flex items-center justify-center text-white gap-5">
        {" "}
        Past
        <span className="bg-bgImgGradient bg-clip-text text-transparent ">
          {" "}
          Sponsors{" "}
        </span>
      </h1>
      <br />

      <div className=" flex flex-wrap w-full items-center justify-center gap-5">
        <div className="flex flex-col px-5 w-[400px] h-[150px] items-center justify-center  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
          <Image src={img6} alt="1" width={280} />
        </div>
        <div className="flex flex-col px-5 w-[400px] h-[150px] items-center justify-center  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
          <Image src={img7} alt="1" width={600} />
        </div>
        <div className="flex flex-col px-5 w-[400px] h-[150px] items-center justify-center  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
          <Image src={img8} alt="1" width={600} />
        </div>
        <div className="flex flex-col px-5 w-[400px] h-[150px] items-center justify-center  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
          <Image src={img10} alt="1" width={200} />
        </div>
        <div className="flex flex-col px-5 w-[400px] h-[150px] items-center justify-center bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
          <Image src={img9} alt="1" width={360} height={82} />
        </div>
        <div className="flex flex-col px-5 h-[150px] xl:w-[550px] w-[400px] items-center justify-center bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
          <Image src={img11} alt="1" width={1040} height={82} />
        </div>
      </div>
    </section>
  );
};
export default PreviousEventSection;
