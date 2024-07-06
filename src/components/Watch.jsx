import React from 'react'
import herofossil from '../assets/herofossil.png'
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';


const Watch = () => {
    return (
        <>
            <div class="loader">
               <div class="loader_circle"></div>
               <div class="loader_text">Loading assests.</div>
               <div class="loader_circle"></div>
            </div>

          <div class="header">
              <div class="header_items">
               <span>We are Team VSS.</span>
              </div>
          </div>

          <main class='app'>
                <section class='section'>
                    <div class="section_wrapper">
                        <div class="section_info">
                            <div class="section_info_col">
                                    <span>Page</span>
                                    <span>Index</span>
                            </div>

                            <div class="section_info_col">
                                <p class='section_info_col_text'>
                                Discover the timeless elegance and innovative craftsmanship of FOSSIL watches.FOSSIL watches are designed to complement your lifestyle. Explore our selection and find the perfect watch that not only tells time but also tells your story.
                                </p>
                            </div>
                        </div>
                        <div class="section_marquee">
                            <div class="section_marquee_items">
                                <span>-Crafted</span>
                                <span>Authentic</span>
                                <span>Iconic</span>
                                <span>Modern-</span>
                            </div>
                        </div>

                        <section class='big'>
                        <motion.img
                            layout
                            initial={{ y: "100%", rotate: 0 }} // Start below the view
                            animate={{ 
                            y: "5%", // Move to the center of the screen
                            x: "28%",
                            rotate: [10, -10, 10] // Tilt right to left and back to right
                            }}
                           transition={{ 
                           y: { ease: "easeOut", duration: 2 }, // Smooth transition to center
                           rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" } // Smooth pendulum motion
                           }}
                           src={herofossil} 
                           alt="Fossil hai fossil"
                           style={{ display: "block", margin: "0 auto", zIndex: "1" }} // Center the image horizontally
                        />

                        </section>

                        <div className="para">
                            <h1>Less,</h1>
                            <h1>But Better.</h1>
                            <p>Craftsmanship You Can Trust. Every FOSSIL watch is crafted with the finest materials, ensuring durability and precision. Experience the perfect balance of tradition and innovation in every timepiece also complements your unique style .</p>
                        </div>
                    </div>
                </section>
          </main>
            <canvas id='canvas'></canvas>
           
            
        </>
    )
}

  
   
  

export default Watch