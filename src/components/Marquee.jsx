import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004d43] flex'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
            <motion.h1 intial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity,ease: "linear", duration: 10}} className='text-[16vw] pt-10 mb-10 leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold pr-20'>We are ochi</motion.h1>
            <motion.h1 intial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity,ease: "linear" ,duration: 10}} className='text-[16vw] pt-10 mb-10 leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold pr-20'>We are ochi</motion.h1>
           

        </div>
    </div>
  )
}

export default Marquee
