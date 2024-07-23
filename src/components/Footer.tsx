import Image from "next/image"
import logo from '../assets/fetchaimeerut logo (1) 1.png'
import fetchai from '../assets/fetchai.png'
import commundle from '../assets/commundle.png'
import mail from '../assets/mail.png'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";


const Footer = () => {
  return (
    <footer className="h-fit lg:h-72 py-10 lg:py-0 w-full text-white font-lexend bg-footer rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent flex flex-col justify-center items-center">
      <div className="w-10/12 h-8 flex justify-between items-center mt-16">
        <div className=" flex gap-4 items-center justify-center">
          <Image src={logo} alt="logo" className="h-full" />
          <h2 className="font-normal text-xs lg:text-xl">Fetch.ai Developers Meerut</h2>
        </div>
        <Image src={fetchai} alt='fetch' className="h-full w-32 lg:w-48"/>
      </div>
      <div className="h-46 w-10/12 flex flex-col lg:flex-row my-10">
        <div className="h-full w-full lg:w-1/2">
          <h2 className=" font-normal text-xs lg:text-xl tracking-wider mb-4">Visit our socials</h2>
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-circle rounded-full flex items-center justify-center"><FaInstagram className="text-xl" /></div>
            <div className="w-10 h-10 bg-circle rounded-full flex items-center justify-center"><FaLinkedinIn className="text-xl" /></div>
            <Image src={commundle} width={40} height={40} alt="commundle" />
            <Image src={mail} width={40} height={40} alt="commundle" />
          </div>
          <h3 className="font-normal text-xs tracking-wider hidden lg:block">All Rights Reserved © fetch.ai developer meerut 2024</h3>
        </div>
        <div className="h-full lg:w-1/2 flex flex-col justify-evenly lg:mt-0">
          <div className=" w-fit lg:w-full flex flex-wrap justify-start lg:justify-evenly text-base tracking-wider gap-2 my-5">
            <div className="w-fit flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-circle rounded-full flex items-center justify-center"><IoCallOutline className="text-xl" /></div>
              <span className="w-full text-[8px] sm:text-sm lg:text-base">8218306755/9997355153</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-circle rounded-full flex items-center justify-center"><LuMail className="text-xl" /></div>
              <span className="w-full text-[8px] sm:text-sm lg:text-base">fetch.aimeerut@gmai.com</span>
            </div>
          </div>
          <hr className="w-full flex flex-col border border-y-slate-100 xl:w-[580px]" />
          <div className="w-full flex items-center lg:justify-end gap-2 my-4">
            <FcLike />
            <h1 className="text-sm lg:text-base ">We are excited to see you there!</h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer