import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';
import model0 from '../assets/fossil-removebg-preview.png';
import model1 from '../assets/fossil2-removebg-preview.png';
import model2 from '../assets/fossil3-removebg-preview.png';
import model3 from '../assets/fossil4-removebg-preview.png';
import model4 from '../assets/fossil5-removebg-preview.png';
import model5 from '../assets/fossil6-removebg-preview.png';
import model6 from '../assets/fossil7-removebg-preview.png';
import model7 from '../assets/fossilwomen-removebg-preview.png';
import model8 from '../assets/uniq-removebg-preview.png';
import model9 from '../assets/disneyfossil-removebg-preview.png';
// import model0 from '../assets/model0.jpg';
// import model1 from '../assets/model1.jpg';
// import model2 from '../assets/model2.jpg';
// import model3 from '../assets/model3.jpg';
// import model4 from '../assets/model4.jpg';
// import model5 from '../assets/model5.jpg';
import Marquee from './Marquee';


const Images = () => {
  const isLargeScreen = window.innerWidth >= 640;

  return (
    <><div className='min-w-full min-h-screen relative'>
    <h1 className='text-[4.5em] absolute left-[9%] sm:left-[30%] p-[4em] sm:p-[2em] text-slate-400'>
      In The <motion.span 
      initial={{y:0,opacity:0}} 
      whileInView={{y:-100,opacity:1}}  
      transition={{ ease: 'easeInOut', duration: 1 }}
      className='text-[5em] sm:text-[2em] ml-6 text-gray-200 '>Spotlight</motion.span>
    </h1>

    <motion.div
      layout
      initial={isLargeScreen ? { x: 500, opacity: 0 } : { opacity: 1 }}
      whileInView={{ x: 0, opacity: 1, }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className="imagecont absolute mb-2 top-[20%] left-[8%] sm:left-[53%] sm:top-[34%] my-auto w-[160em] h-[130em] sm:w-[70em] sm:h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300"
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model2}
        alt="Model in Fossil"
      />
      <div className='h-[14%] w-[100%] flex justify-around gap-10 '>
        <h5 className='text-slate-300 text-[10em] sm:text-[6rem]'>Kimiko Series 9</h5>
        <h2 className='text-white text-[10em] sm:text-[6rem]'>$523</h2>
      </div>
    </motion.div>

    <motion.div
      layout
      initial={{ x: -500, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1, }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className="imagecont absolute left-[8%] top-[34%] my-auto w-[70em] h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300"
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model3}
        alt="Model in Fossil"
      />
      <div className='h-[15%] w-[100%] flex justify-around gap-10'>
        <h5 className='text-slate-300 text-[10em] sm:text-[6rem]'>Shifuu Series 11</h5>
        <h2 className='text-white text-[10em] sm:text-[6rem]'>$523</h2>
      </div>
    </motion.div>



     <motion.div
          layout
          initial={{x:500, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{ease:'easeInOut', duration:1}}
      className="imagecont absolute left-[53%] top-[115%] my-auto w-[70em] h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300"
      
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model6}
        alt="Model in Fossil"
      />
      <div className='h-[15%] w-[100%] flex justify-around gap-10'> 
          <h5 className='text-slate-300 text-[6rem]  '>Homelander IV</h5>
          <h2 className='text-white text-[6rem]  '>$1523</h2>
      </div>
    </motion.div>

    <motion.div
          layout
          initial={isLargeScreen ? { x: -500, opacity: 0 } : { opacity: 1 }}
          whileInView={{x:0, opacity:1}}
          transition={{ease:'easeInOut', duration:1}}
      className="imagecont absolute left-[8%] top-[64%] sm:top-[115%] my-auto sm:w-[70em] w-[160em] h-[130em] sm:h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300"
      
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model4}
        alt="Model in Fossil"
      />
      <div className='h-[15%] w-[100%] flex sm:flex-row justify-around gap-10'> 
          <h5 className='text-slate-300 text-[10em] sm:text-[6rem]  '>Tombraider</h5>
          <h2 className='text-white text-[10em] sm:text-[6rem]  '>$1523</h2>
      </div>
    </motion.div>


    <motion.div
     layout
     initial={{x:-500, opacity:0}}
     whileInView={{x:0, opacity:1}}
     transition={{ease:'easeInOut', duration:1}}
      className="imagecont absolute left-[8%] top-[200%] my-auto w-[70em] h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300"
      
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model7}
        alt="Model in Fossil"
      />
      <div className='h-[15%] w-[100%] flex justify-around gap-10'> 
          <h5 className='text-slate-300 text-[6rem]  '>Compound X</h5>
          <h2 className='text-white text-[6rem]  '>$323</h2>
      </div>
    </motion.div>

    <motion.div
     layout
     initial={{x:500, opacity:0}}
     whileInView={{x:0, opacity:1}}
     transition={{ease:'easeInOut', duration:1}}
      className="imagecont absolute left-[53%] top-[200%] my-auto w-[70em] h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300"
      
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model4}
        alt="Model in Fossil"
      />
      <div className='h-[15%] w-[100%] flex justify-around gap-10'> 
          <h5 className='text-slate-300 text-[6rem]  '>Xray</h5>
          <h2 className='text-white text-[6rem]  '>$323</h2>
      </div>
    </motion.div>
   
    <motion.div
     layout
     initial={isLargeScreen ? { x: -500, opacity: 0 } : { opacity: 1 }}
     whileHover={{zoom:1}}
     whileInView={{x:0, opacity:1}}
     transition={{ease:'easeInOut', duration:1}}
      className="imagecont absolute left-[8%] top-[108%] sm:top-[285%] my-auto w-[160em] h-[130em] sm:w-[70em] sm:h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300 "
     
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model3}
        alt="Model in Fossil"
      />
      <div className='h-[15%] w-[100%] flex sm:flex-row justify-around gap-10'> 
          <h5 className='text-slate-300 text-[10em] sm:text-[6rem]  '>Bentis</h5>
          <h2 className='text-white text-[10em] sm:text-[6rem]  '>$983</h2>
      </div>
    </motion.div>

    <motion.div
     layout
     initial={{x:500, opacity:0}}
     whileHover={{zoom:1}}
     whileInView={{x:0, opacity:1}}
     transition={{ease:'easeInOut', duration:1}}
      className="imagecont absolute left-[53%] top-[285%] my-auto w-[70em] h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300 "
     
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model9}
        alt="Model in Fossil"
      />
      <div className='h-[15%] w-[100%] flex justify-around gap-10'> 
          <h5 className='text-slate-300 text-[6rem]  '>Malta</h5>
          <h2 className='text-white text-[6rem]  '>$983</h2>
      </div>
    </motion.div>

    <motion.div  
          layout
          initial={isLargeScreen ? {x:500, opacity:0} : {opacity:1}}

          whileInView={{x:0, opacity:1}}
          transition={{ease:'easeInOut', duration:1}}
      className="imagecont absolute left-[8%] top-[152%] sm:left-[53%] sm:top-[370%] my-auto w-[160em] h-[130em] sm:w-[70em] sm:h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300 "
     
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model6}
        alt="Model in Fossil"
      />
      <div className='h-[15%] w-[100%] flex justify-around gap-10'> 
          <h5 className='text-slate-300 text-[10em] sm:text-[6rem]  '>Tate II</h5>
          <h2 className='text-white text-[10em] sm:text-[6rem]  '>$2523</h2>
      </div>
    </motion.div> 


    
    <motion.div  
          layout
          initial={isLargeScreen ? { x: -500, opacity: 0 } : { opacity: 1 }}
          whileInView={{x:0, opacity:1}}
          transition={{ease:'easeInOut', duration:1}}
      className="imagecont absolute left-[8%] top-[196%] sm:top-[370%] my-auto w-[160em] h-[130em] sm:w-[70em] sm:h-[60em] rounded-[5%] overflow-hidden bg-black-700 border-4 border-orange-300"
     
    >
      <img
        className='h-[86%] w-[100%] object-contain'
        src={model8}
        alt="Model in Fossil"
      />
      <div className='h-[15%] w-[100%] flex justify-around gap-10'> 
          <h5 className='text-slate-300 text-[10em] sm:text-[6rem]  '>Flash III</h5>
          <h2 className='text-white text-[10em] sm:text-[6rem]  '>$2203</h2>
      </div>
    </motion.div> 

    
  </div>

  </>
    
  );
};

export default Images;
