import React from 'react'
import Image from 'next/image'
import puzzle from '../assets/puzzle.png'
import { teams } from '@/constants'

const TeamSection = () => {
    const repeatedTeams = [
        teams[3], 
        teams[3], 
        teams[3], 
        teams[3], 
        teams[3], 
        teams[3],
        teams[3],
        teams[3],
        teams[3]
    ]
     
  return (
    <section className="flex flex-col w-full min-h-screen text-white font-lexendexa">
        <div className="flex flex-col items-center justify-center relative">
            <Image src={puzzle} alt="prize" width={300} height={300} className='opacity-60'/>
            <h1 className="absolute lg:-bottom-10 -bottom-7 lg:text-7xl text-6xl text-center font-normal">Our Team</h1>
        </div>
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-4 py-32 px-40">
        {repeatedTeams.map((team, index) => (
          <div 
            key={index} 
            className="w-[320px] h-[420px] flex gap-3 flex-col items-center justify-center bg-gray-300 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
            <Image src={team.img} width={240} height={250} alt='mentor' />
            <h2 className="text-xl font-normal leading-loose">{team.title}</h2>
            <p className="font-light text-xs text-center">{team.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection