import { motion } from 'framer-motion';
import React from 'react';
import Footer from './Footer';
import video from '../assets/videoplayback.mp4';
import Marquee from './Marquee';

const End = () => {

  return (
    <>
      <h1 className='text-[4.5em] absolute top-[-1150%] sm:top-[-26%] left-[9%] sm:left-[30%] p-[4em] sm:p-[2em] text-slate-400'>
        In The{' '}
        <motion.span
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: -100, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='text-[5em] sm:text-[2em] ml-6 text-gray-200'
        >
          Limelight
        </motion.span>
      </h1>

      <motion.div 
        initial={{ opacity: 0, x: 100, scale: 0 }} // Start off-screen to the right and hidden
        whileInView={{ opacity: 1, x: 0, scale: 0.9 }} // Move to center and scale up
        transition={{ ease:'easeInOut', duration: 1.5 }} // Define the transition properties
        className='videodiv w-full sm:h-screen top-[-1000%]'
      >
        <video className='w-full h-full object-cover' autoPlay muted loop src={video}></video>
      </motion.div>

      
    </>
  );
};

export default End;
