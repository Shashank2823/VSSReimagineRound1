import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'; 
import '../index.css'

const Scrollbar = () => {
    
        const textRef = useRef(null);
        const goToTopRef = useRef(null);
        let lenis;
      
        useEffect(() => {
          const init = () => {
            lenis = new Lenis({
              lerp: 0.08,
              smoothWheel: true,
            });
      
            lenis.on('scroll', ({ scroll }) => {
              if (textRef.current && goToTopRef.current) {
                textRef.current.style.transform = `translate3D(${-scroll}px, 0, 0)`;
                goToTopRef.current.style.transform = `translateY(${lenis.scrollY}px)`;
              }
            });
      
            const raf = (time) => {
              lenis.raf(time);
              requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
            addEventListeners();
          };
      
          const addEventListeners = () => {
            if (goToTopRef.current) {
              goToTopRef.current.addEventListener('click', () => lenis.scrollTo(1, { lerp: 0.05 }));
            }
          };
      
          init();
      
          // Cleanup function to remove event listeners and animations
          return () => {
            if (goToTopRef.current) {
              goToTopRef.current.removeEventListener('click', () => lenis.scrollTo(1, { lerp: 0.05 }));
            }
          };
        }, [])
      
  return (
    <>
       <main class="app">
        <div class="hero">
            <div class="hero_wrapper">
                <div class="hero_text" ref={textRef}>
                    <h1>Fossil&rarr; AI smart watches </h1>
                </div>

                <div class="hero_gallery">
                    <div class="hero_gallery_wrapper">
                        <div class="hero_gallery_figure">
                            <img src="./assets/fossil-removebg-preview.png" class="hero_gallery_image" alt="" />
                        </div>

                        <div class="hero_gallery_figure">
                            <img src="../assets/fossil2-removebg-preview.png" class="hero_gallery_image" alt="" />
                        </div>

                        <div class="hero_gallery_figure">
                            <img src="fossil3-removebg-preview.png" class="hero_gallery_image" alt="" />
                        </div>

                        <div class="hero_gallery_figure">
                            <img src="fossil4-removebg-preview.png" class="hero_gallery_image" alt="" />
                        </div>

                        <div class="hero_gallery_figure">
                            <img src="fossil5-removebg-preview.png" class="hero_gallery_image" alt="" />
                        </div>

                        <div class="hero_gallery_info">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis nulla suscipit labore vel delectus dolorem earum minus provident corporis est quod, 
                            </p>
                            <p ref={goToTopRef} class="hero_gallery_info_action">
                                [ GO TO TOP ]
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="extra">
            <p class="extra_info">[+]</p>
            <p class="extra_info">Scroll &#8628;</p>
        </div>
    </main> 
    </>
  )
}

export default Scrollbar





