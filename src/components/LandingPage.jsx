import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20 '>
        {["We create","Eye Openeing","Presentation"].map((item, index)=>{
            return (<div className='masker '>
              <div className="w-fit flex items-end ">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5vw] relative top-[0.5vw] bg-green-500"></div>)}
            <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[6.5vw] leading-[6.46w] tracking-tighter text-8xl font-['Founders_Grotesk_X_Condensed font-bold'] font-semibold">{item}</h1>
              </div>
              </div>         
            );
        })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
            {["For public and private companies", 
            "From the first pitch to IPO"].map((item, index)=>(<p className="text-md font-light tracking=tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-5">
            <div className="px-4 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">start the project</div>
            <div className="w-9 h-9 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
              <span className="rotate-[45deg]"><FaArrowUpLong /></span>
              </div>
            </div>
        </div>

              
    </div>
  );
}

export default LandingPage
