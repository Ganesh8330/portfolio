import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='contact'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}>Get In Touch</motion.h2>
        <p>ganeshuc1610@gmail.com</p>
        <p>+1223456789</p>
    </div>
  )
}

export default Contact