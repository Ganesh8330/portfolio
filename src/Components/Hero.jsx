import React from 'react';
import { hero } from '../Data/data';
import pic from '../Assets/person-playing-3d-video-games-device.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div>
      <div className='grid'>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='col-6'>
          {hero.map((data, idx) => (
            <div key={idx} className='content'>
              <motion.h1 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 2, delay:1 }}
              >
                {data.name}
              </motion.h1>
              <motion.h2 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 2,delay:1 }}
              >
                {data.role}
              </motion.h2>
              <motion.p 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 2,delay:1.5 }}
              >
                {data.about}
              </motion.p>
            </div>
          ))}
        </motion.div>

        <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className='col-6'>
          <motion.img 
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 4, delay: 1 }} 
            src={pic} 
            alt="Person playing 3D video games" 
            className='pic' 
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
