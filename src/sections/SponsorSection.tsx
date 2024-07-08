import React from 'react'
import Image from 'next/image'
import sponsor from '../assets/sponsor.png'
import fetchai from '../assets/fetchai.png'

const SponsorSection = () => {
  const divCount = 4; 
  const count = Array.from({ length: divCount });
  return (
    <section className="flex flex-col w-full min-h-screen text-white font-lexendexa">
        <div className="flex flex-col items-center justify-center relative">
            <Image src={sponsor} alt="prize" width={350} height={350}/>
            <h1 className="absolute -bottom-3 lg:text-7xl text-6xl text-center font-normal">Sponsors</h1>
        </div>
        <h2 className='font-normal text-3xl flex items-center justify-center pt-24 pb-5'>Title Sponsors </h2>
          <div className="w-full h-full flex flex-wrap items-center justify-center gap-3">
          <div className="h-[250px] 3xl:w-[1050px] w-[520px] bg-gray-300 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent flex items-center justify-center">
          <Image src={fetchai} alt="fetchai" width={370} height={60}/>
          </div>
            {count.map((_, index) => (
              <div 
                key={index} 
                className="h-[250px] w-[520px] bg-gray-300 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
              </div>
            ))}
        </div>
    </section>
  )
}

export default SponsorSection