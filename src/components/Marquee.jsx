import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004d43] flex'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
            <h1 className='text-[16vw] pt-10 mb-10 leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold'>We are ochi</h1>
            <h1 className='text-[16vw] pt-10 mb-10 leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold'>We are ochi</h1>
            <h1 className='text-[16vw] pt-10 mb-10 leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold'>We are ochi</h1>

        </div>
    </div>
  )
}

export default Marquee
