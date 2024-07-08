"use client";
import { nav } from "@/constants"
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { RxCross2 } from "react-icons/rx";
import { useState } from "react"
import logo from '../assets/fetchaimeerut logo (1) 1.png'
import cross from '../assets/cross.png'
import menu from '../assets/menubar.png'
import Image from "next/image";

const Nav = () => {
  const [show,setShow] = useState(false)
  return (
    <nav className="w-full min-h-[10vh] flex items-center justify-between px-11 flex-wrap leading-[20px] py-10 text-white font-lexend font-normal ">
<div className="h-20 w-full flex items-center justify-between border border-gray-600 backdrop-blur-sm bg-white/5 rounded-full px-10">
<Image src={logo} width={60} height={100} alt="logo"/>
      <div className='md:hidden text-xl z-50 flex items-center justify-center w-11 h-11 bg-white rounded-full ' onClick={()=> setShow(!show)}>
        {/* {show ?<RxCross2 className='text-black text-2xl'/>:< HiOutlineMenuAlt3 className=" text-black text-2xl"/>} */}
        {show ?<Image src={cross} alt="cross" width={40} height={40}/>:<Image src={menu} alt="menubar" width={20} height={20}/>} 

    </div>
    <div className={`md:hidden flex-col items-center justify-center overflow-hidden list-none text-xl pt-20 leading-loose absolute ${show ? "right-0":"right-[-150%]"} rounded-3xl duration-500 ease-in-out  top-0 py-10 px-8 rounded-bl-xl bg-resnav w-[250px] h-[350px]`}>
       {nav.map((item,i)=>(
            <li key={i}>{item.name}</li>
        ))}
        <div className="rounded-full bg-white flex items-center justify-center font-semibold mt-3">
        <button  className="bg-clip-text text-transparent bg-button text-base px-5 py-1 font-kanit">Register Now</button>
        </div>
       </div>
       <div className=" hidden md:flex items-center justify-center gap-14 list-none text-xl lg:text-lg lg:gap-10 md:text-[15px] md:gap-6">
       {nav.map((item,i)=>(
            <li key={i}>{item.name}</li>
        ))}
        <div className="rounded-full bg-white px-9 py-3 md:px-5 md:py-2 font-semibold ">
        <button className="bg-clip-text text-transparent bg-button text-xl md:text-[15px] font-kanit">Register Now</button>
        </div>
        <div className="w-14 h-14 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19.7251 9.0314C19.9044 9.29461 20.0001 9.60426 20.0001 9.92084C20.0001 10.3455 19.8281 10.7528 19.5222 11.0532C19.2162 11.3532 18.8012 11.522 18.3685 11.522C18.0457 11.522 17.7303 11.4282 17.4619 11.2521C17.1937 11.0762 16.9845 10.8261 16.861 10.5338C16.7375 10.2411 16.7052 9.91925 16.7681 9.60852C16.8311 9.29795 16.9865 9.01269 17.2148 8.78883C17.4429 8.56497 17.7336 8.41252 18.0502 8.35062C18.3666 8.2889 18.6947 8.32055 18.9929 8.44184C19.291 8.56296 19.5458 8.7682 19.7251 9.0314Z" fill="black"/>
  <path d="M19.7251 17.1343C19.9044 17.3976 20.0001 17.7072 20.0001 18.0237C20.0001 18.4485 19.8281 18.8557 19.5222 19.1561C19.2162 19.4561 18.8012 19.6249 18.3685 19.6249C18.0457 19.6249 17.7303 19.5311 17.4619 19.3551C17.1937 19.1791 16.9845 18.9291 16.861 18.6367C16.7375 18.3441 16.7052 18.0222 16.7681 17.7114C16.8311 17.4009 16.9865 17.1157 17.2148 16.8918C17.4429 16.6679 17.7336 16.5155 18.0502 16.4535C18.3666 16.3918 18.6947 16.4235 18.9929 16.5448C19.291 16.6659 19.5458 16.8711 19.7251 17.1343Z" fill="black"/>
  <path d="M19.9988 0H16.083V3.84248H19.9988V0Z" fill="black"/>
  <path d="M11.5874 17.1343C11.7667 17.3976 11.8624 17.7072 11.8624 18.0237C11.8624 18.4485 11.6904 18.8557 11.3845 19.1561C11.0785 19.4561 10.6635 19.6249 10.2307 19.6249C9.908 19.6249 9.59261 19.5311 9.32422 19.3551C9.05599 19.1791 8.84684 18.9291 8.72332 18.6367C8.5998 18.3441 8.56754 18.0222 8.63045 17.7114C8.69344 17.4009 8.8488 17.1157 9.07701 16.8918C9.30515 16.6679 9.59585 16.5155 9.91243 16.4535C10.2289 16.3918 10.557 16.4235 10.8551 16.5448C11.1532 16.6659 11.4081 16.8711 11.5874 17.1343Z" fill="black"/>
  <path d="M12.1883 7.99966H8.27246V11.8421H12.1883V7.99966Z" fill="black"/>
  <path d="M12.2969 0H8.16357V4.05595H12.2969V0Z" fill="black"/>
  <path d="M4.36407 0.00378418H0.0131836V4.27322H4.36407V0.00378418Z" fill="black"/>
  <path d="M3.9158 15.7824H0V19.6249H3.9158V15.7824Z" fill="black"/>
  <path d="M4.13334 7.8931H0V11.949H4.13334V7.8931Z" fill="black"/>
  </svg>
        </div>
       </div>
</div>
    </nav>
  )
}

export default Nav

