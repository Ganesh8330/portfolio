import React from 'react'
import programming from '../Assets/html-css-collage-concept.jpg'
import {motion} from 'framer-motion'

const AboutMe = () => {
  return (
    <div className='about'>
        <h2>About Me</h2>
        <div className="grid" style={{marginBottom:'3rem'}}>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}}  className="col-6">

                <img src={programming} alt=""  className='pro'/>

            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className="col-6">

                <p>Hello! I am Ganesh, a passionate and dedicated front-end developer specializing in building responsive and dynamic web applications using React. As a recent graduate with a degree in Computer Science from Pondicherry University, I have honed my skills through various projects and internships, where I have applied my knowledge in real-world scenarios.</p>

            </motion.div>
        </div>
    </div>
  )
}

export default AboutMe