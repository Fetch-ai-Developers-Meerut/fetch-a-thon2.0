// import React from 'react'
// import Image from 'next/image'
//   import img1 from "../assets/img_1.png"
//   import img2 from "../assets/img_2.png"
//   import img3 from "../assets/img_3.png"
//   import img4 from "../assets/img_4.png"
//   import img5 from "../assets/img_5.png"
//   import img6 from "../assets/blockon_1.png"
//   import img7 from "../assets/commu_1.png"
//   import img8 from "../assets/rish_1.png"
//   import img9 from "../assets/xerocodee_1.png"
//   import img10 from "../assets/miet_1.png"
//   import img11 from "../assets/reskill_1.png"
  
  
//   const PreviousEventSection = () => {
//     return (
// <section className='flex flex-col items-center justiy-center min-h-screen w-full font-lexenda px-20'>
//   <h1 className='text-5xl font-normal'>Past Events</h1>
//   <div className=' flex flex-col items-center justify-center bg-background w-[1025px] h-[343px]'>
//   <Image src={img1} alt='' width={1025} height={343} className='opacity-60'/>
//   <div className='absolute'>
//   <h1 className='font-extrabold text-red-500 text-6xl tracking-widest'>FETCH -A- THON'24</h1>
//   <p className='flex items-center justify-center text-white text-lg'>uAgent Empowered Hackathon</p>
//   </div>
//   </div>
//   <br />
//   <div className=' flex flex-col gap-5'> 
//           <h1 className='font-normal text-4xl flex items-center justify-center text-white'>Highlights</h1>
//           <Image src={img2} alt='2' width={700} height={343}/>
//           <Image src={img3} alt='3' width={700} height={343}/>
//           <Image src={img4} alt='4' width={700} height={343}/>
//           <Image src={img5} alt='5' width={700} height={343}/>
//         </div>
//         <br />
//           <h1 className='font-normal text-4xl flex items-center justify-center text-white'>Past Sponsors</h1>
//           <br />
//         <div className=' flex flex-wrap w-full items-center justify-center gap-5'> 
//           <div className="flex flex-col px-5 w-[400px] h-[150px] items-center justify-center  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
//            <Image src={img6} alt='1' width={280}  />          
//            </div>
//            <div className="flex flex-col w-[400px] h-[150px] items-center justify-center  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
//            <Image src={img7} alt='1' width={1025} className='object-contain'/>          
//            </div>
//            <div className="flex flex-col px-5 w-[400px] h-[150px] items-center justify-center  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
//            <Image src={img8} alt='1' width={1025} />          
//            </div>
//            <div className="flex flex-col px-5 w-[400px] h-[150px] items-center justify-center  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
//            <Image src={img10} alt='1' width={200} />          
//            </div>
//            <div className="flex flex-col px-5 w-[400px] h-[150px] items-center justify-center  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
//            <Image src={img9} alt='1' width={1025} />          
//            </div>
//            <div className="flex flex-col px-5 xl:w-[550px] h-[150px] items-center justify-center w-[400px]  bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
//            <Image src={img11} alt='1' width={1025} />          
//            </div>
//         </div>
//   </section>
//     )
//   }
//   export default PreviousEventSection


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
// import img12 from "../assets/hggdu_1.png";

const PreviousEventSection = () => {
  return (
    <section className="flex flex-col items-center justiy-center w-full font-lexenda px-20 gap-10">
      <h1 className="flex lg:text-7xl text-5xl md:text-4xl  font-lexendexa text-white">Past Events</h1>
      


      <div className="relative flex flex-wrap bg-background items-center justify-center gap-5">
        <Image src={img1} alt="1" width={1340} height={449} className="opacity-60"/>

        <div className="absolute">
          <p className=" absolute lg:bottom-24 bottom-16 lg:text-xs text-[8px] lg:left-16 left-10 flex font-Lexend_Giga text-white">

            FetchAI's NCR Hackathon!
          </p >
          {/* <Image src={img12} alt="fetch-a-thon" className="lg:w-[758px] w-[576px] md:w-[458px] flex items-center justify-center" /> */}
          <p className="flex items-center justify-center text-white lg:text-lg text-base font-Montserrat">
            uAgent Empowered Hackathon
          </p>

        </div>
      </div>



      <br />
      <div className=" flex flex-col gap-5">
        <h1 className="font-lexendexa text-4xl flex items-center justify-center text-white pb-10">
          Highlights
        </h1>
        <Image src={img2} alt="2" width={700} height={343} />
        <Image src={img3} alt="3" width={700} height={343} />
        <Image src={img4} alt="4" width={700} height={343} />
        <Image src={img5} alt="5" width={700} height={343} />
      </div>
      <br />


      <h1 className="font-lexendexa lg:text-7xl text-5xl flex items-center justify-center text-white gap-5"> Past 
        <span className="bg-bgImgGradient bg-clip-text text-transparent "> Sponsors </span>
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
        <div className="flex flex-col w-[400px] h-[150px]   px-5 items-center justify-center bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
          <Image src={img9} alt="1" width={360}/>
        </div>
        <div className="flex flex-col 2xl:w-[550px] w-[400px] h-[150px]  px-5 items-center justify-center bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
          <Image src={img11} alt="1" width={1020} />
        </div>
      </div>
    </section>
  );
};
export default PreviousEventSection;

// lg:w-[405px] w-[400px] lg:h-[150px] h-[155px] md:h=[80]
// lg:w-[405px] w-[400px] lg:h-[150px] h-[155px]