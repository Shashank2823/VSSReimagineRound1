import React from 'react'
import { motion } from 'framer-motion'
function Marquee() {
  return (
    <motion.div whileInView={{rotate:4}} className='w-full py-2 bg-[#d53f37]'>
        <div className='text flex overflow-hidden whitespace-nowrap '>
            <motion.h1 
              initial={{x: "0"}} 
              animate={{x: "-100%",}} 
              transition={{ease:"linear", repeat: Infinity, duration: 7}} 
              className='foss text-[17vw] leading-[11vw] font-["Test_Founders_Grotesk_X-Cond_SmBd"] font-semibold uppercase pt-2 pr-20 mb-[2vw]  '>
                Fossil Watches
             </motion.h1>

            <motion.h1 
              initial={{x: 0}} 
              animate={{x: "-100%"}}
              transition={{ease:"linear", repeat: Infinity, duration: 7}} 
               className='foss text-[17vw] leading-[11vw] font-["Test_Founders_Grotesk_X-Cond_SmBd"] font-semibold uppercase pt-2 pr-20 mb-[2vw] '>
                 Fossil Watches
            </motion.h1>
            
        </div>
    </motion.div>
     
  )
}

export default Marquee