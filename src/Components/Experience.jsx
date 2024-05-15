import React from 'react'
import {motion} from 'framer-motion'

const Experience = () => {
  return (
    <div className='experience'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}>Experience</motion.h2>
        <div className="grid" style={{marginBottom:'3rem'}}>
            <motion.div className="col-6 center"  whileInView={{ opacity: 1, x: 0 }}
initial={{ opacity: 0, x: -100 }}
transition={{ duration: 1 }}>
                <p>Feb 2024 to May 2024</p>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
initial={{ opacity: 0, x: 100 }}
transition={{ duration: 1 }} className="col-6 ex">
                <h3>Front-End Developer</h3>
                <p>As a Front-End Developer Intern at [KCPL], I developed responsive web pages using HTML, CSS, and JavaScript, and built dynamic single-page applications with React.js. I integrated RESTful APIs for data fetching, collaborated with designers to create user-friendly interfaces, participated in code reviews, and utilized Git for version control. Additionally, I optimized web performance, ensured cross-browser compatibility, wrote unit tests, and documented the codebase.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Experience