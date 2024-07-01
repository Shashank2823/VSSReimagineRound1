import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Watch from './components/Watch';
import Marquee from './components/Marquee';
import Images from './components/Images';
import Footer from './components/Footer';
import Slider from './components/Slider';
import End from './components/End';
import gsap from 'gsap';
import './index.css';



function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true);
      }
    });

    // Show loading text for 2.5 seconds
    tl.to(".loading", { duration: 2.5, opacity: 1 });

    // Fade out loading text
    tl.to(".loading", {
      duration: 0.25,
      opacity: 0,
      onComplete: () => {
        document.querySelector(".loading").style.display = "none";
      }
    });

    // Animate bars
    tl.to(".bar", {
      duration: 1.5,
      height: 0,
      stagger: {
        amount: 0.5
      },
      ease: "power4.inOut"
    });

    // Scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) { // Adjust this value to control when the Watch component should appear
        controls.start({ opacity: 1, y: 0 });
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <>
     <div className="w-[100%] h-[810vh] overflow-x-hidden">
     <h1 className="loading">loading...</h1>

<div className="overlay">
  {[...Array(10)].map((_, index) => (
    <div key={index} className="bar"></div>
  ))}
</div>

<div className="navbar">
  <nav>
    <div>
      <a href="#">About</a>
      <a href="#">Watches</a>
    </div>
    <div>
      <a href="#">Explore</a>
    </div>
  </nav>
</div>

<div className="fheader">
  <motion.div initial={{ y: 700 }}
    animate={{ y: 0 }}
    transition={{
      delay: 4,
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.5
    }} className="h1">F</motion.div>

  <motion.div initial={{ y: 700 }}
    animate={{ y: 0 }}
    transition={{
      delay: 4,
      duration: 1.2,
      ease: "easeInOut",
      staggerChildren: 0.5
    }} className="h1">O</motion.div>

  <motion.div initial={{ y: 700 }}
    animate={{ y: 0 }}
    transition={{
      delay: 4,
      duration: 1.4,
      ease: "easeInOut",
      staggerChildren: 0.5
    }} className="h1">S</motion.div>

  <motion.div initial={{ y: 700 }}
    animate={{ y: 0 }}
    transition={{
      delay: 4,
      duration: 1.6,
      ease: "easeInOut",
      staggerChildren: 0.5
    }} className="h1">S</motion.div>

  <motion.div initial={{ y: 700 }}
    animate={{ y: 0 }}
    transition={{
      delay: 4,
      duration: 1.8,
      ease: "easeInOut",
      staggerChildren: 0.5
    }} className="h1">I</motion.div>

  <motion.div initial={{ y: 700 }}
    animate={{ y: 0 }}
    transition={{
      delay: 4,
      duration: 2,
      ease: "easeInOut",
      staggerChildren: 0.5
    }} className="h1">L</motion.div>
</div>

{animationComplete && (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 1 }}
  >
    <Watch />
    <Marquee/>
    <Images/>
    
  </motion.div>
 
)}
   
   <div className='w-full h-auto absolute bottom-[-750%] '>
     <End/>
    </div> 
    <div className='w-full h-auto absolute bottom-[-800%] '>
      <Footer/> 
    </div> 
</div>
      
      
    </>
  );
}

export default App;