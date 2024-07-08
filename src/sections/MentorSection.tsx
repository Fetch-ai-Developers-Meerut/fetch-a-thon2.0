import React from 'react'
import Image from 'next/image'
import mentors from '../assets/mentors.png'
import { MdArrowOutward } from "react-icons/md";
import { teams } from '@/constants'

const MentorSection = () => {
  const repeatedTeams = [
    teams[0], 
    teams[1], 
    teams[2], 
    teams[3], 
    teams[3], 
    teams[3]  
];
  return (
    <section className="flex flex-col w-full min-h-screen text-white font-lexendexa">
        <div className="flex flex-col items-center justify-center relative">
            <Image src={mentors} alt="prize" width={300} height={300} className='opacity-60'/>
            <h1 className="absolute -bottom-10 lg:text-7xl text-6xl text-center font-normal">Speakers
              <br />
              & Mentors
            </h1>
        </div>
       <div className='flex flex-col items-center justify-center'>
       <div className="w-full h-full flex flex-wrap items-center justify-center gap-5 pt-32 px-40">
        {repeatedTeams.map((team, index) => (
          <div 
            key={index} 
            className="w-[320px] h-[420px] flex gap-3 flex-col items-center justify-center bg-gray-300 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
            <Image src={team.img} alt='mentor'className='lg:w-[300px] w-[200px] lg:h-[300px] h-[200px]' />
            <h2 className="text-xl font-normal leading-loose">{team.title}</h2>
            <p className="font-light text-xs text-center">{team.description}</p>
          </div>
        ))}
      </div>
        <button className='rounded-full flex items-center mb-10 justify-center gap-3 w-[225px] px-2 py-3 border border-slate-300 text-2xl font-normal mt-5'>Our Team <MdArrowOutward className="text-2xl"/>
        </button>
       </div>
    </section>
  )
}

export default MentorSection