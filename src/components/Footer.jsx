import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full  py-4 px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-2 justify-between items-center w-[15%]">
          <h3 className="mb-2 uppercase text-[#ffffff80] text-[8em] md:text-[3em]">About</h3>
          <p>Home</p>
          <p>Our Mission</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col gap-2 md:pl-20 justify-between items-center ">
          <h3 className="mb-2 uppercase bg- text-[#ffffff80] text-[8em] md:text-[3em]">Education</h3>
          <p>News</p>
          <p>Learn</p>
          <p>Buy Now</p>
        </div>
        <div className="flex items-center">
          <motion.h1 initial={{opacity:0, y:0}}
                    whileInView={{opacity:1, y:-200, }}
                    transition={{ease: 'easeInOut', duration:1}}
           className="text-[14em] ml-[2em] sm:ml-[0em] text-[#ffffff80] w-[100%] ">Fossil Watches</motion.h1>
          <p className="ml-4 mt-24 text-white text-[5em] sm:text-[2em]">©2024 Fossil</p>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
