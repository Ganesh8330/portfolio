import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import { Parallax } from 'react-parallax';
import pic from '../Assets/nasa.jpg';
import moon from '../Assets/daniel.jpg';
import astro from '../Assets/stars.jpg';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <>
      <div>
        <Navbar />
        <motion.div className="container">
          <Parallax  strength={800} bgImage={moon}>
            <div>
              <Hero />
              <AboutMe />
            </div>
          </Parallax>
          <Parallax  strength={800}  bgImage={astro}>
            <div>
              <Skills />
              <Experience />
            </div>
         
         
            <div>
              <Projects />
            </div>
            <Contact />
            </Parallax>
          
          
        </motion.div>  
      </div>
    </>
  );
}

export default Main;
