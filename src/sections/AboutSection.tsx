
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { about } from '@/constants';

const AboutSection = () => {
  return (
    <section className='min-h-screen w-full font-lexendexa md:flex items-center justify-between xl:px-36 px-12 text-white pt-60'>
      {about.map((item, index) => (
        <div key={index} className='flex flex-col xl:w-[550px] md:w-[300px] w-[580px] gap-10'>
          <h1 className='font-normal lg:text-5xl text-4xl tracking-widest items-center'>What is 
            <br />
          fetch-a-thon?</h1>
          <p className='font-normal text-base'>{item.description}</p>
        </div>
      ))}
      <br />
      <div className='flex flex-col xl:w-[500px] md:w-[360px] w-full gap-4'>
        <h1 className='font-normal text-lg tracking-wider'>Event Highlight</h1>
        <ul className='flex flex-col gap-3'>
          {about[0].list.map((highlight, index) => (
            <li key={index} className='flex items-center px-8 gap-7 tracking-wider w-[550px] h-[70px] rounded-full border-2 border-slate-200'>
              <div className='w-4 h-4 bg-white rounded-md flex items-center justify-center'>
                <FaCheck className='text-black text-xs'/>
              </div>
              <h2 className='font-light text-base'>{highlight}</h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
