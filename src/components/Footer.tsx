import Image from "next/image"
import logo from '../assets/fetchaimeerut logo (1) 1.png'
import fetchai from '../assets/fetchai.png'
import commundle from '../assets/commundle.png'
import mail from '../assets/mail.png'
import { FaInstagram,FaLinkedinIn} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";


const Footer = () => {
  return (
    <footer className="flex items-center justify-center text-white font-lexend">
      <div className="w-full mx-10 mb-10 bg-footer rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent">
        <div className="flex flex-wrap items-center justify-between xl:px-24 px-16 py-20">
         <div className="flex flex-col gap-12 flex-wrap">
         <div className="flex gap-4 items-center justify-center">
            <Image src={logo} width={60} height={100} alt="logo"/>
            <h2 className="font-normal text-xl">Fetch.ai Developers Meerut</h2>
          </div>
          <div className="flex flex-col gap-3">
          <h2 className="font-normal text-xl tracking-wider">Visit our socials</h2>
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-circle rounded-full flex items-center justify-center"><FaInstagram className="text-xl"/></div>
            <div className="w-10 h-10 bg-circle rounded-full flex items-center justify-center"><FaLinkedinIn className="text-xl"/></div>
            <Image src={commundle} width={40} height={40} alt="commundle"/>
            <Image src={mail} width={40} height={40} alt="commundle"/>
          </div>
          <h3 className="font-normal text-xs tracking-wider">All Rights Reserved © fetch.ai developer meerut 2024</h3>
          </div>
         </div>
          <div className="flex flex-col gap-10 mb-16">
          <Image src={fetchai} width={160} height={100} alt='fetch' className="lg:self-end self-start pr-10 w-[250px] lg:flex-col fixed top-8"/>
          <div className="xl:flex flex-col ">
         <div className="flex flex-col gap-3">
         <div className="xl:flex self-start text-base tracking-wider xl:gap-10 gap-5">
         <div className="flex items-center justify-center gap-3">
         <div className="w-10 h-10 bg-circle rounded-full flex items-center justify-center"><IoCallOutline className="text-xl"/></div>
         <span>8218306755/9997355153</span>
         </div>
          <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-circle rounded-full flex items-center justify-center"><LuMail className="text-xl"/></div>
          <span>fetch.aimeerut@gmai.com</span>
          </div>
         </div>
          <hr className="flex flex-col border border-y-slate-100 xl:w-[580px] w-[300px]"/>
         </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer