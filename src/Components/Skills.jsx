import React from 'react';
import html from '../Assets/html.png';
import css from '../Assets/css.png';
import bootstrap from '../Assets/Bootstrap_logo.svg';
import redux from '../Assets/redux.svg';
import react from '../Assets/react.png';
import framer from '../Assets/framer-motion.svg';
import javascript from '../Assets/javascript-1.svg';
import sass from '../Assets/sass.svg';
import { motion } from 'framer-motion';

const Skills = () => {

  const data = [
    { image: html, title: 'HTML' },
    { image: css, title: 'CSS' },
    { image: sass, title: 'SASS' },
    { image: bootstrap, title: 'Bootstrap' },
    { image: redux, title: 'Redux' },
    { image: react, title: 'React' },
    { image: framer, title: 'Framer Motion' },
    { image: javascript, title: 'JavaScript' },
  ];

  return (
    <div className='skills'>
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}}>Skills</motion.h2>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="items">
        {data.map((datas, idx) => (
          <motion.div  className='card' key={idx}
            initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:2.5,ease:'linear',repeat:Infinity,repeatType:'reverse'}}
          >
            <img src={datas.image} alt={datas.title} />
            <h3>{datas.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
