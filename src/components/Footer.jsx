import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full  py-4 px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
          <p>Home</p>
          <p>Our Mission</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col gap-2 md:pl-20">
          <h3 className="mb-2 uppercase bg- text-[#ffffff80]">Education</h3>
          <p>News</p>
          <p>Learn</p>
          <p>Buy Now</p>
        </div>
        <div className="flex items-center">
          <motion.h1 initial={{opacity:0, y:0}}
                    whileInView={{opacity:1, y:-60, }}
                    transition={{ease: 'easeInOut', duration:1}}
           className="text-[14em] ml-[2em]  text-neutral-300">Fossil Watches</motion.h1>
          <p className="ml-4 mt-24 text-white">©2024 Fossil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
