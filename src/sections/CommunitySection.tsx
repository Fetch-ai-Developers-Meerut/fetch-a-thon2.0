import React from 'react'

const CommunitySection = () => {
    const divCount = 9; 
  const count = Array.from({ length: divCount });
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen text-white font-lexendexa px-40">
        <h1 className="lg:text-7xl text-6xl text-center font-normal">Community
                <br />
                 Partners</h1>
                 <div className="w-full h-full flex py-9 flex-wrap items-center justify-center gap-3">
            {count.map((_, index) => (
              <div 
                key={index} 
                className="h-[120px] w-[340px] bg-gray-300 rounded-[40px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-transparent"
              ></div>
            ))}
        </div>
    </section>
  )
}

export default CommunitySection