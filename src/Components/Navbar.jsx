import React from 'react'
import GT from '../Assets/Logo.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from 'framer-motion';


const Navbar = () => {
  return (
    
        <motion.nav initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{duration:2,delay:1,stiffness:800,type:'spring'}} className='navbar'>
            <img src={GT} alt=""  className='logo'/>
            <h1>PortFolio</h1>
            <div className="social_medias">
                <ul>
                    <li><FaGithub /></li>
                    <li><FaLinkedin /></li>
                    <li><FaInstagramSquare /></li>
                </ul>
            </div>
        </motion.nav>
   
  )
}

export default Navbar