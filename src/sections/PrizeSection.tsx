import Image from "next/image"
import prize from "../assets/prize.png"

const PrizeSections = () => {
  return (
    <section className="flex flex-col w-full min-h-screen text-white font-lexendexa">
        <div className="flex flex-col items-center justify-center relative">
            <Image src={prize} alt="prize" width={500} height={500}/>
            <h1 className="absolute -bottom-9 text-8xl text-center font-normal tracking-widest">$0,000
                <br />
            Prize Pool</h1>
        </div>
        <div className="w-full h-full flex flex-wrap py-20 items-center justify-center gap-2">
            <div className="h-[280px] w-[500px] bg-gray-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent"></div>
            <div className="h-[280px] w-[500px] bg-gray-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent"></div>
            <div className="h-[280px] 3xl:w-[1000px] w-[500px] bg-gray-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent"></div>
        </div>
    </section>
  )
}

export default PrizeSections 